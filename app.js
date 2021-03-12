const app = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      gender: "male",
      photo: "https://randomuser.me/api/portraits/men/7.jpg"
    }
  },
  methods: {
    async getPerson() {
      const res = await fetch("https://randomuser.me/api")
      const {results} = await res.json()

      this.firstName = results[0].name.first
      this.lastName = results[0].name.last
      this.gender = results[0].gender
      this.photo = results[0].picture.large
    }
  }
})

app.mount("#app")