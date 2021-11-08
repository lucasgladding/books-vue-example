import useBooks from '@/books/useBooks'
import { wait } from '@/utils'
import StubApolloClient from '@/utils/test/StubApolloClient'

describe('useBooks', () => {
  it('lists books', async () => {
    const response = {
      data: { books: [] }
    }
    const client = new StubApolloClient()
    client.register(() => response)
    client.provide()
    const { result } = useBooks()
    await wait()
    expect(result.value).toEqual(response.data)
  })
})
