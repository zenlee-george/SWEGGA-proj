let femaleNum = document.querySelectorAll('input')[0]
let maleNum = document.querySelectorAll('input')[1]
let calcBut =document.querySelectorAll('button')[0]

let femaleTot = document.querySelectorAll('label')[0]
let maleTot = document.querySelectorAll('label')[1]
let grandTot = document.querySelectorAll('label')[2]

calcBut.addEventListener('click',()=>{
    femaleTot.innerText ='R'+ eval(`(150.95 * ${femaleNum.value})`).toFixed(2) ,
    maleTot.innerText ='R'+ eval(`(180.95 * ${maleNum.value})`).toFixed(2),
    grandTot.innerText ='R'+ eval(`(150.95 * ${femaleNum.value}) + (180.95 * ${maleNum.value})`).toFixed(2)
})