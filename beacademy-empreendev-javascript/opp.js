/* 
    CLASSES
    
    Classes em javascript são introduzidas no ECMAScript em 2015
    Trazem uma maneira mais simples e clara para criar objetos e
    lidar com herança.
    são funções especiais que agem como funções construtoras.
*/

// class Person {
//     constructor() { }
// }

/*
    HERANÇA

    Com uma classe, podemos implementar as características 
    abstratas de um objeto. A partir, dela, podemos gerar
    diversos objetos reutilizando as características.

    EX:
    Em um cadastro de candidatos a um concurso, temos os 
    dados necessários de cada candidato. Todos eles têm nome, cpf.
    Então todos os candidatos são cadastrados com estas propriedades
    Com isso, é possível herdar da classe principal, todos estes dados.
    Porém, apenas no caso de candidatos homens, é necessário ter
    cadastrado o comprovante de serviço militar obrigatório.


*/


/*
    FUNÇÕES CONSTRUTORAS
    
    são utilizadas para instanciar objetos.
    Assim é possível trabalhar com a reutilização do código
*/

// const Foo = function (x) {
//     this.x = x
// }

// const foo = new Foo('x')
// // console.log(foo)


// class Book {
//     constructor(title, year, author) {
//         this.title = title
//         this.year = year
//         this.author = author
//     }
// }

// const domCasmurro = new Book('Dom Casmurro', 1899, 'Machado de Assis')
// const harryPotter = new Book('Harry Potter', 1997, 'J.K. Rowling')



// let bookList = []
// bookList.push(domCasmurro, harryPotter)
// // console.log(bookList)


// class CopaDoMundo {
//     constructor(country, year) {
//         this.country = country
//         this.year = year
//     }

//     //método para mostrar o campeão
//     showChampion(tean) {
//         return `A copa do ${this.country} foi disputada no ano de ${this.year} e o campeão foi ${tean}`
//     }
// }

// const copa86 = new CopaDoMundo('México',1986)
// const copa70 = new CopaDoMundo('México',1970)
// const champion86 = copa86.showChampion('Argentina')
// const champion70 = copa70.showChampion('Brasil')

// console.log(champion86)
// console.log(champion70)


//Herança estendendo classes por meio do extend
// class Candidates {
//     constructor(firstName,surName, cpf){
//         this.firstName = firstName
//         this.surName = surName
//         this.cpf = cpf
//     }
    
// }

// class Masc extends Candidates {
//     constructor(firstName, surName, cpf, reservista) {
//         super(firstName, surName, cpf)
//         this.reservista = reservista
//     }
    
// }

// const Candidate1 = new Masc('Marcelo', 'Vasques', 123456789, true)
// const Candidate2 = new Candidates('Maria', 'Fulana', 456123789)
// console.log(Candidate2)
// console.log(Candidate1)

/*
    Callbakcs -- Chamar de volta

    Trata-se de uma função que será executada quando algum evento 
    acontecer ou quando algum código chegar a um estado esperado.
    Isto quer dizer que esta função é assíncrona, pois não será executada
    imediatamente. neste caso, a aplicação constinuará funcionando enquanto
    a função espera o momento da sua execução.

    ex. Uma função a ser executada após um dado ser salvo no banco de dados.
    Uma função que executa aós os dados serem retornados de uma chamada á uma API
    Uma função que será executada após o click do usuário em um botão no site.


    Na maioria dos casos, uma função de callback é passad como argumento de
    outra função
*/

//ex:
// function foo(p) {
//     return p
// }

// function foo2(Callbakc) {
//     Callbakc('p')
// }

// foo2()


// Ex 2:
function hello(name) {
    console.log(name)
}


function helloUser(callback) {
    callback('Marcelo')
}


// helloUser(hello)

 const callback = e => alert('Foi clicado')
 window.addEventListener('click', callback)