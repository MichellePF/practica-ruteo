<template>
    <div>
        <section class="about-services">
            <div class="contenedor">
                <h2 class="titulo">Japanese Food: {{$route.params.food}}</h2>
                <div class="servicio-cont">
                    <div class="servicio-ind">
                        <img src="../assets/comida5.jpg" alt="">
                        <h3>Ramen</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, qui?</p>
                    </div>
                    <div class="servicio-ind">
                        <img src="../assets/comida6.jpg" alt="">
                        <h3>Bento</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, qui?</p>
                    </div>
                    <div class="servicio-ind">
                        <img src="../assets/comida2.jpg" alt="">
                        <h3>Sushi</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, qui?</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'ListRestoran'
}
</script>

<style scoped>

.about-services{
    background: lightblue;
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