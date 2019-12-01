const axios = require("axios");
const API_BASE_BE = require("./helper.js");
async function getCoinValue(coin) {
  
  const data = await axios
  .get(API_BASE_BE) 
  .then(response => {
    let arr=[]
    response.data.data.forEach(obj => {
     if(obj.baseId === coin.toLowerCase() || obj.baseSymbol === coin.toUpperCase())
     arr.push({price:obj.priceUsd,symbol:obj.baseSymbol})
   });

      return arr
   })
   .catch(error => {
      console.log(error)
      return error
   
   });
      return data
}

module.exports = getCoinValue