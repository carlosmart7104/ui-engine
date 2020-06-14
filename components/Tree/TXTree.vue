<template>
  <div class="tree">
    <ul class="tree-list">
      <TXNodeTree :node="treeData"/>
    </ul>
  </div>
</template>

<script>
import TXNodeTree from "@/components/Tree/TXNodeTree.vue";

export default {
  props: {
    treeData: Object
  },
  components: {
    TXNodeTree
  }
};
</script>

<style>
.tree-list ul {
  padding-left: 16px;
  margin: 6px 0;
}
</style>