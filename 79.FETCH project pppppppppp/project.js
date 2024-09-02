// we are going to create a text box and a button to search a
// pokemon and pull up a sprite of that pokemon and display it





fetchData();


async function fetchData(){

      try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
// with our fetch function we are going to use a template string
// for the pokemons name we will use a placeholder 
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

          if(!response.ok){
            throw new Error("Could not fetch resource");
          }

          const data = await response.json(); 
// we are going to fetch front_default
        //so we don't need   console.log(data);  anymore
        const pokemonSprites = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

       // we will chane the CSS of imgelement  
       imgElement.src = pokemonSprites; // this is constant 
       imgElement.style.display = "block";

      }
      catch(error){
          console.error(error);
      }
  }