const app = Vue.createApp({
  data() {
    return {
      question: [],
      showPopup: false,
    };
  },
  methods: {
    onClick(event) {
      console.log("Click");
      this.showPopup = !this.showPopup;
    },
    selectElement(id, event) {},
    createRandomNumber() {
      return Math.floor(Math.random() * 1000);
    },
  },
  // ...
});
app.mount("#app");
