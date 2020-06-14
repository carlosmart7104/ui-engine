<template>
  <div class="tx-input">
    <label>{{ label }}</label>
    <input v-bind="$attrs" v-on="listeners" v-model="val">
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String | Number,
      default: null
    },
    value: {
      type: String | Number | Boolean | Date,
      default: null
    }
  },
  data() {
    return {
      val: null
    };
  },
  created() {
    this.val = this.value;
  },
  watch: {
    value(val) {
      this.val = val;
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit("input", this.val)
      };
    }
  }
};
</script>

<style lang="css" scoped>
.tx-input {
  margin-top: 0.75rem;
}
label {
  display: block;
}
</style>

