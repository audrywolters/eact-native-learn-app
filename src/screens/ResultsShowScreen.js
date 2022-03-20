import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ({ navigation }) => {
	// null is used for an object as oppossed to {}
	const [result, setResult] = useState(null)
	console.log(result)
	
	const id = navigation.getParam('id')

	const getResult = async (id) => {
		const response = await yelp.get(`/${id}`)
		setResult(response.data)
	}

	useEffect(() => {
		getResult(id)
	}, [])

	return (
		<>
			<Text>ResultsShowScreen</Text>
		</>
	)
}

const styles = StyleSheet.create({})

export default ResultsShowScreen
