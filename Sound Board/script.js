const sound = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sound.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopsongs()

        document.getElementById(sound).play()
    })

    document.getElementById('buttons').
    appendChild(btn)
})

function stopsongs() {
    sound.forEach(sound => {
        const song =document.getElementById(sounds)

        song.pause()

        song.currentTime = 0;
    })
}