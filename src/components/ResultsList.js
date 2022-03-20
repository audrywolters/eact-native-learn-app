import React from 'react'
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity
} from 'react-native'
import ResultsDetail from './ResultsDetail'
import { withNavigation } from 'react-navigation'

const ResultsList = ({ title, results, navigation }) => {
	// UI JSX
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={results}
				keyExtractor={(result) => result.id}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() => navigation.navigate('ResultsShow')}
						>
							<ResultsDetail result={item} />
						</TouchableOpacity>
					)
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

export default withNavigation(ResultsList)
