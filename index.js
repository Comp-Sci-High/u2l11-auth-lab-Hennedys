// In this assignment, you will navigate a new API and make two API calls
// Task 1: Account Set up
// Find the GIPHY API, make an account, and create your API key
// MAKE SURE TO SELECT API AND NOT SDK & put "Web" as your platform
// Save your API key in a variable below

let apitest= "BQAq2e0s1VZMnYr7LAv0jXZ69P4tG9_jPCUOsFgCfeiHmHuuGyUgUkP8R3fU5HHppkxUFPd9IyZ8dAMTbztvb-pody47IAnNlsI3UNeSerPtvILifNfLAvG9ywOm9KzdMnnfGKPZhOr4ofTi_M3S7_k_WS_BBI2LkhNG4ofu4F1ARbFrMd8M34oa9uuuiNwV5Q8oX4QiCStZ_yZ7KlF-66VICBUnhQrnHWgNIkUCk6iomcxsjmPCA1WVe3scDOc44BoPdXl_vwdYOJclFXQWCA_oi9dmFNbQugJXHFIuUxQJ"
// Task 2: Endpoint Identification
// Under GIPHY API, find the GIF & Sticker endpoints
// Find the endpoint that lets you search for GIFs 
// Save the base and path in a variable below
let giftest = "api.giphy.com/v1/gifs/search"

// Task 3: Building full request URL
// Find the request (query) parameters to build the full request URL to search for 1 raccoon GIFs
// Save it in a variable below
let raccoontest = " " + apitest

// Task 4: Making the API call
// Define the function to fetch the data and console log the url key
async function fetchdata(raccoontest){
const response = await fetch (raccoontest)
const data = await response.json()
console.log(data)
return data
}


// Call the function to test it worked
fetchdata(raccoontest)

// Task 5: Running it back
// Find the endpoint that returns a random sticker
// Build the request URL for a coding sticker
let sticker = "api.giphy.com/v1/stickers/search"


// Define and call the function that prints just the sticker URL

async function fetchdata(){
const response = await fetch()
const data = await response.json()
console.log(data)

return data
}



