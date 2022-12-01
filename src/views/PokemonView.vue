<template>
  <div>
    <p v-if="loading">Cargando informacion...</p>
    <div v-if="data">
      <img :src="data.sprites?.front_default" alt="" />
      <h1>Pokemon: {{ $route.params.namePoke }}</h1>
    </div>
    <div v-if="error" class="alert alert-danger">No existe pokemon</div>
    <button @click="back()" class="btn btn-outline-primary">Volver</button>
  </div>
</template>
<script setup>
//import { ref } from "@vue/reactivity";
//import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import { useGetData } from "../composables/getData";
const route = useRoute();
const router = useRouter();
const { data, getData, loading, error } = useGetData();
// const pokemon = ref({});
// const getData = async () => {
//   try {
//     const { data } = await axios.get(
//       `https://pokeapi.co/api/v2/pokemon/${route.params.namePoke}`
//     );
//     pokemon.value = data;
//   } catch (error) {
//     console.log(error);
//     pokemon.value = null;
//   }
// };
getData(`https://pokeapi.co/api/v2/pokemon/${route.params.namePoke}`);
const back = () => {
  router.push("/pokemons");
};
</script>
