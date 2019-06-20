<template>
    <div>
        <aplayer autoplay
        :music="{
            title: 'secret base~君がくれたもの~',
            artist: 'Silent Siren',
            src: 'http://sc1.111ttt.cn:8282/2018/1/03m/13/396131229550.m4a?tflag=1519095601&pin=6cd414115fdb9a950d827487b16b5f97#.mp3',
            pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
        }"
        />
    </div>
</template>

<script>
import Aplayer from 'vue-aplayer';
    export default {
        components:{
            Aplayer
        } 
    }
</script>

<style lang="scss" scoped>

</style>