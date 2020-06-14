<template>
  <span>
    <component v-if="node.component" :is="node.component" v-bind="node.props">
      {{ node.text }}
      <span v-if="!node.text && node.children && node.children.length">
        <node v-for="(child, c) in node.children" :key="c" :node="child"></node>
      </span>
    </component>
    <node
      v-else-if="node.children && node.children.length"
      v-for="(child, c) in node.children"
      :key="c"
      :node="child"
    ></node>
  </span>
</template>

<script>
import TXInput from "@/components/TXInput.vue";

export default {
  name: "node",
  components: {
    TXInput
  },
  props: {
    node: Object
  }
};
</script>