const t = document.querySelector('table')
t.addEventListener('click', (e) => {
    if (e.target.tagName === 'TD') {
        e.target.style.backgroundColor = 'red'
    }
})