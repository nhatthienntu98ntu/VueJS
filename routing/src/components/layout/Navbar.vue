<template>
  <div>
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <router-link to="/" class="navbar-item">Home</router-link>
            <router-link to="/contact" class="navbar-item">Contact</router-link>
            <router-link to="/about" class="navbar-item">About</router-link>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <a class="button is-primary">
                <strong>Dashboard</strong>
              </a>
              <button class="button is-light">Log in</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style scoped></style>
