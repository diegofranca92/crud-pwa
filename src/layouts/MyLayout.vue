<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      
      <q-toolbar color="secondary">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Sistema de Vendas
          <span slot="subtitle">
            
          </span>
        </q-toolbar-title>
        
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-teal-5' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
        
      >
        <q-item to="/" class="text-white">
          <q-item-side class="text-white" icon="home" />
          <q-item-main label="Inicio" class="text-white" />
        </q-item>

        <q-list-header class="q-headline text-weight-medium text-white">Cadastro</q-list-header>
        <q-item to="addProdutos" class="text-white">
          <q-item-side class="text-white" icon="add_shopping_cart" />
          <q-item-main label="Produtos" sublabel="Adicionar Produtos" />
        </q-item>
        <q-item to="addClientes" class="text-white">
          <q-item-side class="text-white" icon="assignment_ind" />
          <q-item-main label="Clientes" sublabel="Adicionar Clientes" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  }
}
</script>

<style>
</style>
