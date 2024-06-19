<template>
  <form @submit.prevent="submitForm">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <input v-model="email" type="email" class="form-control" placeholder="Email" required>

    <input v-model="password" type="password" class="form-control" placeholder="Password" required>

    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submitForm () {
      axios.post(`${process.env.VUE_APP_BACKEND_BASE_URL}/api/v1/login`, {
        email: this.email,
        password: this.password
      }, {
        withCredentials: true
      })
        .then(response => {
          // handle successful login
          this.$router.push({ name: 'Home' }) // navigate to Home view
        })
        .catch(error => {
          // handle error
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>
