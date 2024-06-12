document.getElementById('jokeBtn').addEventListener('click', fetchJoke);

function fetchJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('joke').innerText = data.value;
        })
        .catch(error => {
            console.error('Error fetching the joke:', error);
            document.getElementById('joke').innerText = 'Failed to fetch a joke. Please try again!';
        });
}
