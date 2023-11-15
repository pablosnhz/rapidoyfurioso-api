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
    const datos = await response.json();

	const arrayMovies = datos.d;

    arrayMovies.map(( element ) => {
        // console.log(element)
        const title = element.l;
        const image = element.i.imageUrl;
        const cast  = element.s

        const poster = `
            <div>
                <img src="${image}">
                <h2>${title}</h2>
                <small>${cast}</small>
            </div>
        `
        document.getElementById('container').innerHTML += poster
        // console.log(cast)
    })

	// console.log(datos);
} catch (error) {
	console.error(error);
}