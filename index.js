document.addEventListener("click", function(e) {
    if (e.target.tagName == "A" &&
            !e.target.hasAttribute("target"))
    {
        e.target.setAttribute("target", "_blank");
    }
});

const greetingSquare = () => {
    const greeting = document.getElementById("greeting")
    greeting.addEventListener('mouseenter', function(){
    // greeting.style.backgroundColor="";
    const img = document.createElement('img')
    img.src="./kawhi.gif"
    greeting.appendChild(img);
    
    })
    greeting.addEventListener('mouseleave', function(){
    greeting.style.backgroundColor="#f9d46f";
    greeting.innerHTML=""
    })
}

greetingSquare();

const poetrySquare = () => {
    const poetry = document.getElementById("poetry")
    poetry.addEventListener('mouseenter', function(){
    poetry.style.backgroundColor="#fe6d0b";
    const a = document.createElement('a')
    const p = document.createTextNode('A slightly embarrasing, kinda cool video of me reciting poetry 9 years ago.');
    a.appendChild(p)
    a.href="https://www.youtube.com/watch?v=e-ZC-BY63u4"
    poetry.appendChild(a);
    
    })
    poetry.addEventListener('mouseleave', function(){
    poetry.style.backgroundColor="#7fffd4";
    poetry.innerHTML=""
    })
}

poetrySquare();

const peaceSquare = () => {
    const peace = document.getElementById("peace")
    peace.addEventListener('mouseenter', function(){
    peace.style.backgroundColor="black";
    const a = document.createElement('a')
    const p = document.createTextNode('✌️');
    a.appendChild(p)
    a.href="https://youtu.be/ZKiLsYnPloU"
    peace.appendChild(a)
    })
peace.addEventListener('mouseleave', function(){
    peace.style.backgroundColor="yellow";
    peace.innerHTML=""
    })
}

peaceSquare();