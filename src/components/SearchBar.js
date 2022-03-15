import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = () => {
	return (
		<View style={[styles.background, styles.shape]}>
			<Feather name="search" size={30} />
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
