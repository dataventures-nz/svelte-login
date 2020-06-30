<script>
	import {is_authenticated, token} from './security.js' 
	import Banner from './Banner.svelte'
</script>

<style type="text/scss">
	@import 'scss/style.scss';
</style>

<svelte:body/>

<main>
	<Banner></Banner>
	<section class="section">
		<div class="container">
			<h1 class="title">Section</h1>
			<h2 class="subtitle">
				A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
			</h2>
			<div>you {#if $is_authenticated}are{:else}are not{/if} authenticated</div>
			<div>your token is :{$token}</div>
		</div>
	</section>

</main>