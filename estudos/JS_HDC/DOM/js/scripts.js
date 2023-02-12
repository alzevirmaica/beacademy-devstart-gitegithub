
// 1- Movendo-se pelo DOM
// console.log(document.body) // Acessa o body no Dom

// console.log(document.body.childNodes) //Array de todos os elementos do html

// console.log(document.body.childNodes[1]) //Acessa o elento 1 da lista

// console.log(document.body.childNodes[1].childNodes)//Acessa a lista dentro do elemento 1 do array

// console.log(document.body.childNodes[1].childNodes[1].textContent)// Acessa o texto do elemento 1


// 2-Encontrando elementos por tag
const listItens = document.getElementsByTagName("li")

console.log(listItens)



// 3-Encontrando elementos por ID
// const title = document.getElementById("title")

// console.log(title)


// 4-Encontrando elementos por classe
const products = document.getElementsByClassName("product")

console.log(products)



// // 5-Encontrando elementos por CSS
// const productsQuery = document.querySelectorAll(".product")

// console.log(productsQuery)
// //Para selecionar um elemento
 const mainContainer = document.querySelector("#container")

console.log(mainContainer)



// 6-Alterando o html com insertBefore
// //Criando um elemento
//  const p = document.createElement("p")

//  const header = title.parentElement //Selecionando header a apartir do title

// header.insertBefore(p, title) //inseri o parágrafo antes do tpitulo



// 7-Alterando o html com appenChild
//Selecionando a lista de links
// const navLinks = document.querySelector("nav ul")

// //Adicionando um novo li
// const li = document.createElement("li")

//  navLinks.appendChild(li)




// // 8-Replacechild
// const h2 = document.createElement("h2")

//  h2.textContent = "Meu novo Título"

// header.replaceChild(h2, title)


// 9- CreateNode
// const myText = document.createTextNode("Agora vamos colocar mais um título")

// console.log(myText)
// const h3 = document.createElement("h3")

// h3.appendChild(myText)
// console.log(h3)

// mainContainer.appendChild(h3)

// //10- Trabalhando com atributos
// const firstLink = navLinks.querySelector("a")

// console.log(firstLink)

// firstLink.setAttribute("href", "https://www.goolge.com")

// console.log(firstLink.getAttribute("href"))

// firstLink.setAttribute("target", "_blank")

// // 11 - altura e largura
// const footer = document.querySelector("footer")

// console.log(footer.offsetWidth)
// console.log(footer.offsetHeight)

// console.log(footer.clientWidth)
// console.log(footer.clientHeight)

// 12 -getClientBoundingRect --- Posição do elemento
const product1 = products[0]

console.log(product1.getBoundingClientRect())

// 13 -CSS com js
mainContainer.style.color = "red"
mainContainer.style.backgroundColor = "#333"
mainContainer.style.paddingBottom = "15px"

// 14 - alterando estilos de vários elementos
for(const li of listItens) {
    li.style.backgroundColor = "red"
}