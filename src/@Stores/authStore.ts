import * as pin from 'pinia';
import {ref} from 'vue';

const useAuthStore = pin.defineStore('auth',() =>{
const is_authorized = ref<boolean>(false);
const username = ref<string>();
function authentificate(status:boolean, user_name?:string){
    is_authorized.value = status;
    username.value = user_name;
    console.log(is_authorized, username);
}
return {
    //State
is_authorized,
username,
    //Actions
authentificate,
}
});

export default {
useAuthStore,
}