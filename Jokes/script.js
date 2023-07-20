const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

generatejoke ()

async function generatejoke() {
    const config = {
        Headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()

    jokeEl.innerHTML = data.joke
}
// fetch('https://icanhazdadjoke.com', config)
//.then((res) => res.json())
// .then((data) => {
// jokeEl.innerHTML = data.joke
// })
//}

