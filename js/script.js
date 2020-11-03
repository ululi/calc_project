document.body.addEventListener('click', function (event) {
    if (event.target.nodeName == 'BUTTON') {
        console.log('clicked', event.target.textContent)
    }
})