import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ({ navigation }) => {
	// null is used for an object as oppossed to {}
	const [result, setResult] = useState(null)

	// getParam -> id is coming from ResultsList
	const id = navigation.getParam('id')

	const getResult = async (id) => {
		const response = await yelp.get(`/${id}`)
		setResult(response.data)
	}

	// call this once on load
	useEffect(() => {
		getResult(id)
	}, [])

	// if getting the result wasn't succesful, keep it empty
	if (!result) {
		// make an error message
		return null
	}

	return (
		<>
			<Text>{result.name}</Text>
			<FlatList
				data={result.photos}
				keyExtractor={(photo) => photo}
				renderItem={({ item }) => {
					return  <Image source={{ uri: item }} style={styles.image} />
				}}
			/>
		</>
	)
}

const styles = StyleSheet.create({
	image: {
		height: 200,
		width: 300
	}
})

export default ResultsShowScreen
