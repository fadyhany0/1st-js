// let btn = document.getElementById(btn)
// let div = document.getElementById(minDiv)


// let them = () => { 
//     if ( btn.textContent == "light") {
//         div.style.background = "#eee"
//         div.style.color = "black"
//         btn.textContent = "dark"
//         btn.classList = "btn btn-dark"
//     } else if (btn.textContent == "dark") {
//         div.style.background = "#111"
//         div.style.color = "white"
//         div.textContent = "btn btn-light"
//     }
// }


let btn = document.getElementById("btn")
let ul = document.querySelector("ul")

btn.addEventListener("click" ,() => {
    ul.classList.toggle("display")
})



