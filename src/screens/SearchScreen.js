import React, { useState } from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'
import useResults from '../hooks/useResults'

const SearchScreen = ({ navigation }) => {
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
		// empty brackets are better practive for react-native
		// as will make parent size better for the oh-so-many devices
		// will find out how to make BG color another day
		<>
			{/* search bar and some search results data */}
			<SearchBar
				term={term}
				onTermChange={setTerm}
				onTermSubmit={() => searchApi(term)}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}

			{/* components that display restaurant info */}
			<ScrollView>
				<ResultsList
					navigation={navigation}
					results={filterResultsByPrice('$')}
					title="Cost Effective"
				/>
				<ResultsList
					navigation={navigation}
					results={filterResultsByPrice('$$')}
					title="Bit Pricier"
				/>
				<ResultsList
					navigation={navigation}
					results={filterResultsByPrice('$$$')}
					title="Big Spender"
				/>
			</ScrollView>
		</>
	)
}

const styles = StyleSheet.create({
	// not using this for now
	// i will when i find out how to target most parent element
	// or at least how to change BG color
	// parentView: {
	// 	backgroundColor: 'white',
	// 	// for web - flex: 1
	// }
})

export default SearchScreen
