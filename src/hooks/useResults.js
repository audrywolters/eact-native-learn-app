import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
	const [results, setResults] = useState([])
	const [errorMessage, setErrorMessage] = useState('')

	// call to the api - search for restaurants with a short phrase
	const searchApi = async (searchTerm) => {
		try {
			const response = await yelp.get('/search', {
				params: {
					limit: 50,
					term: searchTerm,
					location: 'san jose'
				}
			})
			setResults(response.data.businesses)
		} catch (e) {
			setErrorMessage('Something went wrong')
		}
	}

	// call searchApi once on load (for some data to display when loaded)
	// empty array says 'only run this once, when rendered'
	useEffect(() => {
		searchApi('italian')
	}, [])

	return [searchApi, results, errorMessage]
}
