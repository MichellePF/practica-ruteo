<template>
   <section class="clientes contenedor">
        <div class="link-container">
        <router-link  class="link" v-bind:to="{name: 'home'}">Home</router-link>
    </div>
        <h2 class="titulo">Que dicen nuestros clientes</h2>
        <div class="cards">
            <div class="card">
                <img src="../assets/lillia.png" alt="">
                <div class="contenido-texto-card">
                    <h4>Cennit</h4>
                    <p>La visión del mapa es limitada, vemos lo que ven nuestros campeones y nuestros minions, quedando en principio esas dos áreas triangulares entre las líneas en sombra. </p>
                </div>
            </div>
            <div class="card">
                <img src="../assets/neeko.jpg" alt="">
                <div class="contenido-texto-card">
                    <h4>Miiky</h4>
                    <p>Sí es verdad que se están poniendo al día y que cada campeón nuevo que sacan está más detallado que el anterior, así como los nuevos mapas para los nuevos modos de juego, cuya mejoría se hace muy palpable si los comparamos con la clásica Grieta del Invocador.</p>
                </div>
                </div>
            </div>
        </section>
</template>

<script>
export default {
    name: 'ListChamp'
}
</script>

<style scoped>

.cards{
    display: flex;
    justify-content: space-evenly;
}

.link-container {
    text-align: right;
    padding: 30px 50px 0 0;
}

.cards .card{
    background: #4d0686;
    display: flex;
    width: 46%;
    height: 200px;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 5px;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.6);
}

.cards .card img{
    width: 100px;
    height: 100px;
    object-fit: cover;
    border: 3px solid #fff;
    border-radius: 50%;
    display: block;
}

.cards .card > .contenido-texto-card{
    width: 60%;
    color: #fff;
}

.cards .card > .contenido-texto-card p{
    font-weight: 300;
    padding-top: 5px;
}
</style>