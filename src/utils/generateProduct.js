import { v4 as uuidv4} from 'uuid'
import Chance from 'chance'

const chance = new Chance()

const colors = ['Красный', 'Голубой', 'Зелёный', 'Жёлтый', 'Чёрный']
const categories = Array.from(
	{ length: 10 },
	(_, index) => `Category${index + 1}`
)

const imageUrls = Array.from(
	{ length: 16 },
	(_, index) => `../../public/images/image${index + 1}.jpg`
)

export const generateProducts = n => {
	const products = []
	for (let i = 0; i < n; i++) {
		products.push({
			id: uuidv4(),
			name: chance.word({ syllables: 2 }).replace(/^\w/, c => c.toUpperCase()),
			description: chance.sentence({ words: 10 }),
			color: chance.pickone(colors),
			category: chance.pickone(categories),
			price: chance.integer({ min: 10, max: 9999 }),
			rating: chance.floating({ min: 0, max: 5, fixed: 1 }),
			imageUrl: chance.pickone(imageUrls),
		})
	}
	return products
}
