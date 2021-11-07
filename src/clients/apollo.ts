import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

// HTTP connection to the API
const link = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:4000'
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
export const client = new ApolloClient({
  link,
  cache
})
