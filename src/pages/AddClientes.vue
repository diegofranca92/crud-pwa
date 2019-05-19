<template>
  <q-page class="flex flex-center">
    <q-card style="width: 500px;">
      <q-card-title class="bg-cyan-9 text-white" align="center"> 
        Cadastrar Cliente
      </q-card-title>
      <q-card-separator />
      <q-card-main >
        <q-input v-model="nome" class="on-left q-mt-md" type="text" float-label="Nome"/>
        <q-input v-model="endereco" class="on-left q-mt-md" type="text" float-label="Endereço" />
        <q-btn color="primary" class="on-left q-mt-lg" icon="check" label="Cadastrar" @click="onClick" />
      </q-card-main>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'AddClientes',
}
</script>

<style>
</style>
