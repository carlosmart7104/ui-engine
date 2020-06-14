<template>
  <UIEngine :layout="layout"/>
</template>

<script>
import UIEngine from "@/components/Engine/UIEngine.vue";

export default {
  components: {
    UIEngine
  },
  data() {
    return {
      layout: {
        children: [
          {
            component: "v-app",
            props: {
              dark: true
            },
            children: [
              {
                component: "v-navigation-drawer",
                props: {
                  fixed: true,
                  clipped: true,
                  drawer: true,
                  value: true
                },
                children: [
                  {
                    component: "v-list",
                    props: {
                      link: true
                    },
                    children: [
                      {
                        component: "v-list-item-action",
                        children: [
                          {
                            component: "v-icon",
                            text: "mdi-home"
                          }
                        ]
                      },
                      {
                        component: "v-list-item-content",
                        children: [
                          {
                            component: "v-list-item-title",
                            text: "Home"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            children: {}
          }
        ]
      }
    };
  }
};
</script>

