     // Mostrar Pokemones

const datashow = document.querySelector('#root')
fetch("data/pokemon/pokemon.json")
.then (data=> data.json())
.then(data => {
   principalPage(data)
   
})

principalPage = (data) => {
//principal.innerHTML = "";
if (Array.isArray(data.pokemon)) {
   for (let valor of data.pokemon) {
       //console.log(valor.name)
       root.innerHTML += `
              
       <div class = "col-md-2">
       <div class = "card mb-2 shadow-sm">
       <img class = "card-img-top" src ="${valor.img}"alt = "Card ${valor.name}">
       <div class = "d-flex justify-content-between align-items-center">
       <button class="btn btn-info w-100" data-toggle="modal" data-target="#miModal">${valor.name}</button>
           </div>
         </div> 
      </div> 
    
  `
   }
}
}


// FIltrado

const root = document.querySelector("#root");
document.getElementById("grass").addEventListener("click", (event) => {
   event.preventDefault();
   fetch("data/pokemon/pokemon.json")
       .then(data => data.json())
       .then(data => {
           const result = data.pokemon.filter(element => {
               return element.type.indexOf("Grass") !== -1;
           })
           grass(result)
       })
},
grass = (result) => {
   root.innerHTML = "";
   if (Array.isArray(result)) {
       for (let valor of result) {
           root.innerHTML += `
           <div class = "col-md-2">
       <div class = "card mb-2 shadow-sm">
       <img class = "card-img-top" src = "${valor.img}"alt = "Card  ${valor.name}">
       <div class = "d-flex justify-content-between align-items-center">
       <a  data-toggle="modal" href="modal()" class = "bg-info text-white text-center w-100"> ${valor.name} </a> 
       </div> 
      </div> 
  </div>  
        
        `
       }
   }
})

const root1 = document.querySelector("#root");
document.getElementById("poison").addEventListener("click", (event) => {
   event.preventDefault();
   fetch("data/pokemon/pokemon.json")
       .then(data => data.json())
       .then(data => {
           const result = data.pokemon.filter(element => {
               return element.type.indexOf("Poison") !== -1;
           })
           poison(result)
       })
},
poison = (result) => {
   root.innerHTML = "";
   if (Array.isArray(result)) {
       for (let valor of result) {
           root.innerHTML += `
           <div class = "col-md-2">
       <div class = "card mb-2 shadow-sm">
       <img class = "card-img-top" src = "${valor.img}"alt = "Card  ${valor.name}">
       <div class = "d-flex justify-content-between align-items-center">
       <a  data-toggle="modal" href="modal()" class = "bg-info text-white text-center w-100"> ${valor.name} </a> 
       </div> 
      </div> 
  </div> `
       }
   }
})
const root2 = document.querySelector("#root");
document.getElementById("fire").addEventListener("click", (event) => {
   event.preventDefault();
   fetch("data/pokemon/pokemon.json")
       .then(data => data.json())
       .then(data => {
           const result = data.pokemon.filter(element => {
               return element.type.indexOf("Fire") !== -1;
           })
           fire(result)
       })
},
fire = (result) => {
   root.innerHTML = "";
   if (Array.isArray(result)) {
       for (let valor of result) {
           root.innerHTML += `
               <div class = "col-md-2">
                 <div class = "card mb-2 shadow-sm">
                 <img class = "card-img-top" src = "${valor.img}"alt = "Card  ${valor.name}">
                 <div class = "d-flex justify-content-between align-items-center">
                 <button type = "button" class = "btn btn-sm btn-outline-dark w-100"> ${valor.name} </button> 
                 </div> 
                </div> 
            </div> `
       }
   }
})
const root3 = document.querySelector("#root");
document.getElementById("flying").addEventListener("click", (event) => {
   event.preventDefault();
   fetch("data/pokemon/pokemon.json")
       .then(data => data.json())
       .then(data => {
           const result = data.pokemon.filter(element => {
               return element.type.indexOf("Flying") !== -1;
           })
           flying(result)
       })
},
flying = (result) => {
   root.innerHTML = "";
   if (Array.isArray(result)) {
       for (let valor of result) {
           root.innerHTML += `
                   <div class = "col-md-2">
                     <div class = "card mb-2 shadow-sm">
                     <img class = "card-img-top" src = "${valor.img}"alt = "Card  ${valor.name}">
                     <div class = "d-flex justify-content-between align-items-center">
                     <button type = "button" class = "btn btn-sm btn-outline-dark w-100"> ${valor.name} </button> 
                     </div> 
                    </div> 
                </div> `
       }
   }
})

const root4 = document.querySelector("#root");
document.getElementById("water").addEventListener("click", (event) => {
   event.preventDefault();
   fetch("data/pokemon/pokemon.json")
       .then(data => data.json())
       .then(data => {
           const result = data.pokemon.filter(element => {
               return element.type.indexOf("Water") !== -1;
           })
           water(result)
       })
},
water = (result) => {
   root.innerHTML = "";
   if (Array.isArray(result)) {
       for (let valor of result) {
           root.innerHTML += `
                       <div class = "col-md-2">
                         <div class = "card mb-2 shadow-sm">
                         <img class = "card-img-top" src = "${valor.img}"alt = "Card  ${valor.name}">
                         <div class = "d-flex justify-content-between align-items-center">
                         <button type = "button" class = "btn btn-sm btn-outline-dark w-100"> ${valor.name} </button> 
                         </div> 
                        </div> 
                    </div> `
       }
   }
})

const root5 = document.querySelector("#root");
document.getElementById("bug").addEventListener("click", (event) => {
   event.preventDefault();
   fetch("data/pokemon/pokemon.json")
       .then(data => data.json())
       .then(data => {
           const result = data.pokemon.filter(element => {
               return element.type.indexOf("Bug") !== -1;
           })
           bug(result)
       })
},
bug = (result) => {
   root.innerHTML = "";
   if (Array.isArray(result)) {
       for (let valor of result) {
           root.innerHTML += `
                           <div class = "col-md-2">
                             <div class = "card mb-2 shadow-sm">
                             <img class = "card-img-top" src = "${valor.img}"alt = "Card  ${valor.name}">
                             <div class = "d-flex justify-content-between align-items-center">
                             <button type = "button" class = "btn btn-sm btn-outline-dark w-100"> ${valor.name} </button> 
                             </div> 
                            </div> 
                        </div> `
       }
   }
})

const root6 = document.querySelector("#root");
document.getElementById("normal").addEventListener("click", (event) => {
   event.preventDefault();
   fetch("data/pokemon/pokemon.json")
       .then(data => data.json())
       .then(data => {
           const result = data.pokemon.filter(element => {
               return element.type.indexOf("Normal") !== -1;
           })
           normal(result)
       })
},
normal = (result) => {
   root.innerHTML = "";
   if (Array.isArray(result)) {
       for (let valor of result) {
           root.innerHTML += `
           <div class="col-lg-2 col-md-3 col-xs-5 ">
           <a href="${valor.img}" class="fancybox" rel="ligthbox">
               <img  src="${valor.img}" class="zoom img-fluid "  alt="">
              
           </a>
       </div>
           
           
           
           `
       }
   }
})
const root7 = document.querySelector("#root");
document.getElementById("electric").addEventListener("click", (event) => {
   event.preventDefault();
   fetch("data/pokemon/pokemon.json")
       .then(data => data.json())
       .then(data => {
           const result = data.pokemon.filter(element => {
               return element.type.indexOf("Electric") !== -1;
           })
           electric(result)
       })
},
electric = (result) => {
   root.innerHTML = "";
   if (Array.isArray(result)) {
       for (let valor of result) {
           root.innerHTML += `
           <div class = "col-md-2">
                                     <div class = "card mb-2 shadow-sm">
                                     <img class = "card-img-top" src = "${valor.img}"alt = "Card  ${valor.name}">
                                     <div class = "d-flex justify-content-between align-items-center">
                                     <button type = "button" class = "btn btn-sm btn-outline-dark w-100"> ${valor.name} </button> 
                                     </div> 
                                    </div> 
                                </div>`
       }
   }
})
const root8 = document.querySelector("#root");
document.getElementById("ground").addEventListener("click", (event) => {
   event.preventDefault();
   fetch("data/pokemon/pokemon.json")
       .then(data => data.json())
       .then(data => {
           const result = data.pokemon.filter(element => {
               return element.type.indexOf("Ground") !== -1;
           })
           flying(result)
       })
},
ground = (result) => {
   root.innerHTML = "";
   if (Array.isArray(result)) {
       for (let valor of result) {
           root.innerHTML += `
                                   <div class = "col-md-2">
                                     <div class = "card mb-2 shadow-sm">
                                     <img class = "card-img-top" src = "${valor.img}"alt = "Card  ${valor.name}">
                                     <div class = "d-flex justify-content-between align-items-center">
                                     <button type = "button" class = "btn btn-sm btn-outline-dark w-100"> ${valor.name} </button> 
                                     </div> 
                                    </div> 
                                </div> `
       }
   }
})

const root9 = document.querySelector("#root");
document.getElementById("fighting").addEventListener("click", (event) => {
   event.preventDefault();
   fetch("data/pokemon/pokemon.json")
       .then(data => data.json())
       .then(data => {
           const result = data.pokemon.filter(element => {
               return element.type.indexOf("Fighting") !== -1;
           })
           fighting(result)
       })
},
fighting = (result) => {
   root.innerHTML = "";
   if (Array.isArray(result)) {
       for (let valor of result) {
           root.innerHTML += `
                                       <div class = "col-md-2">
                                         <div class = "card mb-2 shadow-sm">
                                         <img class = "card-img-top" src = "${valor.img}"alt = "Card  ${valor.name}">
                                         <div class = "d-flex justify-content-between align-items-center">
                                         <button type = "button" class = "btn btn-sm btn-outline-dark w-100"> ${valor.name} </button> 
                                         </div> 
                                        </div> 
                                    </div> `
       }
   }
})
const root10 = document.querySelector("#root");
document.getElementById("psychic").addEventListener("click", (event) => {
   event.preventDefault();
   fetch("data/pokemon/pokemon.json")
       .then(data => data.json())
       .then(data => {
           const result = data.pokemon.filter(element => {
               return element.type.indexOf("Psychic") !== -1;
           })
           psychic(result)
       })
},
psychic = (result) => {
   root.innerHTML = "";
   if (Array.isArray(result)) {
       for (let valor of result) {
           root.innerHTML += `
                                       <div class = "col-md-2">
                                         <div class = "card mb-2 shadow-sm">
                                         <img class = "card-img-top" src = "${valor.img}"alt = "Card  ${valor.name}">
                                         <div class = "d-flex justify-content-between align-items-center">
                                         <button type = "button" class = "btn btn-sm btn-outline-dark w-100"> ${valor.name} </button> 
                                         </div> 
                                        </div> 
                                    </div> `
       }
   }
})
const root11 = document.querySelector("#root");
document.getElementById("rock").addEventListener("click", (event) => {
   event.preventDefault();
   fetch("data/pokemon/pokemon.json")
       .then(data => data.json())
       .then(data => {
           const result = data.pokemon.filter(element => {
               return element.type.indexOf("Rock") !== -1;
           })
           rock(result)
       })
},
rock = (result) => {
   root.innerHTML = "";
   if (Array.isArray(result)) {
       for (let valor of result) {
           root.innerHTML += `
                                       <div class = "col-md-2">
                                         <div class = "card mb-2 shadow-sm">
                                         <img class = "card-img-top" src = "${valor.img}"alt = "Card  ${valor.name}">
                                         <div class = "d-flex justify-content-between align-items-center">
                                         <button type = "button" class = "btn btn-sm btn-outline-dark w-100"> ${valor.name} </button> 
                                         </div> 
                                        </div> 
                                    </div> `
       }
   }
})
     
const root12 = document.querySelector("#root");
document.getElementById("ice").addEventListener("click", (event) => {
   event.preventDefault();
   fetch("data/pokemon/pokemon.json")
       .then(data => data.json())
       .then(data => {
           const result = data.pokemon.filter(element => {
               return element.type.indexOf("Ice") !== -1;
           })
           ice(result)
       })
},
ice = (result) => {
   root.innerHTML = "";
   if (Array.isArray(result)) {
       for (let valor of result) {
           root.innerHTML += `
                                       <div class = "col-md-2">
                                         <div class = "card mb-2 shadow-sm">
                                         <img class = "card-img-top" src = "${valor.img}"alt = "Card  ${valor.name}">
                                         <div class = "d-flex justify-content-between align-items-center">
                                         <button type = "button" class = "btn btn-sm btn-outline-dark w-100"> ${valor.name} </button> 
                                         </div> 
                                        </div> 
                                    </div> `
       }
   }
})
const root13 = document.querySelector("#root");
document.getElementById("ghost").addEventListener("click", (event) => {
       event.preventDefault();
       fetch("data/pokemon/pokemon.json")
           .then(data => data.json())
           .then(data => {
               const result = data.pokemon.filter(element => {
                   return element.type.indexOf("Ghost") !== -1;
               })
               ghost(result)
           })
   },
   ghost = (result) => {
       root.innerHTML = "";
       if (Array.isArray(result)) {
           for (let valor of result) {
               root.innerHTML += `
                                           <div class = "col-md-2">
                                             <div class = "card mb-2 shadow-sm">
                                             <img class = "card-img-top" src = "${valor.img}"alt = "Card  ${valor.name}">
                                             <div class = "d-flex justify-content-between align-items-center">
                                             <button type = "button" class = "btn btn-sm btn-outline-dark w-100"> ${valor.name} </button> 
                                             </div> 
                                            </div> 
                                        </div> `
           }
       }
   })
   const root14 = document.querySelector("#root");
   document.getElementById("dragon").addEventListener("click", (event) => {
           event.preventDefault();
           fetch("data/pokemon/pokemon.json")
               .then(data => data.json())
               .then(data => {
                   const result = data.pokemon.filter(element => {
                       return element.type.indexOf("Dragon") !== -1;
                   })
                   dragon(result)
               })
       },
       dragon = (result) => {
           root.innerHTML = "";
           if (Array.isArray(result)) {
               for (let valor of result) {
                   root.innerHTML += `
                                               <div class = "col-md-2">
                                                 <div class = "card mb-2 shadow-sm">
                                                 <img class = "card-img-top" src = "${valor.img}"alt = "Card  ${valor.name}">
                                                 <div class = "d-flex justify-content-between align-items-center">
                                                 <button type = "button" class = "btn btn-sm btn-outline-dark w-100"> ${valor.name} </button> 
                                                 </div> 
                                                </div> 
                                            </div> `
               }
           }
       })

// Ordenar AZ
const rootAZ = document.querySelector("#root");
document.getElementById("orderA").addEventListener("click", (event) => {
event.preventDefault();
fetch("data/pokemon/pokemon.json")
    .then(data => data.json())
    .then(data => {
       const resultOrden = data.pokemon.sort((a, b) => {
           if (a.name > b.name) {
             return 1;
           }
           if (a.name < b.name) {
             return -1;
           }
           return 0;
         });
         aOrder(resultOrden)
       })
   },
aOrder = (resultOrden) => {
root.innerHTML = "";
if (Array.isArray(resultOrden)) {
for (let valor of resultOrden) {
console.log(valor.name)
root.innerHTML += `
  <div class = "col-md-2">
  <div class = "card mb-2 shadow-sm">
  <img class = "card-img-top" src = "${valor.img}"alt = "Card ${valor.name}">
  <div class = "d-flex justify-content-between align-items-center">
  <button type = "button" class = "btn btn-sm btn-outline-dark w-100"> ${valor.name} </button> 
  </div> 
 </div> 
</div> `

}
}
})

const rootZA = document.querySelector("#root");
document.getElementById("orderZ").addEventListener("click", (event) => {
event.preventDefault();
fetch("data/pokemon/pokemon.json")
 .then(data => data.json())
 .then(data => {
   const resultOrden = data.pokemon.sort((a, b) => {
     if (a.name < b.name) {
       return 1;
     }
     if (a.name > b.name) {
       return -1;
     }
     return 0;
   });
   zOrder(resultOrden)
 })
},
zOrder = (resultOrden) => {
root.innerHTML = "";
if (Array.isArray(resultOrden)) {
 for (let valor of resultOrden) {
   console.log(valor.name)
   root.innerHTML += `
      <div class = "col-md-2">
      <div class = "card mb-2 shadow-sm">
      <img class = "card-img-top" src = "${valor.img}"alt = "Card ${valor.name}">
      <div class = "d-flex justify-content-between align-items-center">
      <button type = "button" class = "btn btn-sm btn-outline-dark w-100"> ${valor.name} </button> 
      </div> 
     </div> 
 </div> `

 }
}
}
)