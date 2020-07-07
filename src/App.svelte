<script>
	import {is_authenticated, token} from './security.js'
	import Banner from './Banner.svelte'
	import ApiReport from './ApiReport.svelte'

</script>

<style type="text/scss">
	@import 'scss/style.scss';
</style>

<svelte:body/>

<main>
	<Banner></Banner>
	<section class="section">
		<div class="container">
			<ApiReport
				title="Hourly Segmented Population"
				endpoint="https://atlas.population-density.dataventures.nz/api/hourly"
				field="time"
			/>
			<ApiReport
				title="Spend, Regional"
				endpoint="https://atlas.spend-density.dataventures.nz/api/region"
				field="TRANSACTION_TIME"
			/>
			<ApiReport
				title="Spend, by Industry"
				endpoint="https://atlas.spend-density.dataventures.nz/api/industry"
				field="TRANSACTION_TIME"
			/>
			<ApiReport
				title="Crossings By Pax Origin"
				endpoint="https://ncmc.api.dataventures.nz/api/daily_arrivals_by_pax_origin"
				field="date_of_crossing"
			/>
			<ApiReport
				title="Crossings By Overseas Port"
				endpoint="https://ncmc.api.dataventures.nz/api/daily_crossings_by_overseas_port"
				field="date_of_crossing"
			/>
		</div>
	</section>

</main>
