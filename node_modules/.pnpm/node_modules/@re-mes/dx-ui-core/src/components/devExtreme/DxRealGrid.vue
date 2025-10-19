<template>
    <div style="width: 1000px; height: 400px">
        <RealGridVue
            ref="realgrid"
            :rows="[
                { field1: '컬럼1데이터', field2: '컬럼2데이터' },
                { field1: '컬럼1데이터', field2: '컬럼2데이터' },
            ]"
            :auto-generate-field="true">
            <RGDataColumn field-name="field1" :width="100" key="field1"></RGDataColumn>
            <RGDataColumn field-name="field2" :width="100" key="field2"></RGDataColumn>
        </RealGridVue>
    </div>
  </template>


<script setup lang="ts">
import RealGrid from "realgrid";
RealGrid.setLicenseKey("upVcPE+wPOmtLjqyBIh9RkM/nBOseBrflwxYpzGZyYm9cY8amGDkiHqyYT2U1Yh3Dufv8SUhNy4rAv6JxB26d2Se3PbBoyaMTrNJVrXXgD16/5L6Iw7glkVBdZjN8HfvkxValpjT3ck=");
import { RealGridVue, RGDataColumn, RGDataField } from "realgrid-vue";
import { ref } from "vue";
 
const realgrid = ref<RealGridVue>(null);


defineProps([
  'options'
])
</script>