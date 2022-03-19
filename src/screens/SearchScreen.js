import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
	const [term, setTerm] = useState('')
	const [searchApi, results, errorMessage] = useResults()

	filterResultsByPrice = (price) => {
		// price === '$' || '$$' || '$$$'

		return results.filter((result) => {
			return result.price === price
		})
	}

	// UI JSX
	return (
		<View style={styles.parentView}>
			{/* search bar and some search results data */}
			<SearchBar
				term={term}
				onTermChange={setTerm}
				onTermSubmit={() => searchApi(term)}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<Text>We have found {results.length} results.</Text>

			{/* components that display restaurant info */}
			<ScrollView>
				<ResultsList results={filterResultsByPrice('$')}   title="Cost Effective" />
				<ResultsList results={filterResultsByPrice('$$')}  title="Bit Pricier" />
				<ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	parentView: {
		backgroundColor: 'white',
		flex: 1
	}
})

export default SearchScreen
