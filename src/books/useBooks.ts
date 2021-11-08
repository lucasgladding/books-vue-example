import { useQuery, UseQueryReturn } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import Book from '@/books/Book'

export const LIST_BOOKS_QUERY = gql`
  query ListBooks {
    books {
      title,
      author
    }
  }
`

interface Result {
  books: Book[]
}

export default function useBooks (): UseQueryReturn<Result, undefined> {
  return useQuery<Result>(LIST_BOOKS_QUERY)
}
