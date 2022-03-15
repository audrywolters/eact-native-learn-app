import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
	return (
		<View style={styles.parentView} >
			<Text>SearchScreen</Text>
			<SearchBar />
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
