<template>
  <div>
    <h1>Componente universal</h1>
    <component :is="component" v-bind="props" v-on="listeners" v-model="props.value"/>
    <p>Modelo de datos</p>
    <pre>
      {{ this.$data }}
    </pre>
  </div>
</template>

<script>
import TXInput from "@/components/TXInput.vue";

export default {
  layout: "base",
  components: {
    TXInput
  },
  data() {
    return {
      component: "TXInput",
      props: {
        type: "text",
        name: "username",
        label: "Usuario",
        value: ""
      }
    };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (e) => console.log("e: ", e)
      }
    }
  }
};
</script>
