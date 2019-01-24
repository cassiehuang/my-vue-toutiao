/**
 * Created by UTSC on 2018/4/17.
 */
const LocalStorage = window.localStorage;
const SessionStorage = window.sessionStorage;

export const Local = {
  get(key) {
    if(key) return JSON.parse(LocalStorage.getItem(key));
    return null
  },
  set(key,val) {
    LocalStorage.setItem(key,JSON.stringify(val))
  },
  remove(key){
    LocalStorage.removeItem(key)
  },
  clear() {
    LocalStorage.clear()
  }
};
export const Cookie = {
  get(key){
    let arr,reg=new RegExp("(^| )"+key+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
      return unescape(arr[2]);
    else
      return null;
  },
  set(key,value,day){
    let oDate = new Date()
    oDate.setDate(oDate.getDate() + day)
    document.cookie = key + '=' + value + ';expires=' + oDate
  },
  remove(key){
    this.set(key,1,-1)
  }
}
