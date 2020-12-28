const elements = document.querySelectorAll('.bills');


elements.forEach(element => {
    element.addEventListener('click', () => {
        removeActive();
        element.classList.add('active')
    })
})

const removeActive = () => {
    elements.forEach(element => {
        element.classList.remove('active')
    })
}