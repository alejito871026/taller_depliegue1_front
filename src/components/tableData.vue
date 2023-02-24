<script setup>
    import {ref} from "vue"
    import axios from "axios"

    const products  = ref([])
    const crearProd = ref(false) 
    const updateProd = ref(false) 
    const venderProd = ref(false) 
    const verProd = ref(false) 
    const productoUnico = ref ({})

    async function getData() {
        const r = await axios.get('http://127.0.0.1:3000/data')
        products.value = r.data
        setTimeout(() => {
            getData()
        }, 15000);
    }
    const createProduct = (async() => {
        const data = {
            nombre : 'regla',
            seccion : 'papeleria',
            cantidad : 20
        }
        const r = await axios.post('http://127.0.0.1:3000/data', data)
        if(r.status == 200){
            alert('Se a creado con exito el producto')
        }else{
            console.log(r)
            alert(r.data.msg)
        }
    })
    const deleteProduct = (async(id) => {
        const r = await axios.post('http://127.0.0.1:3000/data/delete', {_id : id})
        if(r.status == 200){
            alert('Se a eliminado    con exito el producto')
        }
    })
    const verProduct = ((product) => {
        productoUnico.value = product
        verProd.value = true
    })
    getData()
</script>
<template lang="">
    <div>
       <table class = "table table-hover" v-if ="!crearProd && !updateProd && !verProd && !venderProd">
            <thead>
                <th>nombre</th>
                <th>cantidad</th>
                <th>opciones</th>
            </thead>
            <tbody v-for="(product, index) in products" :key="index">
                <td>{{product.nombre}}</td>
                <td>{{product.stock.cantidad}}</td>
                <td>
                    <button @click = "venderProd =  true" class="btn btn-primary text-dark">vender</button>
                    <button @click = "verProduct(product)" class="btn btn-primary text-dark">ver</button>
                    <button @click = "updateProd = true" class="btn btn-warning text-dark">actualizar</button>
                    <button @click = "deleteProduct(product._id)" class="btn btn-danger text-dark">eliminar</button>
                </td>
            </tbody>
       </table> 
       <div v-if = verProd>
            <div>{{productoUnico}}</div>
            <button @click = "verProd = false">cerrar</button>
       </div>
       <div v-if = crearProd>
            <button @click = "createProduct()">enviar</button>   
            <button @click = "crearProd = false">cerrar</button>
       </div>
       <div v-if = venderProd>
            vender
            <form @submit.prevent = "venderProduct()">
                <button>vender</button>
            </form>        
            <button @click = "venderProd = false">cerrar</button>
       </div>
       <div v-if = "updateProd">
            update
            <button @click = "updateProd = false">cerrar</button>
        </div>
    </div>
    <div>
        <button @click = "crearProd = true" class="btn btn-primary">Crear producto</button>
    </div>

</template>

<style lang="">
    
</style>