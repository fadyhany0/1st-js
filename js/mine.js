// let btn = document.getElementById('btn-dark');
// let div = document.getElementById('minDiv');


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
// x = 30
// console.log(x);


// s7


// let btnDark = document.getElementById('dark')
// let div = document.getElementById('mainDiv')
// let btnLight = document.getElementById('light')

// let dark = () =>{
//     div.style.background = '#111';
//     div.style.color = '#eee'

// }
// btnDark.addEventListener('click' , dark) 

// let light = ()=>{
//     div.style.background = '#eee'
//     div.style.color = '#111'
// }

// btnLight.addEventListener('click' , light)


let btn = document.getElementById('btn')
let div = document.getElementById('mainDiv')

let them = () => {
    if (btn.textContent == 'light'){
        div.style.background = '#eee'
        div.style.color = '#111'
        btn.textContent = 'dark'
        btn.classList =('btn btn-dark')

    }else{
        div.style.background = '#111'
        div.style.color = '#eee'
        btn.textContent = 'light'
        btn.classList =('btn btn-light')
    }
    
}
btn.addEventListener('click' , them )