<template>
    <div class="bg-green-200 w-full h-full">
    <input class="bg-blue-300 p-1 m-1 rounded-md cursor-pointer hover:bg-blue-600 hover:text-white" type="button" value="Authorize me" @click="authorize"/>
        <span :class="auth.is_authorized ? 'text-green-600':'text-red-500'"> {{ auth.is_authorized }}</span>
    </div>
    
</template>

<script setup lang="ts">
//We can import ref, router, route and other items from vue, vue-router, pinia each time. Or use auto plugin to do it once.

//Now, we dont need to import ref keyword
import authStore from '@/@Stores/authStore';
const auth = authStore.useAuthStore();
//const isAuhorized = ref<boolean>(false); //this state remains only in this component. So store it in pini store to share with other comps.

function getRandomString() : string{
    return(Math.random().toString(36).substring(2,10))
}

function authorize(){
    console.log( getRandomString());
    let uname =  getRandomString();
    auth.authentificate(!auth.is_authorized, uname); //either give direct value or invert it.
}
</script>

<style scoped>

</style>