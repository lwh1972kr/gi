<template>
  <DxButton
              :width="120"
              text="Contained"
              type="success"
              styling-mode="contained"
              @click="onClick($event)"
            />
  <DxDiagram
    id="diagram"
    ref="diagram"
             @itemClick="onItemClick"
             @itemDblClick="onItemDblClick"
  >
    <DxNodes
      :data-source="flowNodesDataSource"
      :text-expr="'text'"
      :type-expr="'type'"
    >
      <DxAutoLayout :type="'layered'"/>
    </DxNodes>
    <DxEdges 
      :data-source="flowEdgesDataSource"
      :text-expr="'text'"
      :from-expr="'fromId'"
      :to-expr="'toId'"
    />
    <DxToolbox>
      <DxGroup
        :category="'general'"
        :title="'General'"
      />
    </DxToolbox>
  </DxDiagram>
      <DxPopup
      :visible="popupVisible"
      :closeOnOutsideClick="true"
      :dragEnabled="true"
      :showTitle="true"
      title="Node Details"
      @hiding="onPopupHiding"
    >
      <div>
        <p><strong>Node ID:</strong> {{ selectedNode?.id }}</p>
        <p><strong>Node Text:</strong> {{ selectedNode?.text }}</p>
      </div>
    </DxPopup>
</template>
<script setup lang="ts">
import {
  DxDiagram, DxNodes, DxAutoLayout, DxEdges, DxToolbox, DxGroup,
} from 'devextreme-vue/diagram';
  import DxButton, { type DxButtonTypes } from 'devextreme-vue/button';
import { ArrayStore } from 'devextreme-vue/common/data';
import service from './data.ts';
import { ref, onMounted } from 'vue';
  import { DxPopup } from "devextreme-vue/popup";
  
  const popupVisible = ref(false);
  const selectedNode = ref(null);
const flowNodesDataSource = new ArrayStore({
  key: 'id',
  data: service.getFlowNodes(),
});
const flowEdgesDataSource = new ArrayStore({
  key: 'id',
  data: service.getFlowEdges(),
});
  const diagram = ref(null);
 // console.log('getEdgeDataSource()', getEdgeDataSource())
  onMounted(() => {
console.log(diagram.value?.instance.getNodeDataSource()); // Outputs the DOM node
});
  
  function onItemClick(e) {
    console.log('onItemClick', e)
  }
  function onItemDblClick(e: ItemDblClickEvent) {
    console.log(e)
    selectedNode.value = e.item.data;
        popupVisible.value = true;
  }
  function onClick(e: DxButtonTypes.ClickEvent) {
  	console.log(diagram.value?.instance.getNodeDataSource()); // Outputs the DOM node
}
//let element = document.getElementById("diagram");
//let instance = DxDiagram.getInstance(element) as Diagram;
  //console.log('getEdgeDataSource()', getEdgeDataSource())
  
</script>
<style scoped>
    #diagram {
      height: 725px;
    }
</style>
