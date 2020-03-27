<template>
   <div class="q-pa-md">
    <div class="text-h4 h4 text-secondary q-mb-lg">
        <q-avatar size="24px">
          <img src="statics/038-gaming.png">
        </q-avatar>
        List Pokémons
    </div>

    <q-table
        :data="pokemons"
        :columns="columns"
        row-key="id"
        :loading="loading"
        :filter="filter"
    >    
        <!-- <template v-slot:top>
            <div class="col" />
            <q-btn color="secondary" icon="add" label="new" @click="$router.push({ name: 'membro', params: { id: 0 } })" />
        </template> -->

      <template v-slot:top-right>
        <q-input outlined debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.label }}
          </q-th>
          <q-th auto-width />
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            <span v-if="col.name == 'type_1' || col.name == 'type_2'">
             <tipo :tipo="col.value"/>
            </span>
            <span v-else>{{ col.value }}</span>
            
          </q-td>
          <q-td auto-width>
            <q-btn flat round color="primary" icon="remove_red_eye" @click="buscaPokemon(props.row.id)" />
          </q-td>
        </q-tr>
      </template>
    </q-table>

    <q-dialog v-model="details" persistent transition-show="scale" transition-hide="scale">
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section :class="getColor(pokemon.type_1)">
          <div class="text-h5">#{{ pokemon.id }} {{ pokemon.Name }}</div>
        </q-card-section>
        <q-card-section >
          <div class="row q-pa-md gutter-sm">
            <div class="col-xs-3 col-sm-3 q-pa-md">
              <q-img :src="`statics/pokemons/${pokemon.img}.png`" />
            </div>
            <div class="col-xs-4 col-sm-4">
              <q-list>
                <q-item>
                  <span class="label">Type 1:</span>
                  <q-item-section>
                    <tipo :tipo="pokemon.type_1"/>
                  </q-item-section>
                </q-item>

                <q-item>
                  <span class="label">Type 2:</span>
                  <q-item-section>
                    <tipo :tipo="pokemon.type_2"/>
                  </q-item-section>
                </q-item>

                <q-item>
                   <span class="label">Evolution Stage:</span>
                  <q-item-section>
                    {{ pokemon.evolution_stage}}
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
            <div class="col-xs-4 col-sm-4">
              <q-list>
                <q-item>
                  <span class="label">Generation:</span>
                  <q-item-section>
                    {{ pokemon.Generation }}
                  </q-item-section>
                </q-item>

                <q-item>
                  <span class="label">Evolved:</span>
                  <q-item-section>
                    {{ pokemon.Evolved }}
                  </q-item-section>
                </q-item>

                <q-item>
                  <span class="label">FamilyID:</span>
                  <q-item-section>
                    {{ pokemon.FamilyID }}
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
            <div class="col-xs-1 col-sm-1"></div>
          </div>          
          <q-separator />
          <div class="q pa-md flex flex-center">
            <q-circular-progress
              show-value
              font-size="14px"
              :value="pokemon.ATK"
              size="85px"
              :thickness="0.20"
              color="teal"
              track-color="grey-3"
              class="q-ma-md"
              :max="300"
            >
             <q-icon name="fas fa-fist-raised" class="q-mr-xs" />
              {{ pokemon.ATK }}
            </q-circular-progress>
            
            <q-circular-progress
              show-value
              font-size="14px"
              :value="pokemon.DEF"
              size="85px"
              :thickness="0.20"
              color="blue"
              track-color="grey-3"
              class="q-ma-md"
              :max="300"
            >
             <q-icon name="fas fa-shield-alt" class="q-mr-xs" />
              {{ pokemon.DEF }}
            </q-circular-progress>

            <q-circular-progress
              show-value
              font-size="14px"
              :value="pokemon.STA"
              size="85px"
              :thickness="0.20"
              color="orange"
              track-color="grey-3"
              class="q-ma-md"
              :max="300"
            >
             <q-icon name="fas fa-running" class="q-mr-xs" />
              {{ pokemon.STA }}
            </q-circular-progress>

            <q-circular-progress
              show-value
              font-size="14px"
              :value="pokemon.TOTAL"
              size="85px"
              :thickness="0.20"
              color="red"
              track-color="grey-3"
              class="q-ma-md"
              :max="1000"
            >
             <q-icon name="bookmarks" class="q-mr-xs" />
              {{ pokemon.TOTAL }}
            </q-circular-progress>
          </div>

          <div class="row q-pa-md gutter-sm">
            <div class="col-xs-4 col-sm-4">
              <q-list>
                <q-item>
                  <span class="label">Legendary:</span>
                  <q-item-section>
                    {{ pokemon.Legendary }}
                  </q-item-section>
                </q-item>

                <q-item>
                  <span class="label">Aquireable:</span>
                  <q-item-section>
                    {{ pokemon.Aquireable }}
                  </q-item-section>
                </q-item>

                <q-item>
                  <span class="label">Spawns:</span>
                  <q-item-section>
                    {{ pokemon.Spawns }}
                  </q-item-section>
                </q-item>

                 <q-item>
                  <span class="label">Regional:</span>
                  <q-item-section>
                    {{ pokemon.Regional }}
                  </q-item-section>
                </q-item>
              </q-list>
            </div>

            <div class="col-xs-4 col-sm-4">
              <q-list>
                <q-item>
                  <span class="label">Raidable:</span>
                  <q-item-section>
                    {{ pokemon.Raidable }}
                  </q-item-section>
                </q-item>

                <q-item>
                  <span class="label">Hatchable:</span>
                  <q-item-section>
                    {{ pokemon.Hatchable }}
                  </q-item-section>
                </q-item>

                <q-item>
                  <span class="label">Shiny:</span>
                  <q-item-section>
                    {{ pokemon.Shiny }}
                  </q-item-section>
                </q-item>

                 <q-item>
                  <span class="label">Nest:</span>
                  <q-item-section>
                    {{ pokemon.Nest }}
                  </q-item-section>
                </q-item>
              </q-list>
            </div>

            <div class="col-xs-4 col-sm-4">
              <q-list>
                <q-item>
                  <span class="label">New:</span>
                  <q-item-section>
                    {{ pokemon.New }}
                  </q-item-section>
                </q-item>

                <q-item>
                  <span class="label">Not Gettable:</span>
                  <q-item-section>
                    {{ pokemon.Not_Gettable }}
                  </q-item-section>
                </q-item>

                <q-item>
                  <span class="label">Future Evolve:</span>
                  <q-item-section>
                    {{ pokemon.Future_Evolve }}
                  </q-item-section>
                </q-item>

                <q-item>
                  <span class="label">CP 40:</span>
                  <q-item-section>
                    {{ pokemon.CP_40 }}
                  </q-item-section>
                </q-item>

                <q-item>
                  <span class="label">CP 39:</span>
                  <q-item-section>
                    {{ pokemon.CP_39 }}
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-black">
          <q-btn flat label="Fechar" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
import Tipo from '../../components/tipos/Tipos'
export default {
  data () {
    return {
        value: 150,
        filter: '',
        loading: false,
        pokemon:{},
        columns: [
            {
                name: 'id',
                required: true,
                label: '#',
                align: 'left',
                field: 'id',
                sortable: true,
            },
            { 
                name: 'Name', 
                align: 'left', 
                label: 'Name', 
                field: row => row.Name,
                format: val => `${val}`, 
                sortable: true 
            },
            { 
                name: 'type_1', 
                align: 'left',
                label: 'Type 1', 
                field: row => row.type_1,
                sortable: true 
            },
            { 
                name: 'type_2', 
                align: 'left',
                label: 'Type 2', 
                field: row => row.type_2, 
                sortable: true 
            },
            { 
                name: 'ATK', 
                align: 'left',
                label: 'ATK', 
                field: row => row.ATK, 
                sortable: true 
            },
            { 
                name: 'DEF', 
                align: 'left',
                label: 'DEF', 
                field: row => row.DEF, 
                sortable: true 
            },
            { 
                name: 'STA', 
                align: 'left',
                label: 'STA', 
                field: row => row.STA, 
                sortable: true 
            }, 
        ],
        action_id: '',
        details: false
    }
  },
  components:{
    tipo: Tipo
  },
  computed: {
      ...mapState("pokemons", ["pokemons"])
  },
  methods: {
    ...mapActions("pokemons", ["getPokemons"]),
    // confirmRemove(id) {
    //     this.action_id = id
    //     this.confirm_remove = true
    // },
    // removeItem() {
    //     this.deleteMembros(this.action_id)        
    //     this.confirm_remove = false
    //     this.getMembros()
    // },

    buscaPokemon(id){
      let pokemons =  this.pokemons
      for (var j=0; j < pokemons.length; ++j) {
        if (pokemons[j].id == id) {
            this.pokemon = pokemons[j]
        }
      }
      
      this.details = true
    },
    getColor(type){
      if(type === 'grass') return 'bg-teal text-white'
      if(type === 'fire') return 'bg-red text-white'
      if(type === 'water') return 'bg-blue text-white'
      if(type === 'normal') return 'bg-grey'
      if(type === 'bug') return 'bg-light-green-6 text-white'
      if(type === 'poison') return 'bg-deep-purple-10 text-white'
      if(type === 'ground') return 'bg-brown-5 text-white'
      if(type === 'flying') return 'bg-deep-purple-4 text-white'
      if(type === 'electric') return 'bg-yellow text-white'
      else return ''
    }
  },
  created() {
    this.getPokemons({
      pagination: this.pagination,
      filter: undefined
    })
  },
}
</script>
<style lang="stylus" scoped>
.label
  font-weight 500
  padding-top 6px
  padding-right 8px
</style>