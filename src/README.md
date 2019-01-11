# PokéGoInfo

![celular](imagenes/241232_1_5bec8f2e39ae2.jpg)

PokeGoInfo es una aplicación que brinda ayuda a personas que están comenzando a jugar PokémonGO y visualizar la información sobre los pokémones como el perfil y las evoluciones.

* El usuario puede seleccionar la categoría que desee y así poder revisar los pokémones de la categoría seleccionada.

* En el momento que el usuario seleccione un pokemon le aparecerá la información caracteristica de este pokémon.

* También si es más facil para el usuario está la opción para ordenar los nombres de los pokémones alfabéticamenta.

## Historias de usuarios 

***

Una vez definido nuentro tema a eleccion, buscamos usuarios de la aplicación Pokemon Go para que nos cuenten que es lo que ellos buscarían o nos recomendarían informar a los jugadores que recién se integran al mundo Pokemon.

La preguntas fueron: 

1.-¿Que datos son los mas importantes como en los pokémones? ( habilidades, ataque, etc.) 

2.-¿Cuales crees tu que son los objetivos o propósitos del juego?

3.-¿Cual es según tú la información más importante que debe saber o conocer un jugador principiante?

Jugador 1: Carlos 

1.-  En los Pokémon: 

* PC del Pokémon, cantidad de poder que tienen el Pokémon 
* La cantidad de caramelos que se requieren para evolucionar al Pokémon 
* De  qué tipo es (fantasma, bicho, normal, etc)

2.- El objetivo principal es entretener a los entrenadores Pokémon, que realicen una actividad física a través de la caminata y conocer diversos lugares. 

3.- Cómo capturar un Pokémon, de que sirve el polvo mágico y los caramelos, la utilización de frutas, principalmente las piñas que doblan los caramelos, que se deben realizar misiones diarias y misiones de los eventos y por último como se participa una incursión.

Jugador 2: Oriel

1.- Lo más importante en un Pokémon son sus PC(puntos de combate), Su IV(Nivel de pureza) y sus habilidades las cuales sean potenciadas por el tipo de Pokémon, básicamente el juego se reduce a números

2.- El objetivo del juego, básicamente es recrear la idea de una serie que todos los jugadores veían cuando niños, ya que una gran parte de los q juegan son de los nacidos en el 90, finalmente la idea principal es elegir un equipo de los cuales hay tres instinto, sabiduría y valor y enfrentar gimnasios los cuales estan en diferentes partes y así sube el nivel del entrenador.

3.- Y si me preguntas por consejos de juego, diría q analizaran bien el tipo de equipo Pokémon q quieren formar, de manera q todo su equipo se potencie con las habilidades de sus otros Pokémon.

Jugador 3: Yolanda

1.- Los puntos de salud que es como la vida del pokemon, hay de 90 hasta de 3000 y mientras mas puntos de salud mas dura en cambate lo otro son los puntos de combate que es cuanto poder tiene el pokemon para peliar y cuanto daño le hace al otro pokemon y eso puede ser de 10 hasta como 200, El pokemos ideal es el que tiene salud alta y combate alto.

2.- solo divertirse

3.- ninguna en particular solo ir siguiendo las instrucciones es super facil jugar no necesitar saber nada de información extra de la serie o algo asi

Jugador 4: Maitane

1.- Los datos mas importantes son el tipo del pókemon y su IV, no te sirve de nada competir con un pókemon de un tipo en ventaja si su IV es malo y viceversa

2.- Completar la pokedex, conseguir pókemon de buen IV y atrapar shinies (variocolor)

3.- Estrategias para colocar pókemon en gimnasios, si hay un pókemon tipo fuego antes que ti, te conviene colocar algo que sea fuerte contra agua, porque el que ataque va a venir atacando con uno de agua probablemente. Ahora que se habilitaron las batallas PVP, también es bueno conocer los pókemon que son fuertes contra otros y tratar de no usar pókemon con debilidad x4.

Jugador 5: Nicolás

1.- Los datos importantes en un pokemon, son los PC(Puntos de combate) que determinan los puntos de habilidad que tiene este pokemon... entre más PC tenga, mejor peleará el pokemon.
Cabe destacar que si uno captura un pikachu, no todos los pikachu tienen la misma habilidad, habrán pikachu que tendrán más salud que otro, más ataque o más defensa.
Cómo tambien, habrán pikachu que tendrán mejora en ambas cualidades o en todas.

2.- El objetivo del juego, para algunos es capturar todos los pokemones y para otros capturar a los más fuertes, ambas son validas.

3.- Y cual es la mayor información que debe conocer un novato... primordial subir de nivel antes de ir capturando y mejorando tus pokémones.
Ha medida que vayas subiendo nivel a tu entrenador, saldrán pokemones más fuertes, por ende si tu objetivo es tener pokémones fuertes, la recomendacion es guardar todos los polvos estelares que vayas acumulando para poder usarlos cuando captures un pokémon de nivel 35 hacia delante (40 nivel máximo)
Para que así no uses polvos estelares en mejorar pokémones de nivel bajo y usarlos para mejorar pokémones de nivel 35 hacia delante, lo digo por que los polvos estelares es el elemento más escaso para mejorar pokémones. Las personas que lo usan en niveles bajos, se quedan despues sin polvos estelares para mejorar sus pokémones fuertes.

## Flujo
***

Una vez ya teniendo claro el usuario a quien estará dirigida la aplicación y lo que se desea mostrar en nuestra interfaz, desarrollamos el flujo de baja fidelidad que hará el usuario mientras navegue por la página.

* Se entra a la pagina.
* Encuentra las categorías y se muestra una galeria de los pokémones.
* Luego al seleccionar la categoría, le mostrara los pokémones de dicha categoría.
* Al seleccionar un pokémon, mostrara el perfil de este pokémon
* Y el ultimo paso sera ver la evolución de este pokémon y la cantidad de caramelos que necesita para poder evolucionar.

![cipherChristmas](imagenes/20190110_083339.jpg)
![cipherChristmas](imagenes/20190103_210443.jpg)

## Diseño interfaz de usuario
***

Posterior a testear con nuestras compañeras el uso y vision de la página, comenzamos a hacer un prototipo de alta fidelidad para planificar como queríamos que fuese mostrada nuestra app.


**Primera Pantalla**

![cipherChristmas](imagenes/cap1.png)

En la primera página se encuentra el logo de nuestra app, también una pequeña descripción de nuestro objetivo, el filtro que permite monstrar a los pokemones por categorías y 
una sección de orden para alinear los pokemones alfabeticamente. 

Al seleccionar algunas de estas opciones se ingresa a la segunda pantalla.

**Segunda Pantalla**

![cipherChristmas](imagenes/cap2.png)

La segunda pagina muestra los pokémones con la seccion aplicada, en este caso esta filtrada por la categoría planta la categoría tipo planta y hay se puede seleccionar al pokémon que se desea recibir información.

![cipherChristmas](imagenes/cap3.png)

**Terdera Pantalla**

En la tercera pagina se muestra el perfil del pokémon y se muestra la información basica como peso, estatura, kms para huevos entre otros.


**Cuarta Pantalla**

![cipherChristmas](imagenes/cap4.png)

En la cuarta pagina muestra la evolución del pokeḿon y la cantidad de caramelos que se necesita para evolucionar a el pokémon y da la opción de "Volver al inicio" y así regresar a la primera pagina.



## Planificación 
***
Una de las cosas mas importantes a la hora de desarrollar y la creación del diseño web fue la planificación, pensando siempre desde las acciones que realice el usuario miestran navegue. 


Puedes revisar la planificación [aquí](https://trello.com/b/NdIkcVB3/pokemon-go)


## Testeo de Usabilidad
***

Una vez realizado los prototipos se realizaron test a nuestro usuario promedio ( personas que les interese comenzar a jugar Pokemon GO pero no esten muy inmersas en el tema ) para recibir el feedback y hacer los cambios necesarios para optimizar la navegación .

Los problemas más comunes que encontramos una vez testeada la página fueron : 

- La información de perfil de los pokemones debe estar en Español
- Las etiquetas de tipo o debilidad de pokemon se da a entender que son tipo boton y llevan a otra pantalla
-La información de debilidades podría hacer una comparación de otros pokemones y sus puntajes
- Guardar los pokemones capturados, para crear un tipo de "Pokedex" para poder preparlas par aun posible combate. 

Si bien las soluciones a estas propuestas son más de tipo de contenido y fueron consideraciones para una próxima version y se realizaron los cambios de tipo visuales quedando la página de esta manera. 


![pantallaPrincipal](imagenes/pantallainicio.png)

**Decisiones de diseño**

Para el diseño final de nuestra interfaz siempre fueron considerados los colores principal de la aplicación PokemonGo y se creo además un logo representativo. 

![logo](imagenes/cambiada.png)







