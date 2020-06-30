import { writable } from 'svelte/store'
import createAuth0Client from '@auth0/auth0-spa-js'
import auth_config from './auth_config.json'

export const user = writable({})
export const token = writable("")
export const is_authenticated = writable(false)
export const auth0Promise = createAuth0Client(auth_config)

export const logout = async () => {
    const auth0 = await auth0Promise    
    auth0.logout({
        returnTo: window.location.origin
    })
}

export const login = async () => {
    const auth0 = await auth0Promise
    await auth0.loginWithRedirect({
        redirect_uri: window.location.origin
    })
}

export async function generateAuth0() {
    const auth0 = await auth0Promise
    const query = window.location.search
    if (query.includes("code=") && query.includes("state=")) {
        await auth0.handleRedirectCallback()
        window.history.replaceState({}, document.title, "/")
    }
    if (await auth0.isAuthenticated()) {
        is_authenticated.set(true)
        user.set(await auth0.getUser())
        token.set(await auth0.getTokenSilently())
    }
}

generateAuth0()