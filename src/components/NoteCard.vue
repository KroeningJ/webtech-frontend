<template>
      <div class="card by-white text-black">
        <img class="card-img" :src="getPicture(note)" alt="Card image">
        <div class="card-img-overlay">
          <div class="">
            <h5 class="card-title">Your {{ note.id}} Notes</h5>
            <p class="card-text">{{note.entry}}</p>
            <p class="card-text">{{note.ldt}}</p>
          </div>
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
    getPicture (note) {
      if (note.colour === 'blue') {
        return require('../assets/note01.png')
      } else if (note.colour === 'green') {
        return require('../assets/note02.png')
      } else if (note.colour === 'red') {
        return require('../assets/note03.png')
      } else if (note.colour === 'yellow') {
        return require('../assets/note04.png')
      }
    }
  }
}
</script>

<style scoped>

</style>
