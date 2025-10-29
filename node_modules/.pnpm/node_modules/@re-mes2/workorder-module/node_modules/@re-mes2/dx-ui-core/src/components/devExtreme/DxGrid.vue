<template>
  <DxDataGrid
    :columns="options.columns"
    :show-borders="options.showBorders"
    :data-source="options.dataSource"
    :key-expr="options.keyExpr"
  />
</template>
<script setup lang="ts">
import DxDataGrid from 'devextreme-vue/data-grid';
defineProps([
  'options'
])
</script>