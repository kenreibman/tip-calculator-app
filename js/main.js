const buttons = document.querySelectorAll('.input__tip-option')

const activateClickedButton = (button) => {
    buttons.forEach(b => b.classList.remove('input__tip-option--active'))
    button.classList.add('input__tip-option--active')
};

buttons.forEach(button => {
    
    button.addEventListener('click', () => {
        activateClickedButton(button)
    })
})

buttons[2].click()