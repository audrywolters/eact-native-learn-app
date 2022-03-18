import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
	const [term, setTerm] = useState('')
	const [searchApi, results, errorMessage] = useResults()

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
		flex: 1
	}
})

export default SearchScreen
