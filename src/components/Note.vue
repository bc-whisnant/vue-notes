<template>
    <div class="note-box">
            <div class="panel-body note">
                <slot></slot>
            </div>
            <div class="delete-btn">
               <slot name="delete"></slot>
            </div>
    </div>
</template>

<script>
  export default {
    name: 'Note'
  }
</script>

<style lang="scss" scoped>
.note-box {
  font-size: 1.2rem;;
  color: #6e6e6e; 
  padding: 5%;
  border: 3px solid lightgray;
  border-radius: 2%;
  max-width: 25%;
  background-color: lightgoldenrodyellow;
  position: relative;
  .note {
    word-break: break-word;
  }
  .delete-btn {
    position: absolute;
    top: 4px;
    right: 8px;
    cursor: pointer;
    color: red;
  }
}

</style>
