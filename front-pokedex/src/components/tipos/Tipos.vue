<template>
    <div>
        <span v-if="tipo === 'grass'">
            <q-chip square color="green" text-color="white" >
                {{ tipo }}
            </q-chip>
        </span>
        <span v-if="tipo === 'fire'">
            <q-chip square  color="red" text-color="white" >
                {{ tipo }}
            </q-chip>
        </span>
        <span v-if="tipo === 'water'">
            <q-chip square color="blue" text-color="white">
                {{ tipo }}
            </q-chip>
        </span>
        <span v-if="tipo === 'bug'">
            <q-chip square color="light-green-6" text-color="white">
                {{ tipo }}
            </q-chip>
        </span>
        <span v-if="tipo === 'normal'">
            <q-chip square color="grey" text-color="white">
                {{ tipo }}
            </q-chip>
        </span>
        <span v-if="tipo === 'poison'">
            <q-chip square color="deep-purple-10" text-color="white">
                {{ tipo }}
            </q-chip>
        </span>
        <span v-if="tipo === 'ground'">
            <q-chip square color="brown-5" text-color="white">
                {{ tipo }}
            </q-chip>
        </span>
        <span v-if="tipo === 'flying'">
            <q-chip square color="deep-purple-4" text-color="white">
                {{ tipo }}
            </q-chip>
        </span>
        <span v-if="tipo === 'electric'">
            <q-chip square color="yellow" text-color="white">
                {{ tipo }}
            </q-chip>
        </span>
        <span v-if="tipo === 'rock'">
            <q-chip square color="brown-10" text-color="white">
                {{ tipo }}
            </q-chip>
        </span>
        <span v-if="tipo === 'fighting'">
            <q-chip square color="red-14" text-color="white">
                {{ tipo }}
            </q-chip>
        </span>
        <span v-if="tipo === 'fairy'">
            <q-chip square color="pink" text-color="white">
                {{ tipo }}
            </q-chip>
        </span>
        <span v-if="tipo === 'psychic'">
            <q-chip square color="pink-5" text-color="white">
                {{ tipo }}
            </q-chip>
        </span>
        <span v-if="tipo === 'steel'">
            <q-chip square color="grey" text-color="white">
                {{ tipo }}
            </q-chip>
        </span>
            <span v-if="tipo === 'dragon'">
            <q-chip square color="indigo" text-color="white">
                {{ tipo }}
            </q-chip>
        </span>
        <span v-if="tipo === 'dark'">
            <q-chip square color="grey-10" text-color="white">
                {{ tipo }}
            </q-chip>
        </span>
         <span v-if="tipo === 'ice'">
            <q-chip square  color="cyan" text-color="white">
                {{ tipo }}
            </q-chip>
        </span>
    </div>
</template>
<script>
export default {
    props:[
        'tipo'
    ]
}
</script>