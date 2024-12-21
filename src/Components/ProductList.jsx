import React from 'react'
import ProductItem from './ProductItem'
import styles from './App/App.module.css' 

const ProductList = ({ products }) => {
	return (
		<div className={styles.list}>
			{products.length > 0 ? (
				products.map(product => (
					<ProductItem key={product.id} product={product}></ProductItem>
				))
			) : (
				<p>По вашему запросу ничего не найдено.</p>
			)}
		</div>
	)
}

export default ProductList