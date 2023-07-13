let adder_li = document.createElement('li')
adder_li.classList.add('products_item')
let creature_title = document.createElement('h3')
let text_title = document.createTextNode('Чичис')
creature_title.appendChild(text_title)
let spawn = document.querySelector(".products__list")
let creater_img = document.createElement('img')
creater_img.src = ('img/чичис.jpg')
let basket_none = document.querySelectorAll('.product__item')[0]
let basket_button = document.createElement('button')
let button_text = document.createTextNode('Удалить из корзины')
basket_button.appendChild(button_text)
basket_button.setAttribute('onclick', 'delete1()')

function delete1(){
    basket_button.parentNode.remove()
}

function update(){
    spawn.appendChild(adder_li)
    adder_li.appendChild(creature_title)
    adder_li.appendChild(creater_img)
    basket_none.classList.add('upt')
    adder_li.appendChild(basket_button)
}