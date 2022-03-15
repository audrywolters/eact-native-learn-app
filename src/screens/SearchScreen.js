import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
	const [term, setTerm] = useState('')

	return (
		<View style={styles.parentView}>
			<Text>SearchScreen</Text>
			<SearchBar
				term={term}
				onTermChange={(newTerm) => setTerm(newTerm)}
				onTermSubmit={() => console.log(`term was submitted. term was :${term}`)}
			/>
			<Text>Hi {term}</Text>
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
