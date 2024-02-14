
document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let pokemonName = document.getElementById('pokemon-name').value.toLowerCase();
    obtenerPokemon(pokemonName);
  });
  

  async function obtenerPokemon(pokemonName) {
    try {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      let data = await response.json();
      mostrarPokemon(data);
    } catch (error) {
      console.error('Error al obtener datos del Pokémon:', error);
    }
  }

  
  function mostrarPokemon(pokemon) {
    let displayDiv = document.getElementById('pokemon-card');
    displayDiv.innerHTML = `
    <div class="card">
      <h1>${pokemon.name}</h1>
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
      <table>
        <tr>
          <th>Habilidad</th>
        </tr>
        ${pokemon.abilities.map(ability => `<tr><td>${ability.ability.name}</td></tr>`).join('')}
      </table>
    </div>  
    `;
  }