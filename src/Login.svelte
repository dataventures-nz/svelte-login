<script>
    import createAuth0Client from '@auth0/auth0-spa-js';
    import auth_config from './auth_config.json'

    export var auth0

    let auth0Promise = createAuth0Client(auth_config);

    async function generateAuth0(updateUI) {
        auth0 = await auth0Promise
        const query = window.location.search;
        if (query.includes("code=") && query.includes("state=")) {
            await auth0.handleRedirectCallback();
            window.history.replaceState({}, document.title, "/");
        }
        updateUI() //force rerender
    }

    export const logout = async () => {
        auth0.logout({
            returnTo: window.location.origin
        });
    };

    export const login = async () => {
        await auth0.loginWithRedirect({
            redirect_uri: window.location.origin
        });
    };

    export let user = null

    generateAuth0(async () => {
        let isAuthenticated = await auth0.isAuthenticated()
        user = isAuthenticated? await auth0.getUser() : null
    })
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
        {#if user===null}
            <a class="navbar-link is-arrowless navbar-link-icon" href="#!">
                <img src="./svg/profile-icon.svg" alt="profile icon" id = userpic class="navbar-item-icon" on:click={login}>
            </a>
        {:else}
            <a class="navbar-link is-arrowless navbar-link-icon" href="#!">
                <img src={user.picture} alt="profile icon" id = userpic class="navbar-item-icon">
            </a>
            <div class="navbar-dropdown is-boxed is-right">
                <h2 class="nav-mobile-heading">Account</h2>
                <a class="navbar-item account-details" href="#!">
                    <div>
                        <p id="account-user-name" class="account-user-name">{user.nickname}</p>
                        <p id="account-email" class="account-email">{user.email}</p>
                    </div>
                </a>
                <hr class="navbar-divider">
                <a id ="btn-logout" class="navbar-item navbar-item-mobile" href="#" on:click={logout}>
                    <div class="nav-item-dropdown-icon"><i class="fas fa-sign-out-alt"></i></div>
                    <p>Sign out</p>
                </a>
            </div>
        {/if}
    {/await}
</div>