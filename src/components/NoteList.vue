<template>
  <div>
    <button
      class="btn btn-danger mb-3"
      @click="deleteSelectedNotes"
      :disabled="selectedNotes.length === 0"
    >
      Delete Selected Notes
    </button>
    <div class="mb-3">
      <input type="checkbox" v-model="selectAll" @change="toggleSelectAll"> Select All
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-md-3 row-cols-md-4" id="container">
      <div class="col" v-for="note in notes" :key="note.id">
        <note-card
          :note="note"
          :selected="isSelected(note.id)"
          @delete-note="deleteNote"
          @note-updated="noteUpdated"
          @select-note="selectNote"
        ></note-card>
      </div>
    </div>
  </div>
</template>

<script>
import NoteCard from '@/components/NoteCard'

export default {
  name: 'NoteCardList',
  components: {
    NoteCard
  },
  props: {
    notes: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      selectedNotes: [],
      selectAll: false
    }
  },
  methods: {
    deleteNote (noteId) {
      this.$emit('delete-note', noteId)
    },
    noteUpdated () {
      this.$emit('note-updated')
    },
    selectNote (noteId, isSelected) {
      if (isSelected) {
        this.selectedNotes.push(noteId)
      } else {
        this.selectedNotes = this.selectedNotes.filter(id => id !== noteId)
      }
    },
    deleteSelectedNotes () {
      if (this.selectedNotes.length > 0) {
        if (window.confirm(`Are you sure you want to delete ${this.selectedNotes.length} selected notes?`)) {
          this.selectedNotes.forEach(noteId => {
            this.deleteNote(noteId)
          })
          this.selectedNotes = []
        }
      } else {
        window.alert('No notes selected for deletion.')
      }
    },
    isSelected (noteId) {
      return this.selectedNotes.includes(noteId)
    },
    toggleSelectAll () {
      if (this.selectAll) {
        this.selectedNotes = this.notes.map(note => note.id)
      } else {
        this.selectedNotes = []
      }
    }
  },
  watch: {
    selectedNotes (newVal, oldVal) {
      if (newVal.length === this.notes.length) {
        this.selectAll = true
      } else if (oldVal.length === this.notes.length) {
        this.selectAll = false
      }
    }
  }
}
</script>

<style scoped>
button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
