<template>
  <div v-if="loading">
    Loading...
  </div>
  <div v-else-if="result && result.books">
    <div v-for="book in result.books" :key="book.title">
      <div>{{ book.title }}</div>
      <div>{{ book.author }}</div>
    </div>
  </div>
</template>

<script>
import useBooks from '@/composables/useBooks'

export default {
  setup () {
    return useBooks()
  }
}
</script>
