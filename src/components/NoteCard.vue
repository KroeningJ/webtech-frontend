<template>
  <div class="card h-100">
    <img :src="getNoteImage(note)" class="card-img-top" :alt="'Note ' + note.id">
    <div class="card-body">
      <h5 class="card-title">Note {{ note.id }}</h5>
      <p class="card-text">
        Entry: {{ note.entry }} <br>
        Entry Time: {{ note.ldt }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoteCard',
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  methods: {
    getNoteImage (note) {
      if (note.colour === 'blau') {
        return require('../assets/note01.png')
      } else if (note.colour === 'rot') {
        return require('../assets/note03.png')
      }
    }
  }
}
</script>

<style scoped>
#container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
}
</style>
