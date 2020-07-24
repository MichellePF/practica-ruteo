<template>
<div class="header">
    <section class="textos-header">
        <h1>Welcome !!!</h1>
        <h2>Una página web potente</h2>
    </section>
    <div class="wave" style="height: 150px; overflow: hidden;"><svg viewBox="0 0 500 150" preserveAspectRatio="none"
        style="height: 100%; width: 100%;">
        <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
        style="stroke: none; fill: #fff;"></path>
        </svg>
    </div>
</div>
    
</template>

<script>
export default {
    name: 'Welcome'
}
</script>

<style scoped>
.header {
    width: 100%;
    height: 800px;
    background: #bc4e9c;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, hsla(340, 95%, 50%, 0.459), hsla(317, 45%, 52%, 0.664)), url(../assets/lol.jpg);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, hsla(340, 95%, 50%, 0.459), hsla(317, 45%, 52%, 0.664)), url(../assets/lol.jpg);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    }
.header .textos-header{
    display: flex;
    height: 430px;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}

.textos-header h1{
    font-size: 50px;
    color:#fff;
}

.textos-header h2{
    font-size: 30px;
    font-weight: 300;
    color:#fff;
}

.wave{
    position: absolute;
    bottom: 0;
    width: 100%;
}

</style>