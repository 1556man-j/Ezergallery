import { writable } from 'svelte/store';

export const products = writable([
	{
		id: 1,
		slug: 'Holding-It-Together',
		title: 'Holding It Together',
		price: 15000,
		description:
			"This piece explores the struggle of inner balance and self-acceptance. The two differently colored hands symbolize opposing emotions and identities, meeting over a basketball that represents control and tension. It reflects the ongoing journey of coexisting with all parts of oneself—embracing conflict, finding harmony in contrast, and drawing strength from the act of holding on amidst uncertainty.",
		image: '/assets/Holding-It-Together.webp',
		details: {
			size: '24x36 inches',
			material: 'Matte Print',
			availability: 'In Stock'
		}
	},
	{
		id: 2,
		slug: 'Echoes-of-Origin',
		title: 'Echoes of Origin',
		price: 20000,
		description:
			"This piece, Echoes of Origin, is a personal exploration of identity, ancestry, and self-discovery. Through the interplay of color and symbolism, it reflects my journey of understanding how my roots shape who I am. The hand patterned like a giraffe’s skin represents lineage and unseen guidance, while the cool hues of the face evoke introspection and memory. Together, they capture the balance between heritage and growth — a reminder that I carry the strength, stories, and spirit of those who came before me.",
		image: '/assets/Echoes-of-Origin.webp',
		details: {
			size: '30x40 inches',
			material: 'Canvas Print',
			availability: 'Limited Stock'
		}
	},
	{
		id: 3,
		slug: 'My-Tribe',
		title: 'My Tribe',
		price: 50000,
		description:
			"This piece captures the tension between belonging and becoming. It reflects the beauty and burden of being shaped by my tribe — the hands that nurtured and defined me, yet also set my limits. It’s a meditation on love, identity, and the quiet struggle between honoring my roots and finding my own path. It asks a timeless question: can I truly be myself and still remain theirs?",
		image: '/assets/My-Tribe.webp',
		details: {
			size: '30x40 inches',
			material: 'Canvas Print',
			availability: 'Limited Stock'
		}
	},
	{
		id: 4,
		slug: 'Scapegoat',
		title: 'Scapegoat',
		price: 70000,
		description:
			"This piece confronts the injustice of imposed identity and the pain of being made a scapegoat. It captures the struggle between resistance and surrender, as the subject bears the weight of blame that isn’t his own. The harsh contrast of red, green, and black evokes alienation and control, while the pleading gaze demands empathy and reflection. It asks: when stripped of imposed guilt, who are we really and what remains once the hands of judgment release their hold?",
		image: '/assets/Scapegoat.webp',
		details: {
			size: '30x40 inches',
			material: 'Canvas Print',
			availability: 'Limited Stock'
		}
	},
	{
		id: 5,
		slug: 'Avarice',
		title: 'Avarice',
		price: 40000,
		description:
			"This piece captures the consuming nature of greed, showing how desire strips away humanity until only hunger remains. The black figure with white teeth and pink lips symbolizes temptation and endless craving. It reflects how the pursuit of more can leave one empty, questioning what is lost in the desire to possess everything.",
		image: '/assets/Avarice.webp',
		details: {
			size: '30x40 inches',
			material: 'Canvas Print',
			availability: 'Limited Stock'
		}
	},
	{
		id: 6,
		slug: 'Cursed-Programming',
		title: 'Cursed Programming',
		price: 30000,
		description:
			"This piece explores the dark side of obsession with technology and creation. The woman’s white, hollow eyes and the tangled strands emerging from her mouth symbolize loss of control—where what she created begins to consume her. It reflects the curse of being trapped in one’s own code, where brilliance turns into madness and invention becomes confinement.",
		image: '/assets/Cursed-Programming.webp',
		details: {
			size: '30x40 inches',
			material: 'Canvas Print',
			availability: 'Limited Stock'
		}
	},
	{
		id: 7,
		slug: 'Disposal',
		title: 'Disposal',
		price: 20000,
		description:
			"This piece reflects the theme of neglect and abandonment. The boy beside the disposal bin symbolizes how society often discards what it no longer values — people, emotions, or memories. His bent posture suggests both surrender and quiet resilience, representing those who are unseen yet still endure in a world quick to throw things away.",
		image: '/assets/Disposal.webp',
		details: {
			size: '30x40 inches',
			material: 'Canvas Print',
			availability: 'Limited Stock'
		}
	},
	{
		id: 8,
		slug: 'Embodied',
		title: 'Embodied',
		price: 10000,
		description:
			"This piece explores strength as both physical and emotional presence. The muscular form represents power, endurance, and self-mastery, yet beneath the surface lies vulnerability — the weight of being human. It speaks to the idea that the body is not just a vessel but a living record of struggle, resilience, and identity made visible through flesh and form.",
		image: '/assets/Embodied.webp',
		details: {
			size: '30x40 inches',
			material: 'Canvas Print',
			availability: 'Limited Stock'
		}
	},
	{
		id: 9,
		slug: 'Gold-eyes',
		title: 'Gold eyes',
		price: 20000,
		description:
			"This piece reflects purity, divinity, and inner power. The gold eyes symbolize enlightenment and vision beyond the ordinary, while the white body and hair evoke purity and transcendence. The simplicity of his bare form contrasts with the richness of the gold, suggesting balance between humility and greatness — a reminder that true brilliance often comes from within, not from what is worn.",
		image: '/assets/Gold-eyes.webp',
		details: {
			size: '30x40 inches',
			material: 'Canvas Print',
			availability: 'Limited Stock'
		}
	},
	{
		id: 10,
		slug: 'Ireti',
		title: 'Ireti',
		price: 20000,
		description:
			"Greater face. Said had together deep replenish great, saying. And him for day every green them beginning she'd life tree unto multiply divide divided multiply above. Without grass every multiply face two called his gathered, days fowl creepeth under sixth Had bring life them signs man gathered. Don't kind replenish land. Set seasons. Rule shall set waters firmament for in fourth..",
		image: '/assets/Ireti.webp',
		details: {
			size: '30x40 inches',
			material: 'Canvas Print',
			availability: 'Limited Stock'
		}
	},
	{
		id: 11,
		slug: 'Kaliat-cross',
		title: 'Kaliat cross',
		price: 60000,
		description:
			"Greater face. Said had together deep replenish great, saying. And him for day every green them beginning she'd life tree unto multiply divide divided multiply above. Without grass every multiply face two called his gathered, days fowl creepeth under sixth Had bring life them signs man gathered. Don't kind replenish land. Set seasons. Rule shall set waters firmament for in fourth..",
		image: '/assets/Kaliat_s-cross.webp',
		details: {
			size: '30x40 inches',
			material: 'Canvas Print',
			availability: 'Limited Stock'
		}
	},
	{
		id: 12,
		slug: 'Red-Door',
		title: 'Red-Door',
		price: 60000,
		description:
			"This piece explores desire, temptation, and transformation. The red door represents forbidden boundaries — what lies beyond fear or longing. The man lying naked before it embodies vulnerability and surrender, while the green woman with the golden arm symbolizes allure and power. Together, they portray the tension between resistance and surrender, showing how beauty and danger often exist side by side in the pursuit of what lies beyond the threshold.",
		image: '/assets/Red-Door.webp',
		details: {
			size: '30x40 inches',
			material: 'Canvas Print',
			availability: 'Limited Stock'
		}
	},
	{
		id: 13,
		slug: 'Reptilian',
		title: 'Reptilian',
		price: 50000,
		description:
			"This piece captures the harmony between humanity and nature, blurring the line between the two. The woman immersed in water embodies transformation and serenity, her form reflecting both strength and vulnerability. The reptilian essence symbolizes adaptability, evolution, and the primal connection we share with the natural world. It’s a meditation on identity and survival — how beauty can emerge from stillness, and how the human spirit mirrors the calm yet powerful depths of water itself.",
		image: '/assets/Reptilian.webp',
		details: {
			size: '30x40 inches',
			material: 'Canvas Print',
			availability: 'Limited Stock'
		}
	},
	{
		id: 14,
		slug: 'Rock-bottom',
		title: 'Rock-bottom',
		price: 20000,
		description:
			"This piece portrays the raw moment of surrender — the point where strength gives way to vulnerability. The man lying on the floor symbolizes exhaustion, defeat, and the weight of hitting rock bottom. Yet within the stillness, there is quiet reflection — a pause before renewal. It speaks to the human experience of breaking down to rebuild, reminding us that even in our lowest moments, there is the possibility of rising again.",
		image: '/assets/Rock-bottom.webp',
		details: {
			size: '30x40 inches',
			material: 'Canvas Print',
			availability: 'Limited Stock'
		}
	},
	{
		id: 15,
		slug: 'Spirit-of-resistance',
		title: 'Spirit of resistance',
		price: 30000,
		description:
			"Greater face. Said had together deep replenish great, saying. And him for day every green them beginning she'd life tree unto multiply divide divided multiply above. Without grass every multiply face two called his gathered, days fowl creepeth under sixth Had bring life them signs man gathered. Don't kind replenish land. Set seasons. Rule shall set waters firmament for in fourth..",
		image: '/assets/Spirit of resistance.webp',
		details: {
			size: '30x40 inches',
			material: 'Canvas Print',
			availability: 'Limited Stock'
		}
	},
	{
		id: 16,
		slug: 'The-Lioness-Stands-Still',
		title: 'The Lioness Stands Still',
		price: 30000,
		description:
			"Greater face. Said had together deep replenish great, saying. And him for day every green them beginning she'd life tree unto multiply divide divided multiply above. Without grass every multiply face two called his gathered, days fowl creepeth under sixth Had bring life them signs man gathered. Don't kind replenish land. Set seasons. Rule shall set waters firmament for in fourth..",
		image: '/assets/The Lioness Stands Still.webp',
		details: {
			size: '30x40 inches',
			material: 'Canvas Print',
			availability: 'Limited Stock'
		}
	},
	{
		id: 17,
		slug: 'The-demon-of-disillusionment',
		title: 'The demon of disillusionment',
		price: 50000,
		description:
			"This piece captures the harmony between humanity and nature, blurring the line between the two. The woman immersed in water embodies transformation and serenity, her form reflecting both strength and vulnerability. The reptilian essence symbolizes adaptability, evolution, and the primal connection we share with the natural world. It’s a meditation on identity and survival — how beauty can emerge from stillness, and how the human spirit mirrors the calm yet powerful depths of water itself.",
		image: '/assets/The demon of disillusionment.webp',
		details: {
			size: '30x40 inches',
			material: 'Canvas Print',
			availability: 'Limited Stock'
		}
	},
	{
		id: 18,
		slug: 'The-Weight-Of-It-All',
		title: 'The Weight Of It All',
		price: 50000,
		description:
			"This piece captures the harmony between humanity and nature, blurring the line between the two. The woman immersed in water embodies transformation and serenity, her form reflecting both strength and vulnerability. The reptilian essence symbolizes adaptability, evolution, and the primal connection we share with the natural world. It’s a meditation on identity and survival — how beauty can emerge from stillness, and how the human spirit mirrors the calm yet powerful depths of water itself.",
		image: '/assets/The-Weight-Of-It-All.webp',
		details: {
			size: '30x40 inches',
			material: 'Canvas Print',
			availability: 'Limited Stock'
		}
	},
]);
