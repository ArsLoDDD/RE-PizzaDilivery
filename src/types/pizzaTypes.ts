export interface IPizza {
	id: number
	name: string
	description: string
	price: number
	img: string | null
	isVegan: boolean
	isSpicy: boolean
	isSale: boolean
	salePrice: number | null
	isNew: boolean
}

export interface ITypeOfPizza {
	id: number
	name: string
	value: string
}
