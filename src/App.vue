<script setup lang="ts">
// import { RouterLink } from 'vue-router'

</script>

<template>
  <nav>
    <ul>
      <li>
        <router-link tag="li" to="/components"><strong>Components</strong>
        </router-link>
        <summary>
          Vue Komponenten, die einige PrimeVue and Native Komponenten behinhaltet
        </summary>
      </li>
      <li>
        <router-link tag="li" to="/webcomponents"><strong>Web Component</strong>
        </router-link>
        <summary>
          Obige Komponente eingebetet in einer Web Komponente
        </summary>
      </li>
    </ul>
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  margin: 2em;
  padding: 2em;
  border: 1rem solid rgb(6, 6, 77);
}

li {
  margin-top: 1rem;
}

nav {
  margin-left: 1rem;
}
</style>
