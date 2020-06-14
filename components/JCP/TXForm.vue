<template>
  <form @submit.prevent="onSubmit">
    <TXInput
      v-for="(element, e) in elementsList"
      :key="e"
      v-bind="element.attributes"
      v-on="listeners(element)"
      v-model="element.value"
    />
    <button>Acceder</button>
  </form>
</template>

<script>
import TXInput from "@/components/TXInput.vue";

export default {
  components: {
    TXInput
  },
  props: {
    elements: {
      type: Array, // No se puede saber que entrará, complicando la validación.
      default: null
    }
  },
  data() {
    return {
      elementsList: []
    };
  },
  created() {
    this.elementsList = this.elements;
  },
  methods: {
    listeners(el) {
      return {
        ...el.listeners,
        input: event =>
          this.$emit("input", {
            name: el.attributes.name || "unknown",
            value: el.value
          })
      };
    },
    onSubmit() {
      console.log("onSubmit!!!");
      this.$emit("submit", this.elementsList);
    }
  }
};
</script>
