<template>
  <div class="home">
    <div class="header">
      <div class="title">
        <h3>ToDoList</h3>
        <input type="text" placeholder="请输入..." v-model="$store.state.iptVal" @keyup.enter='ToDoTime($store.state.iptVal)'/>
      </div>
    </div>
     <div class="carry">
      <h3>正在进行<span class="r">{{count(true)}}</span></h3>
      <!-- flag 判断（进行，完成） -->
    <ToDoList :flag="true"></ToDoList>
     </div>
     <div class="carry">
      <h3>已经完成<span class="r">{{count(false)}}</span></h3>
    <ToDoList :flag="false"></ToDoList>
     </div>

  </div>
</template>

<script>

import {mapState,mapMutations,mapGetters} from 'vuex'
import ToDoList from '../components/ToDoList.vue'
export default {
  name: "Home",
  data() {
    return {
    }
  },
  components: {
   ToDoList,

  },
  computed:{
    // ...mapState(['iptVal']),
    ...mapGetters(['count']),
    
  },
  methods:{
    ...mapMutations(['ToDoTime']),
  },
};
</script>
<style lang='less' scoped>
.header {
  width: 100%;
  height: 50px;
  background: #333;
  .title {
    margin: 0 auto;
    width: 600px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      color: #fff;
      font-size:26px;
    }
    input{
      width: 300px;
      height: 30px;
      text-indent: 10px;
      outline: none;
    }
  }
}
.carry{
  width: 600px;
  margin: 0 auto;
  // background: chocolate;
  h3{
    margin: 10px 0;
  }
}
.r{
  float: right;
}
</style>
