const jokeSetup = document.getElementById('joke-setup')
const jokePunchline = document.getElementById('joke-punchline')
const jokeBtn = document.getElementById('joke-btn')

let fetchJoke = async () => {
    // Sets up the API endpoint
    try {
        // getting endpoint
        const response = await fetch(`https://v2.jokeapi.dev/joke/Christmas?type=twopart`)
        // returning a response of json
        const data = await response.json()
        
        // Adds joke contents
        // console.log(data.setup)
        jokeSetup.textContent = data.setup
        jokeSetup.style.display = 'block'

        // console.log(data.delivery)
        jokePunchline.textContent = data.delivery
        jokePunchline.style.display = 'block'

    } catch (error) {
        // Displays error message
        console.log(error)

        jokeSetup.textContent = 'Sorry, there was an error. Please try again later.'
        jokePunchline.textContent = ''
    }
}

jokeBtn.addEventListener('click', fetchJoke)