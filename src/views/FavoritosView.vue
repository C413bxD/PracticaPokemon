<script setup>
import {useFavoritosStore} from "@/store/favoritos.js"
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";
const useFavoritos=useFavoritosStore();

const {favoritos} = storeToRefs(useFavoritos)
const {remove}=useFavoritos
</script>
<template>
    <h1>Favoritos</h1>
    <p v-if="favoritos.length === 0">Sin favoritos</p>
    <ul class="list-group" v-else>
        <li class="list-group-item" v-for="pokemon in favoritos" :key="pokemon.id">
            <div>{{pokemon.name}}</div>
            <button @click="remove(pokemon.id)" class="btn btn-outline-danger me-2">eliminar</button>
            <router-link class="btn btn-outline-primary" :to="`/pokemons/${pokemon.name}`">Ver mas...</router-link>
        </li>
    </ul>
</template>