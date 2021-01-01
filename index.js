const {ApolloServer,gql} = require('apollo-server');

//Data
const countries = [
    {
        "id": 1,
        "country": "Argentina",
        "population": 444,
        "growth":519,
        "image": "https://www.verdict.co.uk/wp-content/uploads/2017/04/argentina2-1.jpg",
         "description": " Contrary to popular belief, Argentina is actually considered a developing country. Argentina’s economy was strong enough to ensure its citizens a good quality of life during the first part of the 20th century.The makes Argentina one of the strongest countries in South America."
    },
    {
        "id": 2,
        "country": "Guyana",
        "population": 1,
         "growth": 3,
         "image": "https://i.pinimg.com/originals/36/39/8e/36398e7cc98b5b4263a959576d880b8c.jpg",
         "description": "Experts have said that Guyana has one of the fastest-growing economies in the world. It had a GDP of $3.63 billion and a growth rate of 4.1 percent in 2018. If all goes according to plan, Guyana’s economy has the potential to grow up to 33.5 percent and 22.9 percent in 2020 and 2021."
    },
    {
        "id": 3,
        "country": "India",
        "population": 1380004385,
         "growth": 27,
         "image": "https://i1.wp.com/www.theworldin257clicks.com/img/indi.jpg?resize=350%2C232",
         "description": "As the second most populated country in the world, India has run into many problems involving poverty, overcrowding and a lack of access to appropriate medical care. Despite this, India has a large well-skilled workforce that has contributed to its fast-growing and largely diverse economy."
    },
    {
        "id": 4,
        "country": "Brazil",
        "population": 2091,
         "growth": 1869,
         "image": "https://cdnuploads.aa.com.tr/uploads/Contents/2019/06/17/thumbs_b_c_e8c3f43bbfaacbbd2735b686d95466b5.jpg?v=100829",
         "description": "Brazil is currently working its way out of one of the worst economic recessions in its history. As a result, its GDP growth has increased by 1 percent and its inflation rate has decreased to 2.9 percent."
    },
    {
        "id": 5,
        "country": "china",
        "population": 1393,
         "growth": 1361,
         "image": "https://specials-images.forbesimg.com/imageserve/5df7fb014e2917000783339f/960x0.jpg?fit=scale",
         "description": "Since China began reforming its economy in 1978, its GDP has had an average growth of almost 10 percent a year. Despite the fact that it is the world’s second-largest economy, China’s per capita income is relatively low compared to other high-income countries. "
    }   
]
///resolver
const resolvers = {
    Query: {
        countries: () => countries
    }
}

const typeDefs=gql`
type Countries{
    id: Int
    country: String
    population: Int
    growth:Int
    description:String
    image: String
}
type Query{
    countries: [Countries]
}
`
///initailize/
const server = new ApolloServer({typeDefs , resolvers})

server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`)
})