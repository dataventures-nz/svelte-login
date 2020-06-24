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
            updateUI() //force rerender
        }
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

    generateAuth0(() => {auth0Promise = auth0Promise})
</script>

<div>
    {#await auth0Promise}
        <p>initalising auth0</p>
    {:then client}
        {#await client.isAuthenticated()}
            awaiting authentication information
            {:then isAuthenticated}
                {#if isAuthenticated}
                    {#await client.getUser()}
                        nothing
                        {:then user}
                        <img id="#userpic" alt="user" src={user.picture} on:click={logout} />
                        {JSON.stringify(user)}
                    {/await}
                    {#await client.getTokenSilently()}
                        nothing
                        {:then token}
                        {token}
                    {/await}
                {:else}
                    <button id="btn-login" on:click="{login}">Log in</button>
                {/if}
            {:catch error}
            <p style="color: red">can't determine if authenticated because {error.message}</p>
        {/await}
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</div>
