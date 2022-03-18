import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {
	const [term, setTerm] = useState('')
	const [results, setResults] = useState([])
	const [errorMessage, setErrorMessage] = useState('')

	// call searchApi when component is first rendered
	// empty array says 'only run this once, when compnent is rendered'
	useEffect(() => {
		searchApi('bip')
	}, [])


	const searchApi = async (searchTerm) => {
		try {
			const response = await yelp.get('/search', {
				params: {
					limit: 50,
					term: searchTerm,
					location: 'san jose'
				}
			})
			setResults(response.data.businesses)
		} catch (e) {
			setErrorMessage('Something went wrong')
		}
	}

	return (
		<View style={styles.parentView}>
			<SearchBar 
				term={term}
				onTermChange={setTerm} 
				onTermSubmit={() => searchApi(term)} 
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<Text>We have found {results.length} results.</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	parentView: {
		backgroundColor: 'white',
		// alignItems: 'flex-start',
		flex: 1
	}
})

export default SearchScreen
