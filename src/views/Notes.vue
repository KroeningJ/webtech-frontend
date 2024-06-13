<template>
  <h1>All Notes</h1>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="noteEntry in noteEntries" :key="noteEntry.id">
        <div class="card h-100">
          <img :src="getNoteImage(noteEntry)" class="card-img-top" :alt="'Note ' + noteEntry.id">
          <div class="card-body">
            <h5 class="card-title">Note {{ noteEntry.id }}</h5>
            <p class="card-text">
              Entry: {{ noteEntry.entry }} <br>
              Entry Time: {{ noteEntry.ldt }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Notes',
  data () {
    return {
      noteEntries: []
    }
  },
  methods: {
    getNoteImage (noteEntry) {
      if (noteEntry.colour === 'blau') {
        return require('../assets/note01.png')
      } else if (noteEntry.colour === 'rot') {
        return require('../assets/note03.png')
      }
    }
  },
  mounted () {
    axios.get('http://localhost:8080/api/v1/notes')
      .then(response => {
        this.noteEntries = response.data
      })
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
