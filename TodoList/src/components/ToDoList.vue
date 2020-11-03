<template>
  <div>
    <ul>
      <li
        v-for="(item, index) in arr"
        :key="index"
        v-show="flag ? item.status : !item.status"
      >
        <input
          type="checkbox"
          class="ckd"
          @change="changeCkd(item)"
          :checked="!item.status"
        />
        <span v-if="item.switchText" @click="switchFun(item)">{{
          item.text
        }}</span>
        <input
          class="textBox"
          type="text"
          v-else
          @blur="switchFun(item)"
          v-model="item.text"
          v-focus
        />
        <span class="sp">{{ item.time }}</span>
        <div @click="delFun(item)" class="del">
          <span>-</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: ["flag"],
  data() {
    return {};
  },
  computed: {
    ...mapState(["arr"]),
  },
  methods: {
    ...mapMutations(["switchFun", "changeCkd", "delFun"]),
  },
  directives: {
    focus: {
      inserted(el, binding) {
        el.select();
      },
    },
  },
};
</script>

<style lang="less" scoped>
.carry {
  width: 600px;
  margin: 0 auto;
  background: chocolate;
  h3 {
    margin: 10px 0;
  }
  
  ul {
    li {
      height: 50px;
      line-height: 50px;
      overflow: hidden;
      background: #fff;
      margin-bottom: 10px;
      .ckd {
        float: left;
        width: 20px;
        height: 20px;
        margin: 15px 15px 0;
      }
      span {
        float: left;
      }
      div {
        float: right;
        margin: 5px 10px;
      }
      .textBox {
        width: 200px;
        height: 25px;
        text-indent: 10px;
      }
     
    }
    
  }
}
.sp {
  display: inline-block;
  width: 200px;
  /* text-align: right; */
  font-size: 14px;
  color: #999;
}
li>span{
  margin-left: 20px;
}

.del span {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #666666;
  text-align: center;
  line-height: 20px;
  color: #fff;
  margin-top: 10px;
  font-size: 20px;
}
</style>
