# **Comandante** {#commander}

## _Descripción del Rol de Comandante_ {#leading-the-troops}

La función principal del comandante es mantener una **visión global** de lo que va ocurriendo en el campo de batalla y **comunicarse** con los jefe de escuadra para que todas las escuadras actúen **de forma coherente y coordinada**. ¿Ha conseguido el enemigo romper el frente por algún lado mientras el equipo se concentraba en defender un objetivo? Ahí está el comandante para alertar a los jefe de escuadra y coordinar una respuesta adecuada.

Tipicamente, la persona que juega como comandante se quedará en el puesto de comandancia de la base principal operando el UAV y coordinando al equipo. En casos excepcionales, también puede hacer tareas de logística (construir FOBs, etc).

Las tareas usuales del comandante incluyen:

* Comunicarse con los jefes de escuadra
* Asignar órdenes a las escuadras
* Reconocer el campo de batalla desde la visión satélite del UAV y recabar información
* Poner marcadores de contacto enemigo u otras indicaciones en el mapa estratégico
* Denegar o Autorizar peticiones realizadas por los jefes de escuadra (tales como misiones de artillería, etc)
* Eliminar FOBs aliados que ya no sean necesarios

> ![](/assets/commands.png)
>
> Órdenes y marcadores que puede usar el Comandante.

**Comunicarse con los jefes de escuadra**

Para la comunicación, el Comandante tiene a su disposición la **radio de oficiales**, la cual le permite comunicarse por voz con los jefe de escuadra. Pulsando cualquier número en el teclado numérico se comunicará con la escuadra correspondiente. Es decir, pulsando Num1 hablará con el Jefe de Escuadra de la Escuadra 1, Num2 para la 2, etc. Pulsando la tecla de asterisco (*) en el teclado numérico, se comunicará con todas las escuadras simultáneamente.

**Asignar órdenes a las escuadras**

El Comandante puede asignar a las Escuadras las mismas órdenes que los Jefe de Escuadras pueden dar a sus soldados:

|Icono|Orden|
|:---:|---|
|![](/assets/build.png)|**Construid**|
|![](/assets/observe.png)|**Observad**|
|![](/assets/defendmarker.png)|**Defended**|
|![](/assets/demolish.png)|**Demoled**|
|![](/assets/move.png)|**Id**|

Para ello, basta con seleccionar una escuadra en el menú de la pantalla de comandancia y asignarles la orden deseada. Una vez dada la orden, el Jefe de Escuadra tiene la opción de aceptar la orden (por defecto, con la **tecla RePág**) sustituyendo cualquier orden previa con la del Comandante, o rechazarla (por defecto, con la **tecla AvPág**). Desde la pantalla de comandancia el Comandante puede ver todas las órdenes actuales de cada Escuadra.

## _El UAV_ {#uav}

Las facciones de fuerzas convencionales y de milicia tienen la posibilidad de usar un **drone de reconocimiento \(Unmanned Air Vehicle, o UAV\)** para observar el campo de batalla. Este drone sólo puede ser controlado y usado por el Comandante.

El UAV de por sí no revela las posiciones del enemigo automáticamente, sino que otorga una vista de pájaro sobre el terreno y será el mismo Comandante el que deberá escrutar el campo de batalla y poner marcadores en el mapa manualmente.

El Comandante puede controlar el UAV desde cualquier posición del mapa, aunque sólo podrá acceder a su cámara desde el portátil de comandancia en la base principal, típicamente situado en una tienda de campaña o en un blindado estático. Para acceder a su cámara, el Comandante ha de situarse junto al portátil y pulsar **la tecla E**. 

> ![](/assets/acvv.png)
>
> Puesto de Comandancia en Blindado

**Cómo usar el UAV**

Existen dos formas de ordenar al UAV que vaya a una posición: o bien haciendo **click-derecho** en el mapa y luego seleccionando el icono del UAV, o bien pulsando el botón de UAV, situado en la parte superior izquierda de la pantalla de comandante. El UAV necesita unos 45 segundos para despegar/aterrizar en base y además se desplaza a través del terreno a una velocidad media de 50 m/s.

Una vez en posición, el Comandante podrá **acceder a la cámara del UAV desde el portátil de comandancia** y controlar la dirección a la que apunta mientras el UAV planea sobre la posición designada. La cámara del UAV tiene 3 niveles de magnificación o zoom, además de visión térmica. El UAV de la Milicia, por el contrario, sólo tiene dos niveles de magnificación y carece de visión térmica.

> ![](/assets/uav.png)
>
> _Visión desde la Cámara del UAV_

No obstante, ten en cuenta que **el combustible del UAV es limitado**. La cantidad de combustible restante puede verse en la barra que aparece en la parte superior izquierda de la pantalla de comandante. El UAV puede ser mandado de vuelta a la base para **re-abastecerse**. Para ello, haz **click-derecho** en el icono del UAV en la parte superior izquierda de la pantalla de comandante. El UAV no consume combustible mientras vuelve a base para re-abastecerse. 

El consumo de combustible viene resumido en la siguiente tabla:

|Acción|Combustible|Tiempo Máximo|
|:---:|:---:|:---:|
|Ir a Objetivo|-0.2%/seg.|50 segundos|
|Planear|-0.1%/seg.|100 segundos|
|Volver a Base| Sin Consumo| - |
|Abastecerse|+0.2%/seg.|50 segundos|

El UAV no está disponible en mapas pequeños (< 1km) por ser demasiado poderoso.

**Poner marcadores de contacto enemigo u otras indicaciones en el mapa estratégico**

Un buen Comandante se asegurará de mantener al equipo al tanto de información importante, por ejemplo, sobre la posición actual de efectivos enemigos. Aunque el Comandante normalmente se queda en la base principal, puede **recabar información sobre el enemigo ya sea utilizando el UAV o pidiendo informes de los Jefe de Escuadra**. 

Para poder pasar esta crucial información a todo el equipo, el Comandante puede poner marcadores en el mapa estratégico haciendo *click-derecho* en él, y luego seleccionando el marcador adecuado. Estos marcadores pueden ser vistos por todo el equipo, por lo que son cruciales para mantener al equipo informado y coordinado.

**Denegar o Autorizar Ataque en Área*

Cada 20-30 minutos, la mayoría de las facciones tienen la posibilidad de realizar un ataque en área (artillería, morteros, etc). Para ello, es necesario que un jefe de escuadra lo solicite desde el terreno utilizando la radio y que el Comandante lo **deniegue o autorice**. La comunicación Jefe de Escuadra - Comandante es clave en este proceso.

La disponibilidad de este tipo de ataque sólo puede ser comprobada por el Comandante en la parte superior izquierda de la pantalla de comandancia (siendo comandante, **pulsa ENTER**). Es frecuente que en partidas de servidores públicos se juegue sin comandante la mayor parte del tiempo. Sin embargo, es también típico que pasados unos 20-30 minutos, alguien se ponga de Comandante simplemente para aprovechar el ataque en área.

Para **Denegar o Autorizar** una petición de Ataque en Área solicitada por un Jefe de Escuadra (ver sección correspondiente en el manual), el Comandante simplemente hará **click-derecho** sobre la petición en el mapa, y luego elegirá Denegar o Aceptar. Si es Denegado, el Jefe de Escuadra será informado y la petición eliminada del mapa. Si es Aceptada, un marcador de Ataque en Área aparecerá para todo el equipo y tras unos instantes caerá la artillería en la zona designada.

Para evitar el fuego amigo, no olvides ordenar a tus hombres a que evacuen la zona con antelación. 

**Eliminar FOBs aliados que ya no sean necesarios**

Como existe un máximo de 5 FOBs por equipo, suele ocurrir que al avanzar o retroceder el frente, algunos FOBs quedan obsoletos. Los Jefes de Escuadra pueden destruir FOBs aliados que ya no sean necesarios desde la misma posición (ver sección correspondiente en el manual). Los Comandantes, por su parte, pueden eliminar FOBs aliados desde el mapa. Es frecuente que un Comandante reciba peticiones de Jefes de Escuadra para eliminar FOBs redundantes.

Para ello, el Comandante simplemente deberá hacer **click-derecho** en el mapa sobre el FOB que desea eliminar y hacer **click-izquierdo** sobre el icono de **Destruir**.

** Motín **

Si los Jefes de Escuadra consideran que el Comandante no está siendo diligente, tienen la posibilidad de estar un **motín**. Si tiene éxito, el Comandante será retirado de la posición y un nuevo jugador podrá ocupar su puesto.

** Punto de Encuentro (Rally Point) de Comandante **

De forma similar a los Jefes de Escuadra, el Comandante es capaz de establecer su propia versión de Punto de Encuentro (o Rally Point), el cual puede ser utilizado por todo el equipo para spawnearse en esa posición.

Para ponerlo, el Comandante deberá tener como mínimo a 6 jugadores junto a él (siendo al menos uno de ellos Jefe de Escuadra). Este Rally Point de Comandante es marcado en el mapa por un círculo verde con una letra "C" en él y permanecerá activo mientras el Comandante esté en un radio de 100m de él.

Todas las demás normas aplicables a los Rally Points normales también afectan al Rally Point de Comandante.







