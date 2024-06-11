<<template>
  <div class="card" :style="{backgroundColor: note.colour}">
    <div class="card-body">
      <h5 class="card-title">{{ note.ldt }}</h5>
      <p class="card-text">{{ note.entry }}</p>
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
  }
}
</script>

<style scoped>
</style>
