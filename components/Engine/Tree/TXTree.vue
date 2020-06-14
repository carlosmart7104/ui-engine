<template>
  <TXNodeTree :node="treeData"/>
</template>

<script>
import TXNodeTree from "@/components/Engine/Tree/TXNodeTree.vue";

export default {
  props: {
    treeData: Object
  },
  components: {
    TXNodeTree
  }
};
</script>
