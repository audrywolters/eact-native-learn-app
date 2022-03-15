import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SearchBar = () => {
	return (
		<View style={styles.background}>
			<Text>SearchBar</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#f0eeee'
	}
})

export default SearchBar
