<template>
    <div>
        <q-list>
            <q-item clickable v-ripple to="/home">
                <q-item-section>Home</q-item-section>
                <q-item-section avatar>
                 <q-avatar size="24px">
                    <img src="statics/037-avatar.png">
                </q-avatar>
                </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/pokemons">
                <q-item-section>Pokemons</q-item-section>
                <q-item-section avatar>
                 <q-avatar size="24px">
                    <img src="statics/056-avatar.png">
                </q-avatar>
                </q-item-section>
            </q-item>

            <q-item clickable v-ripple >
                <q-item-section>App info</q-item-section>
                <q-item-section avatar>
                 <q-avatar size="24px">
                    <img src="statics/017-gaming.png">
                </q-avatar>
                </q-item-section>
            </q-item>
        </q-list>
    </div>
</template>
<script>
export default {
    name:'Navbar'
}
</script>