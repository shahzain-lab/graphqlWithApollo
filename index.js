const {ApolloServer,gql} = require('apollo-server');


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