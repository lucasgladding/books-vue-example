import { mount } from '@vue/test-utils'
import { wait } from '@/utils'
import StubApolloClient from '@/utils/test/StubApolloClient'

import BookList from '@/components/BookList.vue'

describe('useBooks', () => {
  it('lists books', async () => {
    const response = {
      data: {
        books: [
          { title: 'Book 1', author: 'Author 1' }
        ]
      }
    }
    const client = new StubApolloClient()
    client.register(() => response)
    client.provide()

    const wrapper = mount(BookList, {})
    await wait()

    expect(wrapper.vm.result).toEqual(response.data)
  })
})
