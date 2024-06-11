<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <note-create-form></note-create-form>
      </div>
    </div>
  </div>
</template>

<script>
import NoteCreateForm from '@/components/NewNoteForm'
export default {
  name: 'NewNote',
  components: {
    NoteCreateForm
  }
}
</script>
