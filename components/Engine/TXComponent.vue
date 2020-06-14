<template>
  <div>
    <div v-for="(el, e) in elements" :key="e">
      <component :is="el.component" v-bind="el.props" v-on="listeners" v-model="el.props.value"/>
    </div>
  </div>
</template>

<script>
import TXInput from "@/components/TXInput.vue";

export default {
  components: {
    TXInput
  },
  props: {
    elements: {
      type: Array
    }
  },
  computed: {
    listeners() {
      return {
        input: e => console.log("input", e)
      };
    }
  }
};
</script>

