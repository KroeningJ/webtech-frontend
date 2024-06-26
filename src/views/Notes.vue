<template>
  <div class="notes-page">
    <div class="sidebar">
      <h2>Filter</h2>
      <input class="filter-input" v-model="searchTerm" type="text" placeholder="Search notes">
      <select class="filter-input" v-model="selectedColor">
        <option value="">All Colors</option>
        <option value="blau">Blue</option>
        <option value="rot">Red</option>
        <option value="grün">Green</option>
      </select>
      <input class="filter-input" v-model="selectedDate" type="date">
    </div>
    <div class="content">
      <h1>All Notes</h1>
      <note-list :notes="filteredByDateNotes" @delete-note="deleteNote" @note-updated="fetchNotes"></note-list>
    </div>
  </div>
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
      noteEntries: [],
      searchTerm: '',
      selectedColor: '',
      selectedDate: ''
    }
  },
  computed: {
    filteredNotes () {
      if (!this.searchTerm) {
        return this.noteEntries
      }
      return this.noteEntries.filter(note => note.entry && note.entry.includes(this.searchTerm))
    },
    filteredByColorNotes () {
      if (!this.selectedColor) {
        return this.filteredNotes
      }
      return this.filteredNotes.filter(note => note.colour === this.selectedColor)
    },
    filteredByDateNotes () {
      if (!this.selectedDate) {
        return this.filteredByColorNotes
      }
      return this.filteredByColorNotes.filter(note => this.formatDate(note.ldt) === this.selectedDate)
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
    },
    formatDate (ldt) {
      const date = new Date(ldt)
      const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }
      return date.toLocaleDateString('en-CA', options) // 'en-CA' format is 'yyyy-mm-dd'
    }
  }
}
</script>

<style scoped>
.notes-page {
  display: flex;
}

.sidebar {
  width: 300px; /* Sie können die Breite nach Ihren Wünschen anpassen */
  padding: 20px;
}

.filter-input {
  width: 100%; /* Setzt die Breite auf die volle Breite des Elternelements */
  box-sizing: border-box; /* Stellt sicher, dass Padding und Border in der Breite enthalten sind */
  height: 35px; /* Setzt die Höhe auf einen festen Wert */
  margin-bottom: 10px; /* Fügt einen Abstand zwischen den Elementen hinzu */
}

.content {
  flex-grow: 1;
}
</style>
