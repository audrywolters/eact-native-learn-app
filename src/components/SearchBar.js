import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SearchBar = () => {
	return (
		<View style={[styles.background, styles.shape]}>
			<Text>SearchBar</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#f0eeee'
	},
	shape: {
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15
	}
})

export default SearchBar
