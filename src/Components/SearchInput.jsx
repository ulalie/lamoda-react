import React from 'react'
import styles from './App/App.module.css' 

const SearchInput = ({ searchTerm, onSearchInput }) => {
	return (
		<div className={styles.search}>
			<img src='../public/search.svg'></img>
			<input
				type='text'
				placeholder='Поиск'
				value={searchTerm}
				onChange={onSearchInput}
			></input>
		</div>
	)
}

export default SearchInput