<template>
  <h1>All Notes</h1>
  <note-list :notes="noteEntries" @delete-note="deleteNote"></note-list>
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
    this.fetchNotes()
  },
  methods: {
    fetchNotes () {
      axios.get('https://webtech-notepad.onrender.com/api/v1/notes')
        .then(response => {
          this.noteEntries = response.data.sort((a, b) => b.id - a.id)
        })
        .catch(error => console.log('error', error))
    },
    deleteNote (noteId) {
      axios.delete(`https://webtech-notepad.onrender.com/api/v1/notes/${noteId}`)
        .then(() => {
          this.fetchNotes()
        })
        .catch(error => console.log('error', error))
    }
  }
}
</script>
