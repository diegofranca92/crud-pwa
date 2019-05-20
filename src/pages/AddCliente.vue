<template>
  <q-page class="flex flex-center">
    <q-card style="width: 500px;">
      <q-card-title class="bg-cyan-9 text-white" align="center"> 
        Cadastrar Cliente
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <form @submit.prevent='addCliente'>
          <q-input v-model="newCliente.nome" class="on-left q-mt-md" type="text" float-label="Nome"/>
          <q-input v-model="newCliente.endereco" class="on-left q-mt-md" type="text" float-label="Endereço" />
          <q-btn color="primary" type="submit" class="on-left q-mt-lg" icon="check" label="Cadastrar"/>
        </form>
      </q-card-main>
    </q-card>
    <table>
      <thead>
        <tr>
          <th>Cliente</th>
          <th>Endereço</th>
          <th colspan="2">Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cliente of clientes" :key="cliente['.key']">
          <td>{{cliente.nome}}</td>
          <td>{{cliente.endereco}}</td>
          <td>
            <router-link :to="{ path:'/clientes', params: {id:cliente['.key']}}">
                <q-btn round color="warning">
                  <q-icon name="edit" />
                </q-btn>
            </router-link>
          </td>
          <td>
            <q-btn round color="red" @click="deleteCliente(cliente['.key'])">
              <q-icon name="delete" />
            </q-btn>
          </td>
        </tr>
      </tbody>
    </table>
  </q-page>
</template>

<script>
import { db } from '../config/db';
export default {
  components: {       
      nome: 'AddCliente'   
    },
    firebase: {
      clientes: db.ref('clientes')
    },
    data(){
        return{
            newCliente:{
              nome:'',
              endereco:''
            },
            clientes:[]
        }
    },
    methods: {
      addCliente(){
        this.$firebaseRefs.clientes.push({
            nome: this.newCliente.nome,
            endereco: this.newCliente.endereco
        })
        this.newCliente.nome = '';
        this.newCliente.endereco = '';
        this.$router.push('/')
        },
      deleteCliente(key){
        this.$firebaseRefs.clientes.child(key).remove();  
      }
    }
}
</script>

<style>
</style>