// Asegúrate de que los elementos del DOM estén cargados antes de intentar seleccionarlos
window.addEventListener('DOMContentLoaded', (event) => {
  let searchForm = document.getElementById('search-form');
  let pokemonButton = document.getElementById('pokemon-button');
  let pokemonCard = document.getElementById('pokemon-card');

  if (searchForm) {
    searchForm.addEventListener('submit', function (p) {
      p.preventDefault();
      let pokemonId = document.getElementById('pokemon_id').value;
      getPokemon(pokemonId, pokemonCard);
    });
  }

  if (pokemonButton) {
    pokemonButton.addEventListener('click', function(b) {
      b.preventDefault();
      let pokemonId = document.getElementById('pokemon_id').value; 
      getPokemonAndRedirect(pokemonId);
    });
  }
});

async function getPokemon(pokemonId, displayDiv) {
  try {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    let data = await response.json();
    showPokemon(data, displayDiv);
  } catch (error) {
    console.error('Error en extracción de datos del Pokémon:', error);
  }
}

async function getPokemonAndRedirect(pokemonId) {
  try {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    let data = await response.json();
    localStorage.setItem('pokemon', JSON.stringify(data));
    window.location.href = './pokemon.html';
  } catch (error) {
    console.error('Error en extracción de datos del Pokémon:', error);
  }
}

function showPokemon(pokemon, displayDiv) {
  if (displayDiv) {
    displayDiv.innerHTML = `
      <div class="card">
        <h1><span>${pokemon.name}</span></h1>
        <img class="imgCard" src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <table>
          <tr>
            <th><h3>Abilities</h3></th>
          </tr>
          ${pokemon.abilities.map(ability => `<tr>
          <td>${ability.ability.name}</td></tr>`).join('')}
          <th><h3>Types</h3></th>
          ${pokemon.types.map(type => `<tr>
          <td>${type.type.name}</td></tr>`).join('')}
        </table>
      </div>  
      `;
  }
};

function showPokemonAll(pokemon) {
  let displayDiv = document.getElementById('pokemon-card2');
  let pokemonEntries = Object.entries(pokemon).map(([key, value]) => {
    // Si el valor es un objeto, intenta extraer más detalles
    if (typeof value === 'object') {
      if (Array.isArray(value)) {
        // Si el valor es un array, une sus elementos en una cadena
        value = value.map(item => item.name || item).join(', ');
      } else if (value.name) {
        // Si el valor es un objeto con una propiedad 'name', usa esa propiedad
        value = value.name;
      } else {
        // En otro caso, convierte el objeto en una cadena JSON
        value = JSON.stringify(value);
      }
    }
    return `<tr><td>${key}: ${value}</td></tr>`;
  }).join('');
  displayDiv.innerHTML = `
    <div class="card2">
      <h1><span>${pokemon.name}</span></h1>
      <img class="imgCard" src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
      <table>
        <tr>
          <th><h3>Details</h3></th>
        </tr>
        ${pokemonEntries}
      </table>
    </div>  
    `;
};

