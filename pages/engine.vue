<template>
  <div class="engine">
    <h1>Usando un componente universal recursivamente.</h1>
    <UIEngine :layout="layout"/>
    <p>Modelo de datos:</p>
    <pre>{{ this.$data }}</pre>
  </div>
</template>

<script>
import UIEngine from "@/components/Engine/UIEngine.vue";

export default {
  layout: "base",
  components: {
    UIEngine
  },
  data() {
    return {
      layout: {
        children: [
          {
            component: "TXInput",
            props: {
              type: "text",
              name: "username",
              label: "Usuario",
              placeholder: "@username",
              value: ""
            }
          },
          {
            children: [
              {
                component: "TXInput",
                props: {
                  type: "date",
                  name: "birth",
                  label: "Fecha de nacimiento",
                  value: "2020-04-06"
                }
              },
              {
                children: [
                  {
                    component: "TXInput",
                    props: {
                      type: "number",
                      name: "age",
                      label: "Edad",
                      value: 20,
                      disabled: true
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    };
  }
};
</script>

