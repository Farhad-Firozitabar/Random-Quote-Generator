let btn = document.getElementById('btn')
let output = document.getElementById('output')
let quote = [
    "You must not lose faith in humanity. Humanity is an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty.",
    "To live is the rarest thing in the world. Most people exist, that is all.",
    "True friends stab you in the front.",
    "Be the change that you wish to see in the world.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    "Do what you feel in your heart to be right - for you'll be criticized anyway.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends.",
]

btn.addEventListener('click', function () {
    var randomquote = quote[Math.floor(Math.random() * quote.length)]
    output.innerHTML = randomquote;

})
