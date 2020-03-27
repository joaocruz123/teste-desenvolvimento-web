<template>
  <q-page class="flex flex-center">
        <div class="box">
            <div class="row q-pa-xl gutter-sm">
                <div class="col-xs-2 col-sm-2"></div>
                <div class="col-xs-8 col-sm-8">
                   <q-img src="statics/logo_myPokedexz.png" />
                </div>
                <div class="col-xs-2 col-sm-2"></div>
                <div class="col-xs-4 col-sm-4"></div>
                <div class="col-xs-4 col-sm-4">
                    <q-btn push  class="full-width" label="Acessar Pokédex" color="secondary" @click="acesso()"/>
                </div>
                <div class="col-xs-4 col-sm-4"></div>   
            </div>
        </div>
  </q-page>       
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        acesso(){
            this.$router.push({ path: 'home'})
        }
    },
}
</script>
<style lang="stylus" scoped>
.box
    width 600px
    height 440px
    border-radius 4px;
</style>