import { locStub } from "@vue/compiler-core";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritosStore = defineStore("favoritos", () => {
  const favoritos = ref([]);
    if(localStorage.getItem("favoritos")){
        favoritos.value = JSON.parse(localStorage.getItem("favoritos"))
    }
  const add = (pokemon) => {
    favoritos.value.push(pokemon);
    localStorage.setItem("favoritos", JSON.stringify(favoritos.value));
  };

  const remove = (id) => {
    favoritos.value = favoritos.value.filter((pokemon) => id !== pokemon.id);
    localStorage.setItem("favoritos", JSON.stringify(favoritos.value))
  };

  const find = (name) =>
    favoritos.value.find((pokemon) => name === pokemon.name);

  return {
    favoritos,
    add,
    remove,
    find,
  };
});
