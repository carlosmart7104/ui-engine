<template>
  <div>
    <h1>Usando templates y JS</h1>
    <form @submit.prevent="onSubmit">
      <TXInput type="text" label="Usuario" placeholder="@demo" v-model="username"/>
      <TXInput type="date" label="Fecha de nacimiento" v-model="birth"/>
      <TXInput type="number" label="Edad" disabled v-model="age"/>
      <TXInput type="email" label="Correo" placeholder="demo@demo.com" v-model="email"/>
      <TXInput type="password" label="Contraseña" placeholder="password" v-model="password"/>
      <TXInput
        type="checkbox"
        label="Acepto los términos y condiciones"
        v-model="termsAndConditions"
      />
      <button>Acceder</button>
    </form>
    <p>Modelo de datos:</p>
    <pre>{{ this.$data }}</pre>
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
      username: "",
      email: "",
      password: "",
      birth: "2020-06-04",
      age: 20,
      termsAndConditions: false
    };
  },
  methods: {
    onSubmit(e) {
      console.log("onSubmit!");
    }
  }
};
</script>

