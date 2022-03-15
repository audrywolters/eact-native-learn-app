import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange }) => {
	return (
		<View style={styles.bg}>
			<Feather name="search" style={styles.icon} />
			<TextInput
				autoCapitalize="none"
				autoCorrect={false}
				style={styles.input}
				placeholder="Search"
				value={term}
				// AUDRY - dissect syntax
				onChangeText={(newTerm) => onTermChange(newTerm)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	bg: {
		backgroundColor: '#f0eeee',
		marginTop: 15,
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: 'row'
	},
	input: {
		flex: 1,
		fontSize: 18
	},
	icon: {
		fontSize: 35,
		alignSelf: 'center',
		marginHorizontal: 10
	}
})

export default SearchBar
