<template>
  <div v-if="loading">
    Loading...
  </div>
  <div v-else-if="result && result.books">
    <book-list-item v-for="book in result.books" :book="book" :key="book.title" class="p-4 border-b" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import BookListItem from '@/components/BookListItem'
import useBooks from '@/composables/useBooks'

export default defineComponent({
  name: 'BookList',
  components: { BookListItem },
  setup () {
    return useBooks()
  }
})
</script>
