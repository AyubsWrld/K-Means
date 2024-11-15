const axios = require('axios');
require('dotenv').config();

const GRAPH_HOPPER_API_KEY = process.env.GRAPH_HOPPER_API_KEY;

const addresses = [
  '51.131,12.414', 
  '48.224,3.867'  
];

async function optimizeRoute() {
  try {
    const response = await axios.post(`https://graphhopper.com/api/1/route`, {
      points: addresses, 
      vehicle: 'car',    
      optimize: true,   
      key: GRAPH_HOPPER_API_KEY 
    }, {
      headers: {
        'Content-Type': 'application/json' 
      }
    });

    console.log('Optimized Route:', JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

optimizeRoute();
