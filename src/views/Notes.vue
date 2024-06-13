<template>
  <h1>All Notes</h1>
  <note-list :notes="noteEntries"></note-list>
</template>

<script>
import axios from 'axios'
import NoteList from '@/components/NoteList'

export default {
  name: 'Notes',
  components: {
    NoteList
  },
  data () {
    return {
      noteEntries: []
    }
  },
  mounted () {
    axios.get('https://webtech-notepad.onrender.com/api/v1/notes')
      .then(response => {
        this.noteEntries = response.data
      })
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
