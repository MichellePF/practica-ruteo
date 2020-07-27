<template>
    <div>
        <section class="about-services">
            <div class="contenedor">
                 <div>
                    <router-link  class="link" v-bind:to="{path: `/${$route.params.lol}`}">About</router-link>
                    <router-link  class="link" v-bind:to="{path: `/${$route.params.lol}/reviews`}"> | Reviews</router-link>
                    <router-link  class="link" v-bind:to="{path: `/${$route.params.lol}/images`}"> | Images</router-link>
                </div>
                <router-view/>
               
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Lol'
}
</script>

<style scoped>

.about-services{
    background: lightpink;
    padding: 30px;

}

.link-container{
    text-align: right;
    padding: 30px 50px 0 0;
}

.servicio-cont{
    display:flex;
    justify-content: space-between;
    align-items: center;
}

.servicio-ind{
    width: 28%;
    text-align: center;
}

.servicio-ind img{
    width: 90%;
}

.servicio-ind h3{
    margin: 10px 0;
}

.servicio-ind p{
    font-weight: 300;
    text-align: justify;
}
</style>