
window.pokemonData = {
 
  filter: (data) => {
    
    const result = data.pokemon.filter(element => {
      return element.type.indexOf(condition) !== -1 ;
    })
    return result
   },
  
 
  orderAZ: (data) => {
    const resultOrden = data.pokemon.sort((a, b) => {
      if (a.name > b.name) {
          return 1;
      } if (a.name < b.name) {
          return -1;
      } return 0;
      });
          return resultOrden
        },
 
   orderZA: (data) => {
          const resultOrden = data.pokemon.sort((a, b) => {
            if (a.name < b.name) {
                return 1;
            } if (a.name > b.name) {
                return -1;
            } return 0;
            });
                return resultOrden
              }
}