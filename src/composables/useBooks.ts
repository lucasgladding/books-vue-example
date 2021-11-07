import { ref } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

type Book = {
  title: string,
  author: string
}

type Result = {
  books: Book[]
}

export default function useBooks () {
  const { result, loading } = useQuery<Result>(gql`
    query listBooks {
      books {
        title,
        author
      }
    }
  `)

  return { result, loading }
}
