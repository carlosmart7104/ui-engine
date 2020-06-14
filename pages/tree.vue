<template>
  <div>
    <h1>Componente recursivo</h1>
    <TXTree :treeData="tree"/>
    <p>Modelo de datos</p>
    <pre>
      {{ this.$data }}
    </pre>
  </div>
</template>

<script>
import TXTree from "@/components/Tree/TXTree.vue";

export default {
  layout: "base",
  components: {
    TXTree
  },
  data() {
    return {
      tree: {
        label: "root",
        children: [
          {
            label: "a1",
            children: [
              {
                label: "a2",
                children: [
                  {
                    label: "a3"
                  },
                  {
                    label: "b3"
                  }
                ]
              },
              {
                label: "b2"
              }
            ]
          },
          {
            label: "b1",
            children: [
              {
                label: "a2"
              },
              {
                label: "b2"
              }
            ]
          },
          {
            label: "c1"
          }
        ]
      }
    };
  }
};
</script>

