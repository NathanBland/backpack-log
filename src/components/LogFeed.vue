<template>
  <div class="logFeed">
    <h1>{{ msg }}</h1>
    <add-entry></add-entry>
  </div>
</template>

<script>
import AddEntry from '@/components/AddEntry'
export default {
  components: {
    AddEntry
  },
  name: 'logFeed',
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
</style>
