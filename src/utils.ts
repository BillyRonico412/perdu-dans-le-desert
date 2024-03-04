export interface ItemInterface {
	id: string
	name: string
	src: string
	point: number
}

/*
Un miroir pour se maquiller 1
Un manteau (pour chaque survivant) 2
1/2 litre d&#39;eau par personne 3
Lampe de poche 4
Un parachute 5
Un couteau suisse 6
Un pancho en plastique contre la pluie par personne 7
Un pistolet 45 chargé 8
Une paire de lunettes de soleil (pour chaque survivant) 9
Un kit d&#39;urgence avec pansement 10
Une boussole 11
Une carte aérienne de la région 12
Un livre (encyclopédie de la vie sauvage dans le dessert) 13
2 bouteilles de vodka 14
Une boite de comprimés de sel 15
*/

export const items: ItemInterface[] = [
	{ id: 'uid1', name: 'Un miroir pour se maquiller', src: 'assets/img1.png', point: 1 },
	{ id: 'uid2', name: 'Un manteau (pour chaque survivant)', src: 'assets/img2.png', point: 2 },
	{ id: 'uid3', name: "1/2 litre d'eau par personne", src: 'assets/img3.png', point: 3 },
	{ id: 'uid4', name: 'Lampe de poche', src: 'assets/img4.png', point: 4 },
	{ id: 'uid5', name: 'Un parachute', src: 'assets/img5.png', point: 5 },
	{ id: 'uid6', name: 'Un couteau suisse', src: 'assets/img6.png', point: 6 },
	{ id: 'uid7', name: 'Un pancho en plastique contre la pluie par personne', src: 'assets/img7.png', point: 7 },
	{ id: 'uid8', name: 'Un pistolet 45 chargé', src: 'assets/img8.png', point: 8 },
	{ id: 'uid9', name: 'Une paire de lunettes de soleil (pour chaque survivant)', src: 'assets/img9.png', point: 9 },
	{ id: 'uid10', name: "Un kit d'urgence avec pansement", src: 'assets/img10.png', point: 10 },
	{ id: 'uid11', name: 'Une boussole', src: 'assets/img11.png', point: 11 },
	{ id: 'uid12', name: 'Une carte aérienne de la région', src: 'assets/img12.png', point: 12 },
	{
		id: 'uid13',
		name: 'Un livre (encyclopédie de la vie sauvage dans le dessert)',
		src: 'assets/img13.png',
		point: 13,
	},
	{ id: 'uid14', name: '2 bouteilles de vodka', src: 'assets/img14.png', point: 14 },
	{ id: 'uid15', name: 'Une boite de comprimés de sel', src: 'assets/img15.png', point: 15 },
]
