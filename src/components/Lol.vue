<template>
    <div>
        <section class="about-services">
            <div class="contenedor">
                <h2 class="titulo">Personajes: {{$route.params.name}}</h2>
                <div class="servicio-cont">
                    <div class="servicio-ind">
                        <img src="../assets/yuumi.jpg" alt="">
                        <h3>Yuumi</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, qui?</p>
                    </div>
                    <div class="servicio-ind">
                        <img src="../assets/lillia.png" alt="">
                        <h3>Lillia</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, qui?</p>
                    </div>
                    <div class="servicio-ind">
                        <img src="../assets/zoe.jpg" alt="">
                        <h3>Zoe</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, qui?</p>
                    </div>
                </div>
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