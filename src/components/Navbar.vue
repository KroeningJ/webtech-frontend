<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Notes 4.0</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/" style="color: #365c24;">Home</router-link>
          <router-link class="nav-link" to="/notes" style="color: #365c24;">Notes</router-link>
          <router-link class="nav-link" to="/new-note" style="color: #365c24;">New Note</router-link>
        </div>
        <div class="navbar-nav gap-xxl-5">
          <router-link class="nav-link" to="/login" style="color: #365c24;">Login</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
</style>
