<template>
  <h1 align="left">Your Notes</h1>
  <div class="container-fluid">
    <note-card-list :notes="this.notes"></note-card-list>
  </div>
</template>

<script>
import axios from 'axios'
import NoteCardList from '@/components/NoteList'
export default {
  name: 'Notes',
  components: {
    NoteCardList
  },
  data () {
    return {
      notes: []
    }
  },
  mounted () {
    const endpoint = 'https://webtech-notepad.onrender.com/api/v1/notes'

    axios.get(endpoint)
      .then(response => {
        this.notes = response.data
      })
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>
</style>
