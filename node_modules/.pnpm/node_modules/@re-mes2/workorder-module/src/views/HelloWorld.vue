<template>
<h2>WorkOrder Real Grid</h2>
  <DxGrid :options="options">
  </DxGrid>
</template>
<script setup lang="ts">
//import { useI18n } from 'vue-i18n'
//const { t, locale } = useI18n()

import {DxGrid} from '@re-mes2/dx-ui-core'
import { customers, type Customer } from '@/data.ts'

const columns = ['CompanyName', 'City', 'State', 'Phone', 'Fax']
const options = {
  "keyExpr":"ID",
  "columns": columns,
  "dataSource":customers,
  "showBorders": true
}
</script>