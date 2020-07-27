<template>
    <div>
        <section class="about-services">
            <router-link  class="link" v-bind:to="{path: '/'}">Home</router-link>
            <div class="contenedor">
                <h2 class="titulo">Champs lol: {{$route.params.champ}}</h2>
                <div class="servicio-cont">
                    <div class="servicio-ind">
                        <h3>Runas</h3>
                        <p>Las runas otorgan a un campeón una bonificación que puede personalizarse. Hay cuatro tipos de runas, y cada una tiene su propia especialidad. Las marcas ofrecen las mejores bonificaciones a las características de ataque. Los sellos suelen basarse en la defensa física, la curación y la recuperación.</p>
                        <img src="../assets/runas.jpg" alt="">
                    </div>
                    <div class="servicio-ind">
                        <h3>abilities</h3>
                        <p>Las habilidades son lo que un campeón utiliza en los Campos de la Justicia. La naturaleza única de las habilidades de un campeón los diferencia entre otros campeones. Las habilidades de un campeón también determinan el rol de un campeón en su equipo, cómo se debe jugar con el mismo, y que objetos, runas, y maestrías deben usarse para maximizar su efectividad. Los hechizos de invocador no son habilidades.</p>
                        <img src="../assets/habilidades.png" alt="">
                    </div>
                    <div class="servicio-ind">
                        <h3>Build</h3>
                        <p>Las habilidades son lo que un campeón utiliza en los Campos de la Justicia. La naturaleza única de las habilidades de un campeón los diferencia entre otros campeones. Las habilidades de un campeón también determinan el rol de un campeón en su equipo, cómo se debe jugar con el mismo, y que objetos, runas, y maestrías deben usarse para maximizar su efectividad. Los hechizos de invocador no son habilidades.</p>
                        <img src="../assets/build.png" alt="">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'ListChamp'
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