import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // switchText:true, //切换文本
    num:0,
    arr:[], // status 位置状态
    iptVal:'',

  },
  getters:{
    count(state){
       return function(bool){
          return state.arr.filter(item=>item.status==bool).length
       }
    },
  
  },
  mutations: {
    switchFun(state,payload){
      // state.switchText=!state.switchText
      let item = state.arr[state.arr.indexOf(payload)]
      item.switchText =!item.switchText
    },
    changeCkd(state,payload){
      //  payload.status = !payload.status
     let item = state.arr[state.arr.indexOf(payload)]
     item.status =!item.status
    },
    delFun(state,payload){
      // console.log(state.arr.indexOf(payload))
      state.arr.splice(state.arr.indexOf(payload),1)

    },
    //时间戳
    ToDoTime(state,payload){
       var nowTime = new Date()
       var nowY = nowTime.getFullYear();
       var nowMo = nowTime.getMonth();
       var nowD = nowTime.getDate();
       var nowH = nowTime.getHours();
       var nowM = nowTime.getMinutes();
       var nowS = nowTime.getSeconds();

       if(nowH<10){
         nowH="0"+nowH
       }
       if(nowM<10){
        nowM="0"+nowM
      }
      if(nowMo<10){
        nowMo="0"+nowMo
      }
      if(nowD<10){
        nowD="0"+nowD
      }
      if(nowS<10){
        nowS="0"+nowS
      }
      
       if(payload.trim()){
         var time = nowY+'-'+nowMo+"-"+nowD+" "+nowH+":"+nowM+":"+nowS
        //  console.log(nowT)
        //  state.iptVal = payload
        state.arr.push({id:++state.num,text:payload,status:true,switchText:true,time:time})
        state.iptVal =''
       }else{
         alert("不能为空")
       }
      //  console.log(state.arr)
    }
  },
  actions: {
  },
  modules: {
  }
})
