
document.getElementById('search-form').addEventListener('submit', function (p) {
  p.preventDefault();

  let pokemonId = document.getElementById('pokemon_id').value;
  getPokemon(pokemonId);
});


async function getPokemon(pokemonId) {
  try {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    let data = await response.json();
    showPokemon(data);
  } catch (error) {
    console.error('Error en extracción de datos del Pokémon:', error);
  }
}

function showPokemon(pokemon) {
  let displayDiv = document.getElementById('pokemon-card');
  displayDiv.innerHTML = `
    <div class="card">
      <h1><span>${pokemon.name}</span></h1>
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
      <table>
        <tr>
          <th><h2>Abilities</h2></th>
        </tr>
        ${pokemon.abilities.map(ability => `<tr>
        <td>${ability.ability.name}</td></tr>`).join('')}
      </table>
    </div>  
    `;
}