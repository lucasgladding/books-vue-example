<template>
  <book-list />
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { client } from '@/clients/apollo'
import BookList from '@/components/BookList.vue'

export default defineComponent({
  name: 'App',
  components: {
    BookList
  },
  setup () {
    provide(DefaultApolloClient, client)
  }
})
</script>
