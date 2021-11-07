import { useQuery, UseQueryReturn } from '@vue/apollo-composable'
import gql from 'graphql-tag'

interface Book {
  title: string
  author: string
}

interface Result {
  books: Book[]
}

export default function useBooks (): UseQueryReturn<Result, undefined> {
  return useQuery<Result>(gql`
    query listBooks {
      books {
        title,
        author
      }
    }
  `)
}
