// Variables
let totalData = "";
const root = document.querySelector("#root");
const perfilPage = document.getElementsByClassName("card-img");


//Data
window.onload = fetcheame;

function fetcheame() {
  fetch("data/pokemon/pokemon.json")
    .then(data => data.json())
    .then(data => {

      totalData = data;
      cargando();

    })
}

//Mostrar Pokemones
function principalPage(totalData) {
  root.innerHTML = "";

  for (let i of totalData) {
    root.innerHTML += `
                    <div class = "card"
                    style = "width: 10rem;" >
                        <div class = "card-body" >
                        <h5 class = "card-title" > ${i.name} </h5> 
                        <h6 class = "card-subtitle mb-2 text-muted" > N°${i.num} </h6> 
                        <p class = "card-text" > <img class = "card-img"
                    src = "${i.img}"
                    alt = "Card ${i.name}"> </p> 
                    </div> </div>`;
    modal(totalData)
  }
}

// FIltrado

document.getElementById("filtered-type").addEventListener("change", (evento) => {
  evento.preventDefault();
  let conditionType = document.getElementById("filtered-type").value;
  principalPage(window.pokemones.pokeFilter(totalData.pokemon, conditionType));


})


// Ordenado
document.getElementById("order-pokemon").addEventListener("change", (event) => {
  event.preventDefault();
  root.innerHTML = "";
  if (document.getElementById("order-pokemon").value === "az") {
    for (let i of window.pokemones.orderAZ(totalData.pokemon, "name", "az")) {
      root.innerHTML += `
            <div class = "card"
            style = "width: 10rem;" >
                <div class = "card-body" >
                <h5 class = "card-title" > ${i.name} </h5> 
                <h6 class = "card-subtitle mb-2 text-muted" > N°${i.num} </h6> 
                <p class = "card-text" > <img class ="card-img"
            src = "${i.img}"
            alt = "Card ${i.name}"> </p> 
            </div> </div>
             `;
      modal(window.pokemones.orderAZ(totalData.pokemon, "name", "az"))
    }
  }
  if (document.getElementById("order-pokemon").value === "za") {
    for (let i of window.pokemones.orderZA(totalData.pokemon, "name", "za")) {
      root.innerHTML += `
                <div class = "card"
                style = "width: 10rem;" >
                    <div class = "card-body" >
                    <h5 class = "card-title" > ${i.name} </h5> 
                    <h6 class = "card-subtitle mb-2 text-muted" > N°${i.num} </h6> 
                    <p class = "card-text" > <img class ="card-img"
                src = "${i.img}"
                alt = "Card ${i.name}"> </p> 
                </div> </div>
                 `;
      modal(window.pokemones.orderZA(totalData.pokemon, "name", "za"))
    }
  }

})
//  Modal
function modal(data) {
  for (let i = 0; i < perfilPage.length; i++) {
    perfilPage[i].addEventListener("click", () => {
      document.getElementById("modal").innerHTML = "";
      document.getElementById("modal").style.display = "block"
      document.getElementById("modal").innerHTML += `
                            <!-- Modal -->
                  <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog modal-lg">
                    
                      <!-- Modal content-->
                      <div class="modal-content">
                        <div class="modal-header">
                         <h4 class="modal-title">${data[i].name}</h4>
                         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
                         </div>
                        <div class="modal-body">

                        <div class="row">
                        <div class="col-6 col-md-4"><img id="modalImg" class = "card-img"
                        src = "${data[i].img}"
                        alt = "Card ${data[i].name}"></div>

                        <div class="col-12 col-md-8">
                        <div class="card" style="width: 18rem;">
                         <p class="list-group-item"><strong>N° : </strong>#${data[i].num} </p>
                         <p class="list-group-item"><strong>Candy: </strong>${data[i].candy} </p>

                         <p class="list-group-item"> <strong>Tipo : </strong><br>
                          <span class = "${data[i].type[0]}">${data[i].type[0]},</span>
                          <span class = "${data[i].type[1]}">${data[i].type[1]}</span> </p>
                         <p class="list-group-item"><strong>Debilidades: </strong> <br>
                          <span class = "${data[i].weaknesses[0]}">  ${data[i].weaknesses[0]},</span>
                          <span class = "${data[i].weaknesses[1]}">  ${data[i].weaknesses[1]},</span> 
                          <span class = "${data[i].weaknesses[2]}">  ${data[i].weaknesses[2]},</span> 
                          <span class = "${data[i].weaknesses[3]}">  ${data[i].weaknesses[3]},</span> 
                          <span class = "${data[i].weaknesses[4]}">  ${data[i].weaknesses[4]},</span> 
                          <span class = "${data[i].weaknesses[5]}">  ${data[i].weaknesses[5]} </span> 
                         </p>
                        </div> </div></div>
                        <br>
                        <table class="table">
                        <thead class="table">
                        <tr>
                        <th class" table table-head text-center" scope="col">Peso </th>
                        <th class"table table-head text-center" scope="col">Talla</th>
                        <th class"table table-head text-center" scope="col"> Spawn <br> Chance</th>
                        <th class"table table-head text-center" scope="col">Tiempo <br> Aparición</th>
                        <th class"table table-head text-center" scope="col">Km por Huevo</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                        <td>${data[i].weight}</td>
                        <td>${data[i].height}</td>
                        <td>${data[i].spawn_chance}</td>
                        <td>${data[i].spawn_time}</td>
                        <td>${data[i].egg}</td>
                        </tr>
                        </tbody>
                        </table>
                        </div> 

                        
                         
                         
                        <div class="modal-footer">
                       
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  </div>`;
      window.$("#myModal").modal();
    })
  }
}


//  Botón Buscar 

document.getElementById("searching").addEventListener("click", (event) => {
  let conditionSearch = document.getElementById("search-imput").value
  principalPage(window.pokemones.pokeSearch(totalData.pokemon, conditionSearch))
})


//Estadistica

document.getElementById("statistics").addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("root").style.display = "none"
  document.getElementById("myChart").style.display = "block"
  grafic(totalData.pokemon)

})

function grafic(data) {
  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new window.Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: ["Planta", "Veneno", "Fuego", "Volador", "Agua", "Tierra", "Normal", "Eléctrico", "Insecto", "Psíquico", "Dragón", "Lucha", "Hielo", "Roca", "Fantasma"],
      datasets: [{
        label: "%",
        backgroundColor: ["#00541a",
          "#930077",
          "#f12d2d",
          "#9bbfab",
          "#75cac3",
          "#a96851",
          "#b1bed5",
          "#f89d13",
          "#729d39",
          "#1a3263",
          "#f5564e",
          "#5f685a",
          "#43c0ac",
          "#c7b198",
          "#5c3b6f"
        ],
        data: [window.pokemones.computePokemon(totalData.pokemon, "Grass"), window.pokemones.computePokemon(totalData.pokemon, "Poison"), window.pokemones.computePokemon(totalData.pokemon, "Fire"), window.pokemones.computePokemon(totalData.pokemon, "Flying"), window.pokemones.computePokemon(totalData.pokemon, "Water"), window.pokemones.computePokemon(totalData.pokemon, "Ground"), window.pokemones.computePokemon(totalData.pokemon, "Normal"), window.pokemones.computePokemon(totalData.pokemon, "Electric"), window.pokemones.computePokemon(totalData.pokemon, "Bug"), window.pokemones.computePokemon(totalData.pokemon, "Psychic"), window.pokemones.computePokemon(totalData.pokemon, "Dragon"), window.pokemones.computePokemon(totalData.pokemon, "Fighting"), window.pokemones.computePokemon(totalData.pokemon, "Ice"), window.pokemones.computePokemon(totalData.pokemon, "Rock"), window.pokemones.computePokemon(totalData.pokemon, "Ghost")],
      }]
    },

    // Configuration options go here
    options: {
      title: {
        display: true,
        text: "% Pokemon por tipo"
      },
      responsive: true,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
          }
        }]
      }
    }

  });
  window.chart.update();
}


function cargando() {
  principalPage(totalData.pokemon)
  console.log("Todos los recursos terminaron de cargar!")
}
