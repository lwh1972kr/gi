<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'

import { useCounterStore } from  '@re-mes2/dx-ui-core'
//import { useCounterStore as cs } from  '@re-mes2/plan-module'
//import { useCounterStore as ds } from  '@/stores/counter'

//const counterStore = useCounterStore(); 
//counterStore.increment();
//const cc = cs(); 
//cc.increment();

//const dd = ds(); 
//dd.increment();
//console.log('WBE >>counterStore.count', counterStore.count, 'plan-module counterStore>', cc.count)


</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
