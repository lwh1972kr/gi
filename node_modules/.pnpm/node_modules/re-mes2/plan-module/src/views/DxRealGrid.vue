<template>
  <DxRealGrid :options="options">
  </DxRealGrid>
</template>
<script setup lang="ts">
//import { useI18n } from 'vue-i18n'
//const { t, locale } = useI18n()

import {DxRealGrid} from '@re-mes2/dx-ui-core'
import { customers, type Customer } from '@/data.ts'
//import { useCounterStore } from '@/stores/counter'
import { useAddStore } from '@re-mes2/dx-ui-core'
import { usePlusStore } from '@re-mes2/plan-module'

console.log('kkkdkd')
const addStore = useAddStore();
addStore.increment();
console.log('dd ddd  plan-module>>addStore.count', addStore.count)

const plusStore = usePlusStore();
plusStore.increment();
console.log('kkdkdkdkdkd')
console.log('dd ddd  plan-module>>plusStore.plus', plusStore.plus)

const columns = ['CompanyName', 'City', 'State', 'Phone', 'Fax']
const options = {
  "keyExpr":"ID",
  "columns": columns,
  "dataSource":customers,
  "showBorders": true
}
</script>