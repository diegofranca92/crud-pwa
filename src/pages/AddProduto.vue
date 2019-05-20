<template>
  <q-page class="flex flex-center">
    <q-card style="width: 500px;">
      <q-card-title class="bg-amber-5 text-white" align="center">
        Cadastrar Produto
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <form @submit.prevent="addProduto">
          <q-input v-model="newProduto.nome"  class="on-left q-mt-md" type="text" float-label="Nome"/>
          <q-input v-model="newProduto.preco" prefix="R$" class="on-left q-mt-md" type="number" float-label="Preço" />
          <q-btn color="primary" type="submit" class="on-left q-mt-lg" icon="check" label="Cadastrar"/>
        </form>
      </q-card-main>
    </q-card>
       
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th colspan="2">Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="produto of produtos" :key="produto['.key']">
          <td>{{produto.nome}}</td>
          <td>{{produto.preco}}</td>
          <td>
            <router-link :to="{ path:'/produtos', params: {id:produto['.key']}}">
                <q-btn round color="warning">
                  <q-icon name="edit" />
                </q-btn>
            </router-link>
          </td>
          <td>
            <q-btn round color="red" @click="deleteProduto(produto['.key'])">
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
        nome: 'AddProduto'   
    },
    firebase: {
        produtos: db.ref('produtos')
    },
    data(){
        return{
            newProduto:{
                nome:'',
                preco:''
            },
            produtos:[]
        }
    },
    methods: {
      addProduto(){
        this.$firebaseRefs.produtos.push({
            nome: this.newProduto.nome,
            preco: this.newProduto.preco
        })
        this.newProduto.nome = '';
        this.newProduto.preco = '';
        this.$router.push('/')
        },
      deleteProduto(key){
        this.$firebaseRefs.produtos.child(key).remove();
    }  
    }
}
</script>

<style>
</style>
