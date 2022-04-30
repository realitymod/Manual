# Modos de Juego

Project Reality: BF2 contiene 6 modos diferentes de juego con distintos objetivos. El objetivo común de todos los modos de juego es reducir los puntos de refuerzo del equipo enemigo \(también conocido como tickets\) a cero. En la mayoría de las partidas se logra hiriendo o matando enemigos, destruyendo sus vehículos y por la captura de sus puntos de control / banderas, coloreados en el mapa con marcas que te indican tu objetivo actual según el modo de juego.

PR: BF2 contiene 40 mapas con más de 250 tipos. Puedes encontrar todos los mapas con su específica información de mapa en [http://www.realitymod.com/mapgallery/](http://www.realitymod.com/mapgallery/).

Los modos de juegos incluyen 4 tipos de variación con diferentes assets y soportes disponibles. Los tipos incluyen:

* **Infantry  \(16\):** Este modo consiste en su mayoría de vehículos de transporte, como objetivo principal el combate entre infantería..
* **Alternative \(32\):** Este modo es usado por los mappers para crear únicas configuraciones, que pueden incluir ambientes de noche, una diferente distribución de banderas, facciones alternativas o una mezcla de assets de los tipos de juegos de infantería y estándar.
* **Standard \(64\):** Este modo generalmente involucra todo el mapa y todos los assets, según corresponda al mapa. Este es el modo estándar que se puede reproducir en todo momento.. 
* **Large \(128\):** Este modo está diseñado para rondas más largas de 2 horas y, por lo general, contiene todos los assets de la modo estándar con pequeñas variaciones y un mayor número de tickets..

## _Advance and Secure \(AAS\)_ {#advance-and-secure}

El modo de juego AAS es el más cercano al modo BF2 Conquest original. El objetivo es capturar todos los Puntos de Control  \(CPs\) manteniendo más tickets que el enemigo. Los CPs solo se pueden capturar en un orden lineal para simular una línea de frente cambiante y enfrentamientos de enfoque. Los CPs que están en juego para ser capturados se indican con un marcador de ataque naranja, mientras que los que deben defenderse de los ataques enemigos se resaltan con un marcador de defensa púrpura. Si tu equipo alcanza su última bandera azul defendible y esa es capturada por el equipo enemigo, tu equipo comenzara a sangrar tickets hasta que recuperes tu bandera. De manera similar, el último CP del equipo enemigo se indica con un marcador de ataque rojo y hará que sangren tickets si tu equipo lo captura de la misma manera.

Al menos un mínimo de 2 jugadores deben estar dentro del radio de captura de CP para apoderarse de la bandera. Puede tomar más de un minuto asegurar un CP dependiendo de la proporción de atacantes y defensores dentro del radio de la bandera. Aunque no puedes capturar CP fuera del orden preestablecido, puede comenzar a neutralizar o capturar el siguiente CP antes de que el CP actual haya terminado de capturar/neutralizar, incluso si pierde otra posición durante el período de captura. Si un CP controlado por un equipo es neutralizado y capturado por el enemigo, el equipo perderá 30 boletos. Una de las características clave de AAS es que cada vez que se carga el mismo mapa, podría ser un diseño de bandera diferente gracias a nuestros diseños de bandera aleatorios.

Si el equipo atacante no tiene una proporción de 2 a 1 con respecto al equipo defensor en la bandera, comenzará a perder el progreso de captura..

Las marcas en el mapa para el modo AAS son::

* ![](../assets/defend.png) Marca de Defensa
* ![](../assets/defend%20bleed.png) Marca de Defensa \(Pérdida de Tickets\) 
* ![](../assets/attack_bleed.png) Marca de Ataque 
* ![](../assets/attack.png) Marca de Ataque  \(érdida de Tickets\)

Guerra de Vehículos, Skirmish & COOP usan marcas similares para el ataque y la defensa.

## _Vehicle Warfare \(VW\)_ {#vehicle-warfare}

Many heavy vehicles battle for control of the map in this game mode. Players are limited to spawning with crewman kits. Only officer and pilot kits can be requested. Tickets are only influenced by how many CPs a team controls. Vehicles that are already destroyed respawn after 5 minutes. It takes at least 6 players \(inside vehicles\) to take control of a CP. Capturing works much faster than in AAS.

## _Skirmish_ {#skirmish}

This game mode operates on smaller scale map versions of the Advance and Secure game mode, intended for around 12-16 players. It is perfect for clan matches and small infantry engagements. Skirmish has the same rules as AAS but with smaller combat zones, usually no vehicles or deployable assets as well as fewer tickets. If a team loses a CP to the enemy they will be penalized by 10 tickets.

## _Command & Control \(CNC\)_ {#command-and-control}

This game mode features large freeform battles. There are no capturable CPs, but instead each team must place a single forward operating base \(FOB\) [\(see Deployable Structures\)](the_squad_leader.md#deployable-structures)  
somewhere on the map. The objective is to defend the team's FOB while trying to find and destroy the enemy FOB. When a team loses their FOB they will suffer a huge ticket penalty and continue to lose tickets until they build a new one. The FOB must be placed at least 200m from the map's borders. Building your team’s FOB closer to the map's center increases the ticket loss that the enemy will suffer while their FOB is down. Both teams can build more defenses in a bigger radius near their FOB than in other game modes.

## _Co-Operative \(COOP\)_ {#co-operative}

In this mode it is possible for one or more human players to march into battle alongside and against AI-controlled bots. This mode is ideal for practicing with equipment and vehicles before using them in full-scale battles with human players. To accommodate the use of bots some rules and items have been modified in this mode. Most of our maps have dedicated COOP layers.

## _Insurgency \(INS\)_ {#insurgency}

This mode is very unique in comparison to others within PR. The objective of the coalition force is to find and destroy five insurgent weapons caches hidden throughout the map before running out of tickets. The coalition forces lose tickets for every player death or asset destroyed, while the insurgency team only loses tickets when a weapons cache is destroyed.

{% figure "../assets/weaponcache.png" %}
A weapon cache.
{% endfigure %}

The Coalition troops are required to gather intelligence by killing insurgent fighters or capturing insurgent civilians [\(see The Civilian\)](the_civilian.md).
To capture a civilian, a Coalition player must be within a meter of the civilian and must either use a restrainer, which consists of a pair of ziptie plastic handcuffs, accessible by selecting the number 1 on your keyboard, or alternatively **using a shotgun**. This simulates immobilizing the civilian with a rubber buckshot. The coalition wins if they manage to destroy a certain amount weapons caches before they run out of time or tickets, otherwise the insurgent team wins the game. Insurgent Engineers can also repair damaged caches. The amount of caches is shown on map load and with scrolling messages on the server.

To reveal the approximate location of insurgent weapons caches while playing Insurgency, intelligence has to be gathered by the coalition forces. The Coalition team needs 50 intelligence points \(IP\) to have the cache reveal itself after 5 minutes. The following list shows the amount of intelligence points gained or lost due to different actions.

* Insurgent killed: +1 IP \(within 300m\)
* Civilian or insurgent arrested: +10 IP
* Civilian killed \(violating rules of engagement\): -5 IP
* Destroying vehicles with civilian close \(within 50m for the last 60 seconds\) : -50 IP
* Destroying unused civilian vehicles : -5 IP

Jets, tanks and helicopters can't gain IP through these methods. The approximate location of the first cache is shown about 5 minutes into the round. Additional locations will be revealed 5 minutes after enough IP is gained by the coalition. There can be up to 2 active caches at the same time. The new location is revealed when reaching 50 intelligence points. If there are less than 32 players on the server the IP needed to reveal a cache is halved. A team can only have a maximum of 50 and a minimum of -50 IP.

The map markers for insurgency are:

* ![](../assets/cache.png) **Known Coalition Weapons Cache:** This icon will be visible on the map of the coalition forces which indicates the cache’s approximate location when sufficient intelligence has been acquired. The marker can be offset up to 75m.
* ![](../assets/unknown%20weapon%20cache.png) **Known Insurgent Weapons Cache:** This icon will be visible on the map of the insurgent forces which indicates that the cache has been located by the coalition forces.
* ![](../assets/unknown%20cache.png) **Unknown Insurgent Weapons Cache:** This icon will represent the position of the cache where it will spawn on the battlefield. They are only visible to the insurgent forces so that they can co-ordinate their defenses while the coalition forces are gathering intelligence. The cache will not be physically spawned yet until it is revealed to the coalition forces.

The caches can be destroyed by small or large packs of C4. Other weaponry will only do no or light damage to a cache.

Once it is destroyed the coalition team gains 30 tickets and a message will inform the team about how many caches remain to be destroyed. Caches can be repaired by wrench or shovels.

The caches will only show on the map 30 seconds before round start to avoid exploiting this information beforehand.

