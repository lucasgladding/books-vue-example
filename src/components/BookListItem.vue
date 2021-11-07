<template>
  <div>
    <div>{{ book.title }}</div>
    <div class="text-gray-400">{{ book.author }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

interface Book {
  title: string
  author: string
}

export default defineComponent({
  name: 'BookListItem',
  props: {
    book: Object as PropType<Book>
  }
})
</script>
