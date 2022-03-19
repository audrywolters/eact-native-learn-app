import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ResultsDetail from './ResultsDetail'

const ResultsList = ({ title, results }) => {
	// UI JSX
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				horizontal
				data={results}
				keyExtractor={(result) => result.id}
				renderItem={({ item }) => {
					return <ResultsDetail result={item} />
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 10
	},
	title: {
		marginLeft: 15,
		marginBottom: 5,
		fontSize: 18,
		fontWeight: 'bold'
	}
})

export default ResultsList
