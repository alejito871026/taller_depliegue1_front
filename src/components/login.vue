<script setup>
import {ref} from "vue"
import axios from "axios"
    const numero  = ref(0)

    async function calcularNumero() {
        numero.value = numero.value + 2
        const r = await axios.get('http://127.0.0.1:3000/data')
        console.log(r)
        // setTimeout(() => {
        //     calcularNumero()
        // }, 5000);
    }
    calcularNumero()
</script>
<template>
    <div>
        refresh info automatic
        <div>
            {{ numero }}
        </div>
    </div>
</template>