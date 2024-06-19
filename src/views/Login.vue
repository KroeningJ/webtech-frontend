<template>
  <div>
    <h6>Login</h6>
    <form @submit.prevent="submitForm">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username">
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password">
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submitForm () {
      console.log('Submitting form') // log when the form is submitted
      axios.post(`${process.env.VUE_APP_BACKEND_BASE_URL}/api/v1/login`, {
        username: this.username,
        password: this.password
      })
        .then(response => {
          // handle successful login
          this.$router.push({ name: 'Home' }) // navigate to Home view
        })
        .catch(error => {
          // handle error
          console.log(error)
          this.errorMessage = 'Login failed. Please check your username and password.'
        })
    }
  }
}
</script>

<style scoped>
#container {
  height: 400px;
  width: 400px;
  position: relative;
}
#image {
  position: absolute;
  left: 0;
  top: 0;
}
#text {
  z-index: 100;
  position: absolute;
  color: black;
  font-size: 24px;
  font-weight: bold;
  left: 150px;
  top: 350px;
}

</style>
