class Post {
    constructor(titulo, decriscao, tags) {
        this.titulo = titulo
        this.decriscao = decriscao
        this.tags = tags
    }

    get exibirTitulo() {
        return `Você está lendo: ${this.titulo}`
    }

    set adicionarTags(tags) {
        const tagsArray = tags.split(", ")
        this.tags = tagsArray
    }
}

const myPost = new Post("Algum post", "É um post sobre programação")

console.log(myPost)

console.log(myPost.exibirTitulo)

myPost.adicionarTags = "Progamação, Javascript, JS"
console.log(myPost)