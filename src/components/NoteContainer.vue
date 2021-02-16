<template>
  <div class="row">
    <Note v-for="(note, index) in notes" :key="index" class="note">
      {{ note }}
      <template v-slot:delete>
        <span class="trash" @click="deleteNote(index)">
          X
        </span>
      </template>
    </Note>
  </div>
</template>

<script>
import Note from './Note'
  export default {
    name: 'NoteContainer',
    props: ['notes'],
    components: {
      Note
    },
    methods: {
      deleteNote(index) {
        this.$emit('deleteNote', index)
      }
    }
  }
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  .row:hover {
    background-color: lightcoral;
  }
  .note {
   margin: 10px;
  }
  .note:hover {
    background-color: lightblue;
  }

}

</style>
