<template>
  <div class="row row-cols-1  row-cols-md-2 row-cols-md-3 row-cols-md-4" id="container">
    <div class="col" v-for="note in notes" :key="note.id">
      <note-card :note="note"></note-card>
     </div>
    </div>
</template>

<script>
import NoteCard from '@/components/NoteCard'
export default {
  name: 'NoteCardList',
  components: {
    NoteCard
  },
  props: {
    notes: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
#container {
  height: 1400px;
  width: 1400px;
  position: relative;
}
</style>
