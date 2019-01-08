let totalData= "";

fetch("pokemon.json")
            .then(data => data.json())
            .then(data => {
              
              totalData=data
     }),

window.totalData= totalData

window.pokemones = {

  pokeFilter: (data,condition) => {
    
    const result = data.filter(element => {
      return element.type.indexOf(condition) !== -1 ;
    })
    return result
   },

   
  orderAZ: (data) => {
    const resultOrden = data.sort((a, b) => {
      if (a.name > b.name) {
          return 1;
      } if (a.name < b.name) {
          return -1;
      } return 0;
      });
          return resultOrden
        },
 
  orderZA: (data) => {
          const resultOrden = data.sort((a, b) => {
            if (a.name < b.name) {
                return 1;
            } if (a.name > b.name) {
                return -1;
            } return 0;
            });
                return resultOrden
              }
}