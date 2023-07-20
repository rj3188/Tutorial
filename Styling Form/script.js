const label = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((later,idx) => `<span style="transition-delay:${idx * 50}">${latter}</span>`)
        .join('')
})



