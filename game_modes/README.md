# **Game Modes** {#game-modes}

Project Reality:BF2 features 6 different game modes with different objectives. The common goal of all game modes is to reduce the enemy team's reinforcement points \(also referred to as tickets\) to zero. In most game modes this is achieved by wounding and killing enemies, destroying their vehicles and by capturing their control points. Colored map markers indicate your current objectives in each game mode.

PR:BF2 features over 50 maps with over 300 different layers. You can find all maps and their specific map information on [http://www.realitymod.com/mapgallery/](http://www.realitymod.com/mapgallery/).

Most game modes feature 4 layer variations to it with different assets and support available. The layers include:

* **Infantry \(16\):** This layer usually consists of just transport and light armed vehicles, with a focus on infantry fighting.
* **Alternative \(32\):** This is the alternative layer which features a big or small difference from standard.
* **Standard \(64\):** This layer usually involves the entire map and all assets, as applicable to the map. This is the standard layer that can be played at all times. 
* **Large \(128\):** This layer is designed for longer 2 hour rounds and usually contains all of the assets from the standard layer with small variations and higher ticket counts.

## _Advance and Secure \(AAS\)_ {#advance-and-secure}

The AAS game mode is the closest to the original BF2 Conquest mode. The objective is to capture all of the control points \(CPs\) while maintaining more tickets than the enemy. CPs can only be captured in a linear order to simulate a shifting front line and focus engagements. CPs that are in play to be captured are indicated by an orange attack marker while those that need to be defended against enemy attacks are highlighted with a purple defend marker. If your team reaches its last blue defensible flag and that is captured by the opposing force, you will start to bleed tickets until you recapture your flag by force. In a similar fashion the opposing forces last CP is indicated by a red attack marker and will cause them to bleed tickets if your team captures it in the same manner.

At least a minimum of 2 players need to be within the CP capture radius in order to seize the flag. It can take more than a minute to secure a CP depending on the ratio of attackers to defenders within the flag radius. Although you cannot capture CPs out of order, you can begin to neutralize or capture the next CP forward before the current CP has finished capturing/neutralizing, even if you lose another position during the capture period. If a CP controlled by one team is neutralized and captured by the enemy, the team will lose 30 tickets. One of the key-features of AAS is that each time the same layer is loaded, it could be a different flag-layout thanks to our randomized flag-layouts. 

If the attacking team doesn't have a 2 to 1 ratio to the defending team on the flag they will start losing the capturing progress. 

The map-markers for AAS are:

* ![](/assets/defend.png) Defend Marker 
* ![](/assets/defend bleed.png) Defend Marker \(with ticket bleed\) 
* ![](/assets/attack_bleed.png) Attack Marker
* ![](/assets/attack.png)Attack Marker \(with ticket bleed\)

Vehicle Warfare, Skirmish & COOP use similar map markers for attack and defend.

## _Vehicle Warfare \(VW\)_ {#vehicle-warfare}

Many heavy vehicles battle for control of the map in this game mode. Players are limited to spawning with crewman kits. Only officer and pilot kits can be requested. Tickets are only influenced by how many CPs a team controls. Vehicles that are already destroyed respawn after 5 minutes. It takes at least 6 players \(inside vehicles\) to take control of a CP. Capturing works much faster than in AAS.

## _Skirmish_ {#skirmish}

This game mode operates on smaller scale map versions of the Advance and Secure game mode, intended for around 12-16 players. It is perfect for clan matches and small infantry engagements. Skirmish has the same rules as AAS but with smaller combat zones, usually no vehicles or deployable assets as well as fewer tickets. If a team loses a CP to the enemy they will be penalized by 10 tickets.

## _Command & Control \(CNC\)_ {#command-and-control}

This game mode features large freeform battles. There are no capturable CPs, but instead each team must place a single forward operating base \(FOB\) [(see Deployable Structures)](../the_squad_leader/README.md#deployable-structures)
 somewhere on the map. The objective is to defend the team's FOB while trying to find and destroy the enemy FOB. When a team loses their FOB they will suffer a huge ticket penalty and continue to lose tickets until they build a new one. The FOB must be placed at least 200m from the map's borders. Building your team’s FOB closer to the map's center increases the ticket loss that the enemy will suffer while their FOB is down. Both teams can build more defenses in a bigger radius near their FOB than in other game modes.

## _Co-Operative \(COOP\)_ {#co-operative}

In this mode it is possible for one or more human players to march into battle alongside and against AI-controlled bots. This mode is ideal for practicing with equipment and vehicles before using them in full-scale battles with human players. To accommodate the use of bots some rules and items have been modified in this mode. Most of our maps have dedicated COOP layers.

## _Insurgency \(INS\)_ {#insurgency}

This mode is very unique in comparison to others within PR. The objective of the coalition force is to find and destroy five insurgent weapons caches hidden throughout the map before running out of tickets. The coalition forces lose tickets for every player death or asset destroyed, while the insurgency team only loses tickets when a weapons cache is destroyed.

> ![](/assets/weaponcache.png)
>
> A weapon cache

The Coalition troops are required to gather intelligence by killing insurgent fighters or capturing insurgent civilians [(see The Civilian)](../kits/README.md#the-civilian)
. To capture a civilian, a Coalition player must be within a meter of the civilian and must either use a restrainer, which consists of a pair of ziptie plastic handcuffs, accessible by selecting the number 1 on your keyboard, or alternatively **using a shotgun**. This simulates immobilizing the civilian with a rubber buckshot. The coalition wins if they manage to destroy a certain amount weapons caches before they run out of time or tickets, otherwise the insurgent team wins the game. Insurgent Engineers can also repair damaged caches. The amount of caches is shown on map load and with scrolling messages on the server.

To reveal the approximate location of insurgent weapons caches while playing Insurgency, intelligence has to be gathered by the coalition forces. The Coalition team needs 50 intelligence points \(IP\) to have the cache reveal itself after 5 minutes. The following list shows the amount of intelligence points gained or lost due to different actions.

* Insurgent killed: +10 IP \(within 300m\)
* Civilian or insurgent arrested: +10 IP
* Civilian killed \(violating rules of engagement\): -5 IP
* Destroying vehicles with civilian close \(within 50m for the last 60 seconds\) : -50 IP
* Destroying unused civilian vehicles : -5 IP

Jets, tanks and helicopters can't gain IP through these methods. The approximate location of the first cache is shown about 5 minutes into the round. Additional locations will be revealed 5 minutes after enough IP is gained by the coalition. There can be up to 2 active caches at the same time. The new location is revealed when reaching 50 intelligence points. If there are less than 32 players on the server the IP needed to reveal a cache is halved. A team can only have a maximum of 50 and a minimum of -50 IP. 

The map markers for insurgency are:

* ![](/assets/cache.png)  **Known Coalition Weapons Cache:** This icon will be visible on the map of the coalition forces which indicates the cache’s approximate location when sufficient intelligence has been acquired. The marker can be offset up to 75m.

* ![](/assets/unknown weapon cache.png)  **Known Insurgent Weapons Cache:** This icon will be visible on the map of the insurgent forces which indicates that the cache has been located by the coalition forces.

* ![](/assets/unknown cache.png)  **Unknown Insurgent Weapons Cache:** This icon will represent the position of the cache where it will spawn on the battlefield. They are only visible to the insurgent forces so that they can co-ordinate their defenses while the coalition forces are gathering intelligence. The cache will not be physically spawned yet until it is revealed to the coalition forces.

The caches can be destroyed by small or large packs of C4. Other weaponry will only do no or light damage to a cache.

Once it is destroyed the coalition team gains 30 tickets and a message will inform the team about how many caches remain to be destroyed. Caches can be repaired by wrench or shovels.

The caches will only show on the map 30 seconds before round start to avoid exploiting this information beforehand. 

