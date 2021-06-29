<template>
  <div class="header">
    <div class="container">
      <div class="header-holder">
        <img src="../../assets/logo.png" alt="Jumbo logo" class="logo">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>

<style lang="scss" scoped>
@import "../../styles/_variables.scss";

  .header {
    padding: 1.2rem 1rem;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background-color: white;
    border-bottom: 1px solid $gray;
    .header-holder {
      display: flex;
      align-items: center;
    }
    .logo {
      max-width: 10rem;
    }
  }
</style>
