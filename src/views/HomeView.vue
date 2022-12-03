<script setup>
import { useCounterStore } from "@/store/counter.js";
import { storeToRefs } from "pinia";
const useCounter = useCounterStore();
const {increment} = useCounter
const {count, double} = storeToRefs(useCounter)
</script>

<template>
  <div>
    <h1>Prueba de contador: {{ count }}</h1>
    <h1>Doble: {{ double }}</h1>
    <button @click="increment">increment</button>
  </div>
</template>
