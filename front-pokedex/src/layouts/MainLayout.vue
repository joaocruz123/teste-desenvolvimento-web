<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="statics/ms-icon-150x150.png">
          </q-avatar>
          MyPokedex
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <navbar/>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  data () {
    return {
      left: false
    }
  },
  components: {
    navbar: Navbar
  }
}
</script>