<template>
  <h1 align="left">Your Notes</h1>
  <div class="container-fluid">
    <note-card-list :notes="this.notes"></note-card-list>
  </div>
  <note-create-form @created="addNote"></note-create-form>
</template>

<script>
import axios from 'axios'
import NoteCardList from '@/components/NoteList'
import NoteCreateForm from '@/components/NewNoteForm'
export default {
  name: 'Notes',
  components: {
    NoteCardList,
    NoteCreateForm
  },
  data () {
    return {
      notes: []
    }
  },
  mounted () {
    const endpoint = 'https://webtech-frontend-0186.onrender.com/'

    axios.get(endpoint)
      .then(response => {
        response.data.forEach(note => {
          this.notes.push(note)
        })
      })
      .catch(error => console.log('error', error))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
