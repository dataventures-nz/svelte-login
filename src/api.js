import {token} from './security.js'
import {api_config} from './apt_config.json'


// we need to do some named stuff here
async function query(query, endpoint){
  var results = d3.fetch(api_config.uri + "/api/" + endpoint, {
		method: 'POST',
		headers: {
			'Access-Control-Allow-Headers':['Authorization'],
			'Authorization': "Bearer "+ $token,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(query)
	})
    return await results
}

// we really need to do named stuff here
async function extents(query){
	var results = d3.fetch(api_config.uri + "/api/" + endpoint, {
		  method: 'POST',
		  headers: {
			  'Access-Control-Allow-Headers':['Authorization'],
			  'Authorization': "Bearer "+ $token,
			  'Content-Type': 'application/json'
		  },
		  body: JSON.stringify(query)
	  })
	  return await results
  }
  
