import { provideApolloClient } from '@vue/apollo-composable'
import { ApolloClient, ApolloLink, InMemoryCache, Observable } from '@apollo/client/core'
import useBooks from '@/books/useBooks'

const wait = (timeout = 0) => new Promise(resolve => setTimeout(resolve, timeout))

describe('useBooks', () => {
  it('lists books', async () => {
    const response = {
      data: { books: [] }
    }
    const link = new ApolloLink(() => {
      return Observable.of(response)
    })
    const cache = new InMemoryCache()
    const client = new ApolloClient({
      link,
      cache
    })
    provideApolloClient(client)
    const { result } = useBooks()
    await wait()
    expect(result.value).toEqual(response.data)
  })
})
