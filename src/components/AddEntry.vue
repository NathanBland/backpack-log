<template>
  <div class="addEntry">
    <input type="text" placeholder="Started hiking up the trail today"/>
    <button>Add</button>
  </div>
</template>

<script>
export default {
  name: 'addEntry',
  data () {
    return {
      msg: 'backpack-log'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
.addEntry {
  display: flex;
  justify-content: center;
}
.addEntry input {
  padding: .5em;
  width: 25%;
  margin-right: 0;
  border: none;
  border-radius: 5px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  transition: all 200ms ease-in-out;
  box-shadow: 0 0 4px #a8a8a8;
}
.addEntry input:focus {
  /* box-shadow: 0 0 4px #000000; */
}
.addEntry button {
  margin-left: 0;
  padding: .5em;
  border: none;
  border-radius: 5px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  box-shadow: 4px 0px 2px #a8a8a8;
  transition: all 200ms ease-in-out;
}
.addEntry button:hover {
  background-color: #35495E;
  color: white;
}
</style>
