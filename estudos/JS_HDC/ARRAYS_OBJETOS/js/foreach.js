const nums = [1,2,3,4,5]

nums.forEach((numero) => {

    console.log(`O número é: ${numero}`)
})

const posts = [
    {title:"Primeiro post", category: "PHP"},
    {title:"segundo post", category: "Javascript"},
    {title:"Terceiro post", category: "Phyton"},
]

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title} da categoria: ${post.category}`)
})