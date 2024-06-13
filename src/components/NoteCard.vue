<template>
  <div class="card h-100">
    <div class="card-img-top note-card" :style="{ backgroundImage: 'url(' + getNoteImage(note) + ')' }">
      <p class="note-text" :style="{ fontSize: getFontSize(note.entry) }">
        {{ note.entry }}
      </p>
    </div>
    <div class="card-body">
      <h5 class="card-title">Note {{ note.id }}</h5>
      <p class="card-text">
        {{ formatDateTime(note.ldt) }}
      </p>
      <button class="btn btn-danger" @click="confirmDelete">Delete</button>
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
    },
    getFontSize (entry) {
      const length = entry.length
      if (length < 50) {
        return '1em'
      } else if (length < 100) {
        return '0.9em'
      } else if (length < 150) {
        return '0.8em'
      } else {
        return '0.7em'
      }
    },
    confirmDelete () {
      if (window.confirm('Are you sure you want to delete this note?')) {
        this.$emit('delete-note', this.note.id)
      }
    },

    formatDateTime (dateTimeString) {
      const dateTime = new Date(dateTimeString)
      const day = dateTime.getDate().toString().padStart(2, '0')
      const month = (dateTime.getMonth() + 1).toString().padStart(2, '0') // Monate beginnen bei 0 in JavaScript
      const year = dateTime.getFullYear()
      const hours = dateTime.getHours().toString().padStart(2, '0')
      const minutes = dateTime.getMinutes().toString().padStart(2, '0')
      return `${day}.${month}.${year} | ${hours}:${minutes}`
    }
  }
}
</script>

<style scoped>
.note-card {
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover; /* Ändern Sie dies zu 'cover' */
  background-repeat: no-repeat;
}

.note-text {
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
  padding: 10px;
  word-wrap: break-word;
  overflow: hidden;
}
</style>
