<template>
  <section class="p-4">
    <h1 class="text-4xl mb-4">Books</h1>
    <div v-if="result && result.books">
      <book-list-item v-for="book in result.books" :book="book" :key="book.title" class="py-4 border-b" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BookListItem from '@/components/BookListItem.vue'
import useBooks from '@/composables/useBooks'

export default defineComponent({
  name: 'BookList',
  components: { BookListItem },
  setup () {
    return useBooks()
  }
})
</script>
