import { ApolloClient, ApolloLink, InMemoryCache, Observable, Operation } from '@apollo/client/core'
import { provideApolloClient } from '@vue/apollo-composable'

type HandleOperationRequest = (operation: Operation) => any

export default class StubApolloClient {
  private readonly client: ApolloClient<any>

  private readonly handlers: HandleOperationRequest[] = []

  constructor () {
    const link = new ApolloLink((operation: Operation) => {
      const handler = this.handlers.find((handler) => handler(operation))
      if (!handler) {
        throw new Error('Operation not supported')
      }
      return Observable.of(handler(operation))
    })

    this.client = new ApolloClient({
      link,
      cache: new InMemoryCache()
    })
  }

  register (handler: HandleOperationRequest): void {
    this.handlers.push(handler)
  }

  provide (): void {
    provideApolloClient(this.client)
  }
}
