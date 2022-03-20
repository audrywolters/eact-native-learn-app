import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
	// UI JSX
	return (
		<View style={styles.bg}>
			<Feather name="search" style={styles.icon} />
			<TextInput
				autoCapitalize="none"
				autoCorrect={false}
				style={styles.input}
				placeholder="Search"
				value={term}
				onChangeText={onTermChange}
				onEndEditing={onTermSubmit}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	bg: {
		backgroundColor: '#d6d6d6',
		marginTop: 15,
		marginBottom: 10,
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: 'row'
	},
	input: {
		flex: 1,
		color: 'black',
		fontSize: 18
	},
	icon: {
		fontSize: 35,
		alignSelf: 'center',
		marginHorizontal: 10
	}
})

export default SearchBar
