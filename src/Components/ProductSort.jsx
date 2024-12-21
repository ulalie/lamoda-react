import React from 'react'
import styles from './App/App.module.css'

const ProductSort = ({sortOption, onSortChange }) => {
	return (
		<div className={styles.sorts}>
			<select value={sortOption} onChange={e => onSortChange(e.target.value)}>
				<option value='priceAsc'>Сначала дешёвые</option>
				<option value='priceDesc'>Сначала дорогие</option>
				<option value='ratingDesc'>Сначала популярные</option>
			</select>
		</div>
	)
}
export default ProductSort
