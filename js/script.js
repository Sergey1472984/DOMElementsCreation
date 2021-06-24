function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function range(N){
    const arr = []
    for (let i = 0; i < N; i++) arr.push('')
    return arr
}


function createDiv(parent, hTML){
    let div = document.createElement('div')
    div.innerHTML = hTML
    parent.appendChild(div)
}

const fruits = [
    { name: 'orange', color: 'yellow', weight: 2 },
    { name: 'apple', color: 'green', weight: 1 },
    { name: 'coconut ', color: 'brown', weight: 3 }
]

function createFruits(){
    for (fruit of fruits){
        let str = ''
        for (key in fruit){
            str += `${fruit[key]}, `
        }
        str = str.slice(0, str.length - 2)
        createDiv(document.body, str)
    }
}
createFruits()

function createLi(parent, hTML){
    let li = document.createElement('li')
    li.innerHTML = hTML
    parent.appendChild(li)
}


function createUl(parent, hTML){
    let ul = document.createElement('ul')
    parent.appendChild(ul)
    for (let i = 0; i < 10; i++){
        createLi(ul, getRandomInRange(0, 255) )
    }
}

createUl(document.body)

function getLiEvenNumbers(){
    let numbers = [] 
    for (li of document.querySelectorAll('ul>li')) {
        if (Number(li.innerText) % 2 === 0){
            numbers.push(Number(li.innerText))   
        }
    }
    return numbers
}

const liNum = getLiEvenNumbers()

function createUlwithEven(parent){
    let ul = document.createElement('ul')
    parent.appendChild(ul)
    for (val of liNum){
        createLi(ul, val)        
    }
}

createUlwithEven(document.body)

function createDOMElem(parent, elem, HTML){
    let element = document.createElement(`${elem}`)
    parent.appendChild(element)
    element.innerHTML = HTML
    return element
}

let form1 = createDOMElem(document.body, 'form', '')
let inputF1 = createDOMElem(form1, 'input', '')
let selectF1 = createDOMElem(form1, 'select', '')
for (i in range(3)){
    selectF1.appendChild(createDOMElem(selectF1, 'option', `Option: ${i}`))
}
let ulF1 = createDOMElem(form1, 'ul', '')


let timerId = setInterval(() => createLi(ulF1, `${selectF1.children[getRandomInRange(0, 2)].innerText}` ), 1000)

