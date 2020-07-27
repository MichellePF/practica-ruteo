<template>
    <div>
        <div>
            <router-link  class="link" v-bind:to="{path: '/'}">Home</router-link>
        </div>
        
        <img src="@/assets/404.jpg" alt="foto">
    </div>
</template>

<script>
export default {
    name: 'NotFound'
}
</script>

<style scoped>
   
</style>