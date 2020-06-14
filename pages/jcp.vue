<template>
  <div>
    <h1>Usando JSON como Prop de Componente</h1>
    <p>Modelo de datos</p>
    <TXForm :elements="elements"/>
    <pre>
      {{ this.$data }}
    </pre>
  </div>
</template>

<script>
import TXForm from "@/components/JCP/TXForm.vue";

export default {
  layout: "base",
  components: {
    TXForm
  },
  data() {
    return {
      elements: [
        {
          attributes: {
            type: "text",
            name: "username",
            label: "Usuario",
            placeholder: "@username"
          },
          value: ""
        },
        {
          attributes: {
            type: "date",
            name: "birth",
            label: "Fecha de nacimiento"
          },
          value: "2020-06-04"
        },
        {
          attributes: {
            type: "number",
            name: "age",
            label: "Edad",
            disabled: true
          },
          value: 20
        },
        {
          attributes: {
            type: "email",
            name: "email",
            label: "Correo",
            placeholder: "demo@demo.com"
          },
          value: ""
        },
        {
          attributes: {
            type: "password",
            name: "password",
            label: "Contraseña"
          },
          value: ""
        },
        {
          attributes: {
            type: "checkbox",
            name: "termsAndConditions",
            label: "Acepto los términos y condiciones"
          },
          value: false
        }
      ]
    };
  }
};
</script>

