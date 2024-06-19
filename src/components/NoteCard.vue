<template>
  <div class="card h-100">
    <div class="card-img-top note-card" :style="{ backgroundImage: 'url(' + getNoteImage(note) + ')' }">
      <div class="note-text">
        <p :style="{ fontSize: getFontSize(note.entry) }">
          {{ note.entry }}
        </p>
      </div>
    </div>
    <div class="card-body">
      <h5 class="card-title">Note {{ note.id }}</h5>
      <p class="card-text">
        {{ formatDateTime(note.ldt) }}
      </p>
      <div>
        <button class="btn btn-danger" @click="confirmDelete" style="background-color: #881515; border-color: #881515;">Delete</button>
        <button class="btn btn-primary" @click="openEditForm" style="background-color: #365c24; border-color: #365c24;">Edit</button>
      </div>
      <div class="mt-2">
        <input type="checkbox" v-model="isSelected" @change="selectNote" /> Select
      </div>
    </div>
    <edit-note-form v-if="showEditForm" :note="note" :show="showEditForm" @note-updated="updateNotes" @close="closeEditForm"></edit-note-form>
  </div>
</template>

<script>
import EditNoteForm from './EditNoteForm.vue'

export default {
  name: 'NoteCard',
  props: {
    note: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showEditForm: false,
      isSelected: this.selected
    }
  },
  components: {
    EditNoteForm
  },
  methods: {
    confirmDelete () {
      if (window.confirm('Are you sure you want to delete this note?')) {
        this.deleteNote()
      }
    },
    deleteNote () {
      this.$emit('delete-note', this.note.id)
    },
    openEditForm () {
      this.showEditForm = true
    },
    closeEditForm () {
      this.showEditForm = false
    },
    updateNotes () {
      this.$emit('note-updated')
      this.closeEditForm()
    },
    selectNote () {
      this.$emit('select-note', this.note.id, this.isSelected)
    },
    getNoteImage (note) {
      if (note.colour === 'blau') {
        return require('@/assets/note01.png')
      } else if (note.colour === 'rot') {
        return require('@/assets/note03.png')
      } else if (note.colour === 'grün') {
        return require('@/assets/note02.png')
      } else {
        return require('@/assets/note02.png')
      }
    },
    getFontSize (entry) {
      const length = entry.length
      if (length < 100) {
        return '1em'
      } else if (length < 200) {
        return '0.75em'
      } else {
        return '0.5em'
      }
    },
    formatDateTime (ldt) {
      const date = new Date(ldt)
      const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
      }
      return date.toLocaleDateString('de-DE', options)
    }
  },
  watch: {
    selected (newVal) {
      this.isSelected = newVal
    }
  }
}
</script>

<style scoped>
.note-card {
  background-size: cover;
  background-position: center;
  height: 250px; /* Je nach Bedarf anpassen */
  position: relative;
}

.note-text {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
  color: white;
  text-shadow: 1px 1px 2px black;
  padding: 5px;
  box-sizing: border-box;
  overflow-wrap: break-word;
}
</style>
