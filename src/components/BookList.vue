<template>
  <section class="p-4">
    <h2 class="text-4xl mb-4">Books</h2>
    <article v-if="result && result.books">
      <book-list-item v-for="book in result.books" :book="book" :key="book.title" class="py-4 border-b" />
    </article>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BookListItem from '@/components/BookListItem.vue'
import useBooks from '@/books/useBooks'

export default defineComponent({
  name: 'BookList',
  components: { BookListItem },
  setup () {
    return useBooks()
  }
})
</script>
