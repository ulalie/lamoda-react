import React from 'react'
import styles from './App/App.module.css' 


const ProductFilter = ({
	selectedColors,
	onColorSelect,
	priceRange,
	onPriceChange,
	colors,
	 productCount,
}) => {

	return (
		<div className={styles.filters}>
			<h1>Фильтры</h1>
			<h2>Выбор цвета</h2>
			<div className={styles.colors}>
				{colors.map(color => (
					<label key={color}>
						<input
							className={styles.checkbox}
							type='checkbox'
							checked={selectedColors.includes(color)}
							onChange={() => onColorSelect(color)}
						></input>
						{color}
					</label>
				))}
			</div>
			<h2>Поиск по цене</h2>
			<div className={styles.prices}>
				<input
					type='text'
					value={priceRange[0]}
					onChange={e => onPriceChange(+e.target.value, priceRange[1])}
					placeholder='Min Price'
					className={styles.priceInput}
				></input>
				<input
					type='text'
					value={priceRange[1]}
					onChange={e => onPriceChange(priceRange[0], +e.target.value)}
					placeholder='Max Price'
					className={styles.priceInput}
				></input>
			</div>
			<h3>
				{productCount}{' '}
				{productCount % 10 === 1 && productCount % 100 !== 11
					? 'товар'
					: productCount % 10 >= 2 &&
					  productCount % 10 <= 4 &&
					  (productCount % 100 < 10 || productCount % 100 >= 20)
					? 'товара'
					: 'товаров'}{' '}
				найдено
			</h3>
		</div>
	)
}

export default ProductFilter
