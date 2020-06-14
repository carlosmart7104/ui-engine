export class UIEngine {
  constructor(Vue, app) {
    this.Vue = Vue;
    this.app = app;
  }

  setLayout(layout) {
    this.layout = layout;
  }

  setData(data) {
    this.data = data;
  }
}

export default {
  UIEngine
};
