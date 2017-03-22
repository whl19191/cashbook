import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const getDate = () => { //获取当天日期
    const date = new Date(),
        mouth = parseInt(date.getMonth()) + 1;
    return date.getFullYear() + '-' + mouth + '-' + date.getDate();
}
const state = {
  allList:JSON.parse(localStorage.getItem('test')) || [],
  count:JSON.parse(localStorage.getItem('count')) || 0
}
const mutations = {
  delList (state,item){
        let index = state.allList.indexOf(item);
        state.allList.splice(index,1);
        localStorage.setItem('test',JSON.stringify(state.allList));
   },
   submit(state,obj){
     state.count++;
     obj.id = state.count;
     obj.time = getDate();
    // obj.time = '2017-3-20';
     state.allList.unshift(obj);
     localStorage.setItem('test',JSON.stringify(state.allList));
     localStorage.setItem('count',JSON.stringify(obj.id));
    }
}
const actions = {
  submit ({ commit },obj) {
    commit('submit',obj);
  },
  delList ({ commit },item) {
    commit('delList',item);
  }
}
const getters =  {
  // allList(state){ 
  //   return JSON.parse(localStorage.getItem('test')) || []
  // },
  allList(state){return state.allList},
  index(state){return state.index},

  todayList(state){
    return state.allList.filter(function(d){
                if( d.time === getDate()){
                  return d;
                }
            })
  
  },
  otherList(state){
    let list =  state.allList.filter(function(d){
        if( d.time !== getDate()){
          return d;
        }
    });
    function compare(value1, value2) {
      let date1 = value1.time.split('-')[2];
      let date2 = value2.time.split('-')[2];
      return date2 - date1;
    }
    list.sort(compare);
    return list
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
