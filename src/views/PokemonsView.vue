<template>
  <div class="mt-3">
    <p v-if="loading">Cargando informacion...</p>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <div v-if="data">
      <ul class="list-group">
        <li v-for="(pokemon, index) in data.results" :key="index" class="list-group-item list-group-item-action">
          <router-link :to="`/pokemons/${pokemon.name}`">
            {{ pokemon.name }}
          </router-link>
        </li>
      </ul>
     <div class="mt-2">
        <button
          class="btn btn-primary me-2"
          @click="getData(data.previous)"
          :disabled="!data.previous"
        >
          Previous
        </button>
        <button
          class="btn btn-primary"
          @click="getData(data.next)"
          :disabled="!data.next"
        >
          Next
        </button>
     </div>
    </div>
  </div>
</template>
<!---------------------------------------- Metodo composable useGetData ------------------------------>
<script setup>
import { RouterLink } from "vue-router";
import { useGetData } from "@/composables/getData";
const { data, getData, loading, error } = useGetData();
getData("https://pokeapi.co/api/v2/pokemon/");
</script>

<!-- ---------------------------------Metodo mas tradicional------------------------------------- -->
<!-- <template>
  <ul>
    <li v-for="(pokemon, index) in pokemons" :key="index">
      <router-link :to="`/pokemons/${pokemon.name}`">
        {{ pokemon.name }}
      </router-link>
    </li>
  </ul>
</template> -->

<!-- <script setup>
import axios from "axios";
import { ref } from "vue";

const pokemons = ref([]);

const getData = async () => {
  try {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/"); //destructuramos data con las llaves
    // console.log(data.results)
    pokemons.value = data.results;
  } catch (error) {
    console.log(error);
  }
};
getData();
</script> -->
