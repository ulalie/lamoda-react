import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { generateProducts } from '../../utils/generateProduct'
import SearchInput from '../SearchInput'
import ProductFilter from '../ProductFilter'
import ProductSort from '../ProductSort'
import ProductList from '../ProductList'
import styles from './App.module.css'

const App = () => {
	const [products, setProducts] = useState([])
	const [searchTerm, setSearchTerm] = useState('')
	const [selectedColors, setSelectedColors] = useState([])
	const [priceRange, setPriceRange] = useState([10, 9999])
	const [sortOption, setSortOption] = useState('price Asc')

	useEffect(() => {
		setProducts(generateProducts(100))
	}, [])

	const handleSearchInput = useCallback(e => {
		setSearchTerm(e.target.value)
	}, [])

	const handleColorSelect = useCallback(color => {
		setSelectedColors(prevColors =>
			prevColors.includes(color)
				? prevColors.filter(c => c !== color)
				: [...prevColors, color]
		)
	}, [])

	const handlePriceChange = useCallback((min, max) => {
		setPriceRange([min, max])
	}, [])

	const handleSortChange = useCallback(option => {
		setSortOption(option)
	}, [])

	const filters = [
		product =>
			selectedColors.length === 0 || selectedColors.includes(product.color),
		product => product.price >= priceRange[0] && product.price <= priceRange[1],
		product =>
			product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			product.description.toLowerCase().includes(searchTerm.toLowerCase()),
	]

	const filteredProducts = useMemo(() => {
		return products
			.filter(product => filters.every(filter => filter(product)))
			.sort((a, b) => {
				switch (sortOption) {
					case 'priceAsc':
						return a.price - b.price
					case 'priceDesc':
						return b.price - a.price
					case 'ratingDesc':
						return b.rating - a.rating
					default:
						return 0
				}
			})
	}, [products, searchTerm, selectedColors, priceRange, sortOption])

	const uniqueColors = useMemo(() => {
		return products
			.map(product => product.color)
			.filter((color, index, self) => self.indexOf(color) === index)
	}, [products])

	return (
		<div>
			<h1 className={styles.h1}>LAMODA</h1>
			<div className={styles.header}>
				<SearchInput
					searchTerm={searchTerm}
					onSearchInput={handleSearchInput}
				></SearchInput>
				<ProductSort
					sortOption={sortOption}
					onSortChange={handleSortChange}
				></ProductSort>
			</div>
			<div className={styles.main}>
				<div className={styles.productContainer}>
					<ProductFilter
						selectedColors={selectedColors}
						onColorSelect={handleColorSelect}
						priceRange={priceRange}
						onPriceChange={handlePriceChange}
						colors={uniqueColors}
						productCount={filteredProducts.length}
					></ProductFilter>
					<ProductList products={filteredProducts}></ProductList>
				</div>
			</div>
		</div>
	)
}

export default App
