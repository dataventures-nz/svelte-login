<script>
    import Login from "./Login.svelte"

    // bulma needs help with js stuff.
    let active=false

    function toggle_active() {
        active = !active
    }
</script>

<style type="text/scss">
	@import 'scss/style.scss';
</style>

<nav class="navbar main-navigation" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item nav-logo" href="https://dataventures.nz/index.html">
      <img src="https://assets.population-density.dataventures.nz/img/DV-logo-Horizontal-reverse.svg" role="presentation" class="sc-kjoXOD hpTAeq" alt="Data Ventures logo" width="170">
    </a>

    <div role="button" class="navbar-burger burger" class:is-active={active} aria-label="menu" aria-expanded="false" on:click={toggle_active}>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </div>
  </div>

  <div class="navbar-menu" class:is-active={active}>
    <div class="navbar-end">
      <div class="navbar-item">
        <Login></Login>
      </div>
    </div>
  </div>
</nav>