<script>
    import {auth0Promise, is_authenticated, user, login, logout, generateAuth0} from './security.js'
</script>

<style type="text/scss">
	@import 'scss/style.scss';
</style>

<div class="navbar-item has-dropdown is-hoverable">
    {#await auth0Promise}
        <a class="navbar-link is-arrowless navbar-link-icon" href="#!">
            <img src="./svg/profile-icon.svg" alt="profile icon" id = userpic class="navbar-item-icon" on:click={login}>
        </a>
    {:then}
        {#if $is_authenticated}
            <a class="navbar-link is-arrowless navbar-link-icon" href="#!">
                <img src={$user.picture} alt="profile icon" id = userpic class="navbar-item-icon">
            </a>
            <div class="navbar-dropdown is-boxed is-right">
                <h2 class="nav-mobile-heading">Account</h2>
                <a class="navbar-item account-details" href="#!">
                    <div>
                        <p id="account-user-name" class="account-user-name">{$user.nickname}</p>
                        <p id="account-email" class="account-email">{$user.email}</p>
                    </div>
                </a>
                <hr class="navbar-divider">
                <a id ="btn-logout" class="navbar-item navbar-item-mobile" href="#!" on:click={logout}>
                    <div class="nav-item-dropdown-icon"><i class="fas fa-sign-out-alt"></i></div>
                    <p>Sign out</p>
                </a>
            </div>
        {:else}
            <a class="navbar-link is-arrowless navbar-link-icon" href="#!">
                <img src="./svg/profile-icon.svg" alt="profile icon" id = userpic class="navbar-item-icon" on:click={login}>
            </a>
        {/if}
    {/await}
</div>