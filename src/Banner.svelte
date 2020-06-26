<script>
    import Login from "./Login.svelte"

    // bulma needs help with js stuff.
    let active=false

    function toggle_active() {
        active = !active
    }
</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <!-- <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a> -->

    <a role="button" class="navbar-burger burger" class:is-active={active} aria-label="menu" aria-expanded="false" on:click={toggle_active}>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div class="navbar-menu" class:is-active={active}>
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <Login></Login>
<!-- 
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div> -->
      </div>
    </div>
  </div>
</nav>

<div>
login:

</div>