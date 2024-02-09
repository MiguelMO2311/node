

document.getElementById("pokemon").addEventListener("click",() =>{
    getPokemon()
})

async function getPokemon() {

    try{

        const pokemon_id = document.getElementById("id").value;
        const pokemon_name = document.getElementById("name").value;
        
        let url = `http://localhost:3000/pokemon?id=${pokemon_id}`
        
        // if (pokemon_id === '' && pokemon_name === '')
        //     return
       
        //     if (pokemon_id !== ""){
        //     url += `/${pokemon_id}`
        // } else {
        //     url += `/${pokemon_name}`
        // }
        

        const params = {
            headers: {"Content-type":"application/json"},
            method: "GET"
        }
        const data = await fetch(url, params);
        const result = await data.json();

        console.log (result)

        document.getElementById("name").innerHTML = result.res.name
        document.getElementById("image").src = result.res.image
    } 
    catch(error){
        document.getElementById("name").innerHTML = 'No existe este Pokemon'
        document.getElementById("image").src = "./img_pokemon_vacio.jpg"
    } 
       
    }
