<script>
  import * as d3 from 'd3'
  import {token} from './security.js'
  export let title = 'Title'
  export let endpoint
  export let field
  let first = "waiting"
  let last = "waiting"
  let total = "waiting"

  async function start() {
    first = await getFirst([{"$sort": {[field]: 1}}, {"$limit": 1}, {"$project": {[field]: 1}}], field)
  }

  async function end() {
    last = await getFirst([{"$sort": {[field]: -1}}, {"$limit": 1}, {"$project": {[field]: 1}}], field)
  }

  async function count() {
    total = await getFirst([{"$count":"row_count"}],'row_count')
  }

  async function getFirst(query, field){
    var dateext = d3.csv(endpoint, {
  		method: 'POST',
  		headers: {
  			'Access-Control-Allow-Headers':['Authorization'],
  			'Authorization': "Bearer "+ $token,
  			'Content-Type': 'application/json'
  		},
  		body: JSON.stringify(query)
  	})

  	var d=await dateext
  	return d[0][field]
  }

  $:if ($token) {
    start()
    end()
    count()
  }

</script>

<style type="text/scss">
	@import 'scss/style.scss';
	div {
		padding-bottom: 10px;
	}
</style>

<div class="tile is-vertical">
  <h3>
    {title}
  </h3>
  <!-- <p>Updated: <span id=ph_updated> Waiting </span><p> -->
  <p>earliest: {first}</p>
  <p>latest: {last}</p>
  <p>count: {total}</p>
</div>
