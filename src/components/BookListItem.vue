<template>
  <div>
    <div>{{ book.title }}</div>
    <div class="text-gray-400">{{ book.author }}</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BookListItem',
  props: {
    book: Object
  }
})
</script>
