/* 
    CLASSES
    
    Classes em javascript são introduzidas no ECMAScript em 2015
    Trazem uma maneira mais simples e clara para criar objetos e
    lidar com herança.
    são funções especiais que agem como funções construtoras.
*/

    class Person {
        constructor() {}
    }

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

const Foo = function(x) {
    this.x = x
}

const foo = new Foo('x')
