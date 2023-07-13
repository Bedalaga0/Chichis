let a = false
let allprise = 0
let oneprise = document.getElementById("chichis").innerHTML
oneprise = oneprise.replace('"Чичис" ', '')
oneprise = parseInt(oneprise)
console.log(oneprise)
const btn_basket = document.getElementById('btn1')
const basket_prise = document.querySelector('.price')
function  buy(btn){
    if(!a){
        btn_basket.style.background = 'Gold'
        btn_basket.innerHTML = 'В корзине'
        a = true
        allprise = allprise + oneprise
    } else{
        btn_basket.style.background = '#FF8C00'
        btn_basket.innerHTML = 'Купить'
        a = false
        allprise = allprise - oneprise
    }
    basket_prise.innerHTML = allprise
    console.log(allprise)
}

