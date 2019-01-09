// Mostrar Pokemones
const datashow = document.querySelector('#root')
 
function principalPage(data){
        if (Array.isArray(totalData.pokemon)) {
                for (let i of totalData.pokemon) {
                    root.innerHTML += `
                    <div class = "card"
                    style = "width: 10rem;" >
                        <div class = "card-body" >
                        <h5 class = "card-title" > ${i.name} </h5> 
                        <h6 class = "card-subtitle mb-2 text-muted" > N°${i.num} </h6> 
                        <p class = "card-text" > <img class = "card-img"
                    src = "${i.img}"
                    alt = "Card ${i.name}"> </p> 
                    </div> </div>`; modal(totalData.pokemon)
        }}}

 // FIltrado
    const root = document.querySelector("#root");
    const compute = document.querySelector(".average");

     document.getElementById("grass").addEventListener("click", (event) => {
         event.preventDefault();
        
         grassFilter(window.pokemones.pokeFilter(totalData.pokemon,"Grass"));
         grassPercentage(window.pokemones.computePokemon(totalData.pokemon,"Grass"))
        
     })
     document.getElementById("grass-mobile").addEventListener("click", (event) => {
        event.preventDefault();
       
        grassFilter(window.pokemones.pokeFilter(totalData.pokemon,"Grass"));
        grassPercentage(window.pokemones.computePokemon(totalData.pokemon,"Grass"))
    })
     function grassFilter(result){
             root.innerHTML = "";
             if (Array.isArray(result)) {
                for (let i of result) {
             root.innerHTML += `
             <div class = "card"
             style = "width: 10rem;" >
                 <div class = "card-body" >
                 <h5 class = "card-title" > ${i.name} </h5> 
                 <h6 class = "card-subtitle mb-2 text-muted" > N°${i.num} </h6> 
                 <p class = "card-text" > <img class = "card-img"
             src = "${i.img}"
             alt = "Card ${i.name}"> </p> 
             </div> </div>
              `;  modal(window.pokemones.pokeFilter(totalData.pokemon,"Grass"))
         } 
        }} 
    function grassPercentage(){
        compute.innerHTML = `<span class="percentage"> El <strong> ${window.pokemones.computePokemon(totalData.pokemon,"Grass")}% </strong> de los Pokemones de la región de Kanto son de Planta. </span>`
    }

        document.getElementById("poison").addEventListener("click", (event) => {
            event.preventDefault();
            poisonFilter(window.pokemones.pokeFilter(totalData.pokemon,"Poison"));
            poisonPercentage(window.pokemones.computePokemon(totalData.pokemon,"Poison"))
        })
        document.getElementById("poison-mobile").addEventListener("click", (event) => {
            event.preventDefault();
            poisonFilter(window.pokemones.pokeFilter(totalData.pokemon,"Poison"))
            poisonPercentage(window.pokemones.computePokemon(totalData.pokemon,"Poison"))
        })
        
        function poisonFilter(result){
                root.innerHTML = "";
                if (Array.isArray(result)) {
                   for (let i of result) {
                root.innerHTML += `
                <div class = "card"
                style = "width: 10rem;" >
                    <div class = "card-body" >
                    <h5 class = "card-title" > ${i.name} </h5> 
                    <h6 class = "card-subtitle mb-2 text-muted" > N°${i.num} </h6> 
                    <p class = "card-text" > <img class = "card-img"
                src = "${i.img}"
                alt = "Card ${i.name}"> </p> 
                </div> </div>
                 `;  modal(window.pokemones.pokeFilter(totalData.pokemon,"Poison"))
            }}}
        function poisonPercentage(){
               compute.innerHTML = `<span class="percentage"> El <strong> ${window.pokemones.computePokemon(totalData.pokemon,"Poison")}% </strong> de los Pokemones de la región de Kanto son Venenoso.</span>`
            }
        document.getElementById("fire").addEventListener("click", (event) => {
            event.preventDefault();
            fireFilter(window.pokemones.pokeFilter(totalData.pokemon,"Fire"));
            firePercentage(window.pokemones.computePokemon(totalData.pokemon,"Fire"))
           
        })
        document.getElementById("fire-mobile").addEventListener("click", (event) => {
            event.preventDefault();
            fireFilter(window.pokemones.pokeFilter(totalData.pokemon,"Fire"));
            firePercentage(window.pokemones.computePokemon(totalData.pokemon,"Fire"))
        })
        function fireFilter(result){
                root.innerHTML = "";
                if (Array.isArray(result)) {
                   for (let i of result) {
                root.innerHTML += `
                <div class = "card"
                style = "width: 10rem;" >
                    <div class = "card-body" >
                    <h5 class = "card-title" > ${i.name} </h5> 
                    <h6 class = "card-subtitle mb-2 text-muted" > N°${i.num} </h6> 
                    <p class = "card-text" > <img class = "card-img"
                src = "${i.img}"
                alt = "Card ${i.name}"> </p> 
                </div> </div>
                 `;  modal(window.pokemones.pokeFilter(totalData.pokemon,"Fire"))
            }}}
        function firePercentage(){
                compute.innerHTML = `<span class="percentage"> El <strong> ${window.pokemones.computePokemon(totalData.pokemon,"Fire")}% </strong> de los Pokemones de la región de Kanto son de tipo Fuego.</span>`
             }
        document.getElementById("flying").addEventListener("click", (event) => {
            event.preventDefault();
            flyingFilter(window.pokemones.pokeFilter(totalData.pokemon,"Flying"));
            flyingPercentage(window.pokemones.computePokemon(totalData.pokemon,"Flying"))
        })
        document.getElementById("flying-mobile").addEventListener("click", (event) => {
            event.preventDefault();
            flyingFilter(window.pokemones.pokeFilter(totalData.pokemon,"Flying"));
            flyingPercentage(window.pokemones.computePokemon(totalData.pokemon,"Flying"))
        })
        function flyingFilter(result){
                root.innerHTML = "";
                if (Array.isArray(result)) {
                   for (let i of result) {
                root.innerHTML += `
                <div class = "card"
                style = "width: 10rem;" >
                    <div class = "card-body" >
                    <h5 class = "card-title" > ${i.name} </h5> 
                    <h6 class = "card-subtitle mb-2 text-muted" > N°${i.num} </h6> 
                    <p class = "card-text" > <img class = "card-img"
                src = "${i.img}"
                alt = "Card ${i.name}"> </p> 
                </div> </div>
                 `; modal(window.pokemones.pokeFilter(totalData.pokemon,"Flying"))
            }}}
        function flyingPercentage(){
                compute.innerHTML = `<span class="percentage"> El <strong> ${window.pokemones.computePokemon(totalData.pokemon,"Flying")}% </strong> de los Pokemones de la región de Kanto son de tipo Volador.</span>`
             }
        document.getElementById("water").addEventListener("click", (event) => {
            event.preventDefault();
            waterFilter(window.pokemones.pokeFilter(totalData.pokemon,"Water"));
            waterPercentage(window.pokemones.computePokemon(totalData.pokemon,"Water"))
        })
        document.getElementById("water-mobile").addEventListener("click", (event) => {
            event.preventDefault();
            waterFilter(window.pokemones.pokeFilter(totalData.pokemon,"Water"));
            waterPercentage(window.pokemones.computePokemon(totalData.pokemon,"Water"))
        })
        function waterFilter(result){
                root.innerHTML = "";
                if (Array.isArray(result)) {
                   for (let i of result) {
                root.innerHTML += `
                <div class = "card"
                style = "width: 10rem;" >
                    <div class = "card-body" >
                    <h5 class = "card-title" > ${i.name} </h5> 
                    <h6 class = "card-subtitle mb-2 text-muted" > N°${i.num} </h6> 
                    <p class = "card-text" > <img class = "card-img"
                src = "${i.img}"
                alt = "Card ${i.name}"> </p> 
                </div> </div>
                 `; modal(window.pokemones.pokeFilter(totalData.pokemon,"Water"))
            }}}
        function waterPercentage(){
                compute.innerHTML = `<span class="percentage"> El <strong> ${window.pokemones.computePokemon(totalData.pokemon,"Water")}% </strong> de los Pokemones de la región de Kanto son de tipo Agua.</span>`
             }  
        document.getElementById("bug").addEventListener("click", (event) => {
            event.preventDefault();
            bugFilter(window.pokemones.pokeFilter(totalData.pokemon,"Bug"));
            bugPercentage(window.pokemones.computePokemon(totalData.pokemon,"Bug"))
        })
        document.getElementById("bug-mobile").addEventListener("click", (event) => {
            event.preventDefault();
            bugFilter(window.pokemones.pokeFilter(totalData.pokemon,"Bug"));
            bugPercentage(window.pokemones.computePokemon(totalData.pokemon,"Bug"))
        })
        function bugFilter(result){
                root.innerHTML = "";
                if (Array.isArray(result)) {
                   for (let i of result) {
                root.innerHTML += `
                <div class = "card"
                style = "width: 10rem;" >
                    <div class = "card-body" >
                    <h5 class = "card-title" > ${i.name} </h5> 
                    <h6 class = "card-subtitle mb-2 text-muted" > N°${i.num} </h6> 
                    <p class = "card-text" > <img class = "card-img"
                src = "${i.img}"
                alt = "Card ${i.name}"> </p> 
                </div> </div>
                 `; modal(window.pokemones.pokeFilter(totalData.pokemon,"Bug"))
            }}}   
        function bugPercentage(){
                compute.innerHTML = `<span class="percentage"> El <strong> ${window.pokemones.computePokemon(totalData.pokemon,"Bug")}% </strong> de los Pokemones de la región de Kanto son de tipo Insecto.</span>`
             }
        document.getElementById("normal").addEventListener("click", (event) => {
            event.preventDefault();
            normalFilter(window.pokemones.pokeFilter(totalData.pokemon,"Normal"));
            normalPercentage(window.pokemones.computePokemon(totalData.pokemon,"Normal"))
   
        })
        document.getElementById("normal-mobile").addEventListener("click", (event) => {
            event.preventDefault();
            normalFilter(window.pokemones.pokeFilter(totalData.pokemon,"Normal"));
            normalPercentage(window.pokemones.computePokemon(totalData.pokemon,"Normal"))
   
        })
        function normalFilter(result){
                root.innerHTML = "";
                if (Array.isArray(result)) {
                   for (let i of result) {
                root.innerHTML += `
                <div class = "card"
                style = "width: 10rem;" >
                    <div class = "card-body" >
                    <h5 class = "card-title" > ${i.name} </h5> 
                    <h6 class = "card-subtitle mb-2 text-muted" > N°${i.num} </h6> 
                    <p class = "card-text" > <img class = "card-img"
                src = "${i.img}"
                alt = "Card ${i.name}"> </p> 
                </div> </div>
                 `; modal(window.pokemones.pokeFilter(totalData.pokemon,"Normal"))
            }}} 
        function normalPercentage(){
                compute.innerHTML = `<span class="percentage"> El <strong> ${window.pokemones.computePokemon(totalData.pokemon,"Normal")}% </strong> de los Pokemones de la región de Kanto son de tipo Normal.</span>`
             }
       
        document.getElementById("electric").addEventListener("click", (event) => {
            event.preventDefault();
            electricFilter(window.pokemones.pokeFilter(totalData.pokemon,"Electric"));
            electricPercentage(window.pokemones.computePokemon(totalData.pokemon,"Electric"))
        })
        document.getElementById("electric-mobile").addEventListener("click", (event) => {
            event.preventDefault();
            electricFilter(window.pokemones.pokeFilter(totalData.pokemon,"Electric"));
            electricPercentage(window.pokemones.computePokemon(totalData.pokemon,"Electric"))
        })
        function electricFilter(result){
                root.innerHTML = "";
                if (Array.isArray(result)) {
                   for (let i of result) {
                root.innerHTML += `
                <div class = "card"
                style = "width: 10rem;" >
                    <div class = "card-body" >
                    <h5 class = "card-title" > ${i.name} </h5> 
                    <h6 class = "card-subtitle mb-2 text-muted" > N°${i.num} </h6> 
                    <p class = "card-text" > <img class = "card-img"
                src = "${i.img}"
                alt = "Card ${i.name}"> </p> 
                </div> </div>
                 `; modal(window.pokemones.pokeFilter(totalData.pokemon,"Electric"))
            }}} 
        function electricPercentage(){
                compute.innerHTML = `<span class="percentage"> El <strong> ${window.pokemones.computePokemon(totalData.pokemon,"Normal")}% </strong> de los Pokemones de la región de Kanto son de tipo Electrico.</span>`
             }
        document.getElementById("ground").addEventListener("click", (event) => {
            event.preventDefault();
            groundFilter(window.pokemones.pokeFilter(totalData.pokemon,"Ground"));
   
        })
        document.getElementById("ground-mobile").addEventListener("click", (event) => {
            event.preventDefault();
            groundFilter(window.pokemones.pokeFilter(totalData.pokemon,"Ground"));
   
        })
        function groundFilter(result){
                root.innerHTML = "";
                if (Array.isArray(result)) {
                   for (let i of result) {
                root.innerHTML += `
                <div class = "card"
                style = "width: 10rem;" >
                    <div class = "card-body" >
                    <h5 class = "card-title" > ${i.name} </h5> 
                    <h6 class = "card-subtitle mb-2 text-muted" > N°${i.num} </h6> 
                    <p class = "card-text" > <img class = "card-img"
                src = "${i.img}"
                alt = "Card ${i.name}"> </p> 
                </div> </div>
                 `; modal(window.pokemones.pokeFilter(totalData.pokemon,"Ground"))
            }}} 
        document.getElementById("fighting").addEventListener("click", (event) => {
            event.preventDefault();
            fightingFilter(window.pokemones.pokeFilter(totalData.pokemon,"Fighting"));
   
        })
        document.getElementById("fighting-mobile").addEventListener("click", (event) => {
            event.preventDefault();
            fightingFilter(window.pokemones.pokeFilter(totalData.pokemon,"Fighting"));
   
        })
        function fightingFilter(result){
                root.innerHTML = "";
                if (Array.isArray(result)) {
                   for (let i of result) {
                root.innerHTML += `
                <div class = "card"
                style = "width: 10rem;" >
                    <div class = "card-body" >
                    <h5 class = "card-title" > ${i.name} </h5> 
                    <h6 class = "card-subtitle mb-2 text-muted" > N°${i.num} </h6> 
                    <p class = "card-text" > <img class = "card-img"
                src = "${i.img}"
                alt = "Card ${i.name}"> </p> 
                </div> </div>
                 `; modal(window.pokemones.pokeFilter(totalData.pokemon,"Fighting"))
            }}} 
        document.getElementById("psychic").addEventListener("click", (event) => {
            event.preventDefault();
            psychicFilter(window.pokemones.pokeFilter(totalData.pokemon,"Psychic"));
   
        })
        document.getElementById("psychic-mobile").addEventListener("click", (event) => {
            event.preventDefault();
            psychicFilter(window.pokemones.pokeFilter(totalData.pokemon,"Psychic"));
   
        })
        function psychicFilter(result){
                root.innerHTML = "";
                if (Array.isArray(result)) {
                   for (let i of result) {
                root.innerHTML += `
                <div class = "card"
                style = "width: 10rem;" >
                    <div class = "card-body" >
                    <h5 class = "card-title" > ${i.name} </h5> 
                    <h6 class = "card-subtitle mb-2 text-muted" > N°${i.num} </h6> 
                    <p class = "card-text" > <img class = "card-img"
                src = "${i.img}"
                alt = "Card ${i.name}"> </p> 
                </div> </div>
                 `; modal(window.pokemones.pokeFilter(totalData.pokemon,"Psychic"))
            }}} 
        document.getElementById("rock").addEventListener("click", (event) => {
            event.preventDefault();
            rockFilter(window.pokemones.pokeFilter(totalData.pokemon,"Rock"));
   
        })
        document.getElementById("rock-mobile").addEventListener("click", (event) => {
            event.preventDefault();
            rockFilter(window.pokemones.pokeFilter(totalData.pokemon,"Rock"));
   
        })
        function rockFilter(result){
                root.innerHTML = "";
                if (Array.isArray(result)) {
                   for (let i of result) {
                root.innerHTML += `
                <div class = "card"
                style = "width: 10rem;" >
                    <div class = "card-body" >
                    <h5 class = "card-title" > ${i.name} </h5> 
                    <h6 class = "card-subtitle mb-2 text-muted" > N°${i.num} </h6> 
                    <p class = "card-text" > <img class = "card-img"
                src = "${i.img}"
                alt = "Card ${i.name}"> </p> 
                </div> </div>
                 `; modal(window.pokemones.pokeFilter(totalData.pokemon,"Rock"))
            }}} 
        document.getElementById("ice").addEventListener("click", (event) => {
            event.preventDefault();
            iceFilter(window.pokemones.pokeFilter(totalData.pokemon,"Ice"));
   
        })
        document.getElementById("ice-mobile").addEventListener("click", (event) => {
            event.preventDefault();
            iceFilter(window.pokemones.pokeFilter(totalData.pokemon,"Ice"));
   
        })
        function iceFilter(result){
                root.innerHTML = "";
                if (Array.isArray(result)) {
                   for (let i of result) {
                root.innerHTML += `
                <div class = "card"
                style = "width: 10rem;" >
                    <div class = "card-body" >
                    <h5 class = "card-title" > ${i.name} </h5> 
                    <h6 class = "card-subtitle mb-2 text-muted" > N°${i.num} </h6> 
                    <p class = "card-text" > <img class = "card-img"
                src = "${i.img}"
                alt = "Card ${i.name}"> </p> 
                </div> </div>
                 `; modal (window.pokemones.pokeFilter(totalData.pokemon,"Ice"))
            }}} 
       
        document.getElementById("ghost").addEventListener("click", (event) => {
            event.preventDefault();
            ghostFilter(window.pokemones.pokeFilter(totalData.pokemon,"Ghost"));
   
        })
        document.getElementById("ghost-mobile").addEventListener("click", (event) => {
            event.preventDefault();
            ghostFilter(window.pokemones.pokeFilter(totalData.pokemon,"Ghost"));
   
        })
        function ghostFilter(result){
                root.innerHTML = "";
                if (Array.isArray(result)) {
                   for (let i of result) {
                root.innerHTML += `
                <div class = "card"
                style = "width: 10rem;" >
                    <div class = "card-body" >
                    <h5 class = "card-title" > ${i.name} </h5> 
                    <h6 class = "card-subtitle mb-2 text-muted" > N°${i.num} </h6> 
                    <p class = "card-text" > <img class = "card-img"
                src = "${i.img}"
                alt = "Card ${i.name}"> </p> 
                </div> </div>
                 `; modal(window.pokemones.pokeFilter(totalData.pokemon,"Ghost"))
            }}} 
        document.getElementById("dragon").addEventListener("click", (event) => {
            event.preventDefault();
            dragonFilter(window.pokemones.pokeFilter(totalData.pokemon,"Dragon"));
   
        })
        document.getElementById("dragon-mobile").addEventListener("click", (event) => {
            event.preventDefault();
            dragonFilter(window.pokemones.pokeFilter(totalData.pokemon,"Dragon"));
   
        })
        function dragonFilter(result){
                root.innerHTML = "";
                if (Array.isArray(result)) {
                   for (let i of result) {
                root.innerHTML += `
                <div class = "card"
                style = "width: 10rem;" >
                    <div class = "card-body" >
                    <h5 class = "card-title" > ${i.name} </h5> 
                    <h6 class = "card-subtitle mb-2 text-muted" > N°${i.num} </h6> 
                    <p class = "card-text" > <img class = "card-img"
                src = "${i.img}"
                alt = "Card ${i.name}"> </p> 
                </div> </div>
                 `; modal(window.pokemones.pokeFilter(totalData.pokemon,"Dragon"))
            }}}

// Ordenado

const rootAZ = document.querySelector("#root");
    
    document.getElementById("orderA").addEventListener("click", (event) => {
         event.preventDefault();
         azOrder(window.pokemones.orderAZ(totalData.pokemon))

        })
    function azOrder(resultOrden){
             root.innerHTML = "";
             if (Array.isArray(resultOrden)) {
                for (let i of resultOrden) {
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
              `; modal(window.pokemones.orderAZ(totalData.pokemon))
         }}}
    document.getElementById("orderZ").addEventListener("click", (event) => {
            event.preventDefault();
            zaOrder(window.pokemones.orderZA(totalData.pokemon))
   
           })
       function zaOrder(resultOrden){
                root.innerHTML = "";
                if (Array.isArray(resultOrden)) {
                   for (let i of resultOrden) {
                root.innerHTML += `
                <div class = "card"
                style = "width: 10rem;" >
                    <div class = "card-body" >
                    <h5 class = "card-title" > ${i.name} </h5> 
                    <h6 class = "card-subtitle mb-2 text-muted" > N°${i.num} </h6> 
                    <p class = "card-text" > <img class = "card-img"
                src = "${i.img}"
                alt = "Card ${i.name}"> </p> 
                </div> </div>
                 `; modal(window.pokemones.orderZA(totalData.pokemon))
            }}}

//  Modal

const perfilPage = document.getElementsByClassName("card-img");

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
                        </div>
                        <div class="modal-body">

                        <div class="row">
                        <div class="col-6 col-md-4"><img id="modalImg" class = "card-img"
                        src = "${data[i].img}"
                        alt = "Card ${data[i].name}"></div>

                        <div class="col-12 col-md-8">
                        <div class="card" style="width: 18rem;">
                         <p class="list-group-item">N° : #${data[i].num} </p>
                         <p class="list-group-item">Candy: ${data[i].candy} </p>

                         <p class="list-group-item"> Tipo : <br>
                          <span class = "${data[i].type[0]}">${data[i].type[0]}</span>
                          <span class = "${data[i].type[1]}">${data[i].type[1]}</span> </p>
                         <p class="list-group-item">Debilidades: <br>
                          <span class = "${data[i].weaknesses[0]}">  ${data[i].weaknesses[0]} </span>
                          <span class = "${data[i].weaknesses[1]}">  ${data[i].weaknesses[1]} </span> 
                          <span class = "${data[i].weaknesses[2]}">  ${data[i].weaknesses[2]} </span>
                          <span class = "${data[i].weaknesses[3]}">  ${data[i].weaknesses[3]} </span> 
                          <span class = "${data[i].weaknesses[4]}">  ${data[i].weaknesses[4]} </span> 
                          <span class = "${data[i].weaknesses[5]}">  ${data[i].weaknesses[5]} </span> 
                         </p>
                        </div> </div></div>
                        <br>
                        <table class="table table-bordered">
                        <thead class="thead-light gray">
                        <tr>
                        <th scope="col">Peso </th>
                        <th scope="col">Talla</th>
                        <th scope="col">Spawn Chance</th>
                        <th scope="col">Spawn Time</th>
                        <th scope="col">Egg</th>
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
                          <button type="button" class="btn btn-default">Ver Estadistica</button>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  </div>`;
            $("#myModal").modal();
        })
    }
}

 
function cargando () {
    principalPage()
    console.log("Todos los recursos terminaron de cargar!")
}

window.onload= cargando;
