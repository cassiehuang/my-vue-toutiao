/**
 * Created by UTSC on 2018/4/17.
 */
import {subNavList} from './default/default.js'
import myAxios from './axios/myAxios.js'
import {Local} from './storage/storage.js'
/*import Vue from 'vue'

Vue.prototype.$promise = function(id){
  return new Promise((resolve,reject) => {
    myAxios.get(url,params)
      .then(res => {
        Vue.prototype.$promiseData = res.data;
        resolve(res.data);
      })
      .catch(err =>{
        reject(err);
      })
  })
}
Vue.prototype.$promiseData = '';*/

export default {
    getSubNavList(){
      let list = JSON.parse(Local.get('subNavList')) || subNavList.slice(0,12);
      this.list = list;
      Local.set('subNavList',JSON.stringify(list));
      return list;
    },
    addSubTag(list,tag){
      if(list.every(item => item.title!== tag.title)){
        list.push(tag);
        Local.set('subNavList',JSON.stringify(list));
        return list;
      }
    },
    delSubTag(list,tag){
      let index = this.list.findIndex(item => item.title === tag.title);
      list.splice(index,1);
      Local.set('subNavList',JSON.stringify(list));
      return list;
    },
    /*getHomeList(title,id){
      let url = 'home/list';
      let params = {
        title,
        id,
      };

  },*/
}

