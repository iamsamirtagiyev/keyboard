const letters = document.querySelectorAll('button')

let data = []

letters.forEach(letter => {
    data.push(letter.getAttribute('data-key'))
})

let rand = Math.floor(Math.random() * letters.length)

const randLetter = function () {
    letters.forEach(letter => {
        if (letter.getAttribute('data-key') == data[rand]) {
            letter.classList.add('active')
        }
    })
}

window.onload = () => randLetter()

window.onkeypress = (e) => {
    letters.forEach(letter => {
        if (letter.classList.contains('active')) {
            if(e.key.toLowerCase() == letter.getAttribute('data-key').toLowerCase()){
                window.location.reload()
            }
        }
        else{
            if(e.key.toLowerCase() == letter.getAttribute('data-key').toLowerCase()){
               letter.classList.add('false')
               setInterval(() => {
                letter.classList.remove('false')
               }, 1000);
            }
        }
    })
}