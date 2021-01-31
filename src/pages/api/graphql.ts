import { ApolloServer, gql } from 'apollo-server-micro'

import { ROUTES } from '../../constants/routes'
import firebase from '../../lib/firebase';

const database = firebase.database();

const typeDefs = gql`
  type Query {
    products: [Product!]!
  }
  type Product {
    name: String
    number: String
  }
`

const resolvers = {
    Query: {
        async products(parent, args, context) {
            const snapshot = await database.ref('/products').once('value')

            return Object.values(snapshot.val())
        },
    },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
    api: {
        bodyParser: false,
    },
}

export default apolloServer.createHandler({ path: ROUTES.API_GRAPHQL })
