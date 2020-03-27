
<template>
  <q-layout view="lHh Lpr lFf"  class="background">

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" scoped>
.background
  background #fa3950
</style>