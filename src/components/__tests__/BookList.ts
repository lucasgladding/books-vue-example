import { mount } from '@vue/test-utils'
import StubApolloClient from '@/utils/test/StubApolloClient'
import { wait } from '@/utils'

import BookList from '@/components/BookList.vue'
import Book from '@/books/Book'

describe('BookList', () => {
  it('renders books', async () => {
    const book: Book = {
      title: 'Book 1',
      author: 'Author 1'
    }
    const response = { data: { books: [book] } }
    const client = new StubApolloClient()
    client.register(() => response)
    client.provide()

    const wrapper = mount(BookList, {})
    await wait()

    expect(wrapper.text()).toContain(book.title)
    expect(wrapper.text()).toContain(book.author)
  })
})
