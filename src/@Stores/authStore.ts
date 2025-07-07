import * as pin from 'pinia';
import {ref} from 'vue';

const useAuthStore = pin.defineStore('auth',() =>{
const is_authorized = ref<boolean>(false);
function authentificate(status:boolean){
is_authorized.value = status;
}
return {
    //State
is_authorized,
    //Actions
authentificate,
}
});

export default {
useAuthStore,
}