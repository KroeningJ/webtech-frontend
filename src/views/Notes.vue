<template>
  <h1>All Notes</h1>
  <note-list :notes="noteEntries" @delete-note="deleteNote" @note-updated="fetchNotes"></note-list>
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
      axios.get(`${process.env.VUE_APP_BACKEND_BASE_URL}/api/v1/notes`)
        .then(response => {
          // Sort notes by ID in descending order
          this.noteEntries = response.data.sort((a, b) => b.id - a.id)
        })
        .catch(error => {
          console.log('Error fetching notes:', error)
        })
    },
    deleteNote (noteId) {
      axios.delete(`${process.env.VUE_APP_BACKEND_BASE_URL}/api/v1/notes/${noteId}`)
        .then(response => {
          this.fetchNotes()
        })
        .catch(error => {
          console.log('Error deleting note:', error)
        })
    }
  }
}
</script>
