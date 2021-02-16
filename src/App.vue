<template>
  <div id="app" class="container">
    <h2 class="title">Notes</h2>
    <NewNote @addNote="addNewNote" />
    <NoteContainer :notes="notes" @deleteNote="deleteNote" />
  </div>
</template>

<script>
import NewNote from './components/NewNote'
import NoteContainer from './components/NoteContainer'

export default {
  name: 'App',
  data() {
    return {
      notes: [],
      filteredValue: ''
    }
  },
  mounted() {
    if (localStorage.getItem('notes')) {
      try {
        this.notes = JSON.parse(localStorage.getItem('notes'))
      }
      catch(e) {
        localStorage.removeItem('notes')
      }
      
    }
  },
  components: {
    NewNote,
    NoteContainer
  },
  methods: {
    addNewNote(note) {
      this.notes.push(note)
      this.saveNotes()
    },
    deleteNote(index) {
      this.notes.splice(index, 1)
      this.saveNotes()
    },
    saveNotes() {
      const parsed = JSON.stringify(this.notes)
      localStorage.setItem('notes', parsed)
    }
  }

}
</script>

<style lang="scss">
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  @media(max-width: 767px) {
    width: 90%;
  }
  .title {
    font-family: 'Orbitron', sans-serif;
    color: salmon;
    font-size: 44px;
    text-transform: uppercase;
  }
}
</style>
