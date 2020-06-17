<template>
  <div id="app" >
    <h1>hello CompleteSelect</h1>
    <div class="dark">选择：{{name}}</div>
    <CompleteSelect :data="list" theme="dark" v-model="name">
      <!-- <template v-slot:item="data">
        {{data.item.id}} : <span v-html="data.item.name"></span>
      </template> -->
    </CompleteSelect>

    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import CompleteSelect from './myplugin/completeSelect.vue'

interface list {
    id:string,
    name:string
}

@Component({
  components:{
    CompleteSelect
  }
})
export default class App extends Vue {
  list:list[] = [
    {id:'1',name:'a张三'},
    {id:'2',name:'a李四'},
    {id:'3',name:'a王五'},
    {id:'4',name:'a赵六'},
    {id:'5',name:'a李雷'},
  ]

  name = '';
}

</script>

<style>
body{
  background: black;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #fff;
  margin-top: 60px;
  
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}



a {
  color: #42b983;
}
/* .dark{
  color:#fff
} */
</style>
