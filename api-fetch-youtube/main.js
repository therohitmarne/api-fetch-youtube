


const submitBtn = document.querySelector('#searchBtn');
console.log(submitBtn)

submitBtn.addEventListener('click', async function (event) {
	const userInput = document.querySelector('#userInput').value;
	const url = `https://youtube138.p.rapidapi.com/search/?q=${userInput}&hl=en&gl=US`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'b34b2e6214mshef31aecec082489p15c918jsn6b504a462259',
			'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result.contents);
		result.contents.map((video, indexnum) => {
			document.querySelector('#result').innerHTML +=
				`<div class="col-md-4 mb-5 shadow-lg p-3 rounded">
				<iframe width="100%" height="300px" src="https://www.youtube.com/embed/${video.video.videoId}?si=N4C9w3yrbfyob4tv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
					<div class="card-body">
						<h5 class="card-title">${video.video.title}</h5>
						<p class="card-text">${video.video.descriptionSnippet}</p>
						<span>Views : ${video.video.stats.views} | ${video.video.publishedTimeText}</span>
					</div>
				</div>`
		})

	} catch (error) {
		console.error(error);
	}
})