<template>
  <article>
    <h3>{{ book.title }}</h3>
    <p class="text-gray-400">{{ book.author }}</p>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Book from '@/books/Book'

export default defineComponent({
  name: 'BookListItem',
  props: {
    book: Object as PropType<Book>
  }
})
</script>
