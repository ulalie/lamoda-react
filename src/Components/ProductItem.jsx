import React from 'react'
import styles from './App/App.module.css' 


const ProductItem = ({ product }) => {
	return (
		<div className={styles.product}>
			<img src={product.imageUrl} alt={product.name}></img>
			<h3>{product.name}</h3>
			<p>{product.description}</p>
			<p>Цена: {product.price} руб.</p>
			<p>Рейтинг: {product.rating}</p>
			<p>Цвет: {product.color}</p>
			<p>Категория: {product.category}</p>
		</div>
	)
}

export default ProductItem
