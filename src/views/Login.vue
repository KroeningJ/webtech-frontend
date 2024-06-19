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
form {
  max-width: 400px;
  margin: auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

h1 {
  margin-bottom: 1.5rem;
  font-weight: normal;
  text-align: center;
}

input {
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 3px;
  background-color: #365c24;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #2b481b;
}

button:focus {
  outline: none;
}

.w-100 {
  width: 100%;
}
</style>
