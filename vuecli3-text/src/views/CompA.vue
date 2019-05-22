<template>
    <div class="comp">
        <h1>comeA</h1>
        <CompB :msg = msg1></CompB>
        <comp-c @change="change"></comp-c>
        {{msg1}}
        <input v-model="val">
        {{$store.state.con}}
        


    </div>
</template>

<script>
import CompB from '@/views/CompB.vue';
import CompC from '@/views/CompC.vue';

export default {
    // name:'app',
    components: {
        CompB,
        CompC
    },
    data(){
        return{
            msg1:0,
            val:0
        }
    },
    methods:{
        change(a){
            // console.log('aaaa');
            this.msg1 = (this.msg1)*1 + (this.val)*1 +a*1;
        }
    }
    
}
</script>
<style>

</style>


