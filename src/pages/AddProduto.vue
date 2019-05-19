<template>
  <q-page class="flex flex-center">
    <q-card style="width: 500px;">
      <q-card-title class="bg-amber-5 text-white" align="center">
        Cadastrar Produto
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <q-input v-model="text"  class="on-left q-mt-md" type="text" float-label="Nome"/>
        <q-input v-model="number" prefix="R$" class="on-left q-mt-md" type="number" float-label="Preço" />
        <q-btn color="primary" class="on-left q-mt-lg" icon="check" label="Cadastrar" @click="onClick" />
      </q-card-main>
    </q-card>
      <q-table
      title="Table Title"
      :data="tableData"
      :columns="columns"
      row-key="name"
    />
  </q-page>
</template>

<script>
export default {
   name: 'AddProduto',
   
   
}
</script>

<style>
</style>
