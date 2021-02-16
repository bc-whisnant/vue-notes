<template>
    <form class="form">
      <div class="area">
        <textarea rows="3" v-model="note" maxlength="250" placeholder="Add a new note...250 characters or less"></textarea>
      </div>
       <div>
       <button class="btn" @click.prevent="addNote">Add Note</button>
      </div>
    </form>
</template>

<script>
export default {
  name: 'NewNote',
  data() {
    return {
      note: ''
    }
  },
  methods: {
    addNote() {
      // if form field is empty, alert and don't submit
      if (this.note === '') {
        alert('Please enter a note')
        return false
      }
      this.$emit('addNote', this.note)
      this.note = ''
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  .area {
    margin-bottom: 1%;
     textarea {
      width: 40%;
      height: 125px;
      border-radius: 4px;
      border: 2px solid lightgray;
       @media(max-width: 767px) {
        width: 100%;
      } 
    } 
  }
   
  button {
    color: white;
    background: salmon;
    text-transform: uppercase;
    padding: 1%;
    border-radius: 4px;
    border: none;
  }
  button:hover {
    opacity: 0.8;
    cursor: pointer;
  }
}

</style>
