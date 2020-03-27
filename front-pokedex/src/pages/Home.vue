<template>
  <q-page padding>
    <div class="text-h4 h4 text-primary">
      Dashboard    
    </div>

    <!-- <q-separator /> -->
    
    <div class="q-pa-md">
    <div class="row">
      <div class="col-xl-8 col-sm-8">
         <q-banner class="bg-secondary text-white">
            Welcome to pokedex, access the menu to find the pokemons. In the search you can enter the name or type to do your search
          <!-- <template v-slot:action>
            <q-btn flat color="white" label="Dismiss" />
            <q-btn flat color="white" label="Update Credit Card" />
          </template> -->
        </q-banner>
      </div>
      <div class="col-xl-4 col-sm-4">
        <div class="text-h5 h5 text-black q-mb-sm text-center text-weight-thin">
          Most relevant    
        </div>

         <q-carousel
            animated
            v-model="slide"
            :control-type="controlType"
            control-color="red"
            arrows
            navigation
            autoplay
            infinite
            height="340px"
          >
            <q-carousel-slide :name="1" img-src="statics/pokemons/150.png" />
            <q-carousel-slide :name="2" img-src="statics/pokemons/249.png" />
            <q-carousel-slide :name="23" img-src="statics/pokemons/251.png" />
          </q-carousel>
        
      </div>
    </div>
    
  </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',

  data() {
    return {
      slide: 1,
      controlType: 'flat',
    }
  },
}
</script>
