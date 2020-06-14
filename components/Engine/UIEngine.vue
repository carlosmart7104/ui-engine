<template>
  <div class="ui-engine">
    <TXTree :treeData="layout"/>
  </div>
</template>

<script>
import TXTree from "@/components/Engine/Tree/TXTree.vue";

export default {
  components: {
    TXTree
  },
  props: {
    layout: {
      type: Object
    }
  }
};
</script>
