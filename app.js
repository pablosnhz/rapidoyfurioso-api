const url = 'https://online-movie-database.p.rapidapi.com/auto-complete?q=fast%26furious';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f23f0234bemsha55a240e9d0ba7bp11897ajsn675f5f36e28c',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const arrayMovies = await response.json();
	console.log(arrayMovies);
} catch (error) {
	console.error(error);
}