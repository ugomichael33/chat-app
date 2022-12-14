const { ApolloServer } = require('apollo-server')
const gql = require('graphql-tag')
const mongoose = require('mongoose')

const typeDefs = require('./graphql/typeDefs')
const resolvers  = require('./graphql/resolvers')
const { MONGODB } = require('./config.js')


const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(MONGODB, { useNewUrlParser: true })
    .then(() => {
        console.log('connected to MONGODB')
        return server.listen({port: 5000})
    })
    .then(res => {
        console.log(`server running at ${res.url}`);
    }).catch(err => {
        console.log(err);
    })