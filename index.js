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
    const p = document.createTextNode('A kinda embarrasing/cool video of me reciting poetry 9 years ago');
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

const coopSquare = () => {
    const coop = document.getElementById("co-op")
    coop.addEventListener('mouseenter', function(){
    coop.style.backgroundColor="#7499c3";
    const a = document.createElement('a')
    const p = document.createTextNode('A website for a healthcare cooperative I helped put together');
    a.appendChild(p)
    a.href="https://www.obranhealth.com/"
    coop.appendChild(a)
    })
    coop.addEventListener('mouseleave', function(){
    coop.style.backgroundColor="yellow";
    coop.innerHTML=""
    })
}

coopSquare();

const microphoneSquare = () => {
    const phone = document.getElementById("microphone")
    phone.addEventListener('mouseenter', function(){
    phone.style.backgroundColor="c2c7ca";
    const a = document.createElement('a')
    const p = document.createTextNode('A vintage phone I hacked to be a microphone');
    a.appendChild(p)
    a.href="https://www.instagram.com/p/CYm7ygDvG83/?utm_source=ig_web_copy_link"
    phone.appendChild(a)
    })
    phone.addEventListener('mouseleave', function(){
    phone.style.backgroundColor="#ff38dd";
    phone.innerHTML=""
    })
}

microphoneSquare();

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

const clickMe = () => {
const clickSquares = document.getElementsByClassName("click-me")
console.log(clickSquares)
const squareArray = Array.from(clickSquares);

squareArray.map(function(x) {
    if (x.style.backgroundColor="black"){
     const p = document.createElement('p')
        p.innerText="😎"
        p.style.color="white"
        x.appendChild(p)
        }
        
    })
}

setTimeout(clickMe, 3000)





