// domain/.netlify/functions/3-product
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
require("dotenv").config()

const Airtable = require('airtable-node');
 
// serverless function table id --> apphyUUe28w9woNTI
// current table id --> 

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('app9WelbphR5wjUEI')
  .table('products')


exports.handler = async (event, context, cb) => {
        const { id } = event.queryStringParameters
        if(id) {
            try {
                const product = await airtable.retrieve(id)
                if(product.error) {
                    return {
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                        },
                        statusCode:404,
                        // body must be a string, can stringify not strings to meet this requirement
                        body:`no product with id: ${id}`,
                    }
                }
                return {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    },
                    statusCode:200,
                    // body must be a string, can stringify not strings to meet this requirement
                    body:JSON.stringify(product),
                }
            } catch(error) {
                return {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    },
                    statusCode:500,
                    // body must be a string, can stringify not strings to meet this requirement
                    body:`Server Error`,
                }
            }
        }
        try {
            // const { records } = await airtable.list()
            const data = await airtable.list()

            console.log(data)
            // const products = records.map((product) => {
            //     const { id } = product;
            //     const { name, image, price } = product.fields
            //     const url = image[0].url
            //     return { id, name, url, price }
            // })
            return {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
                statusCode:200,
                // body must be a string, can stringify not strings to meet this requirement
                // body:JSON.stringify(products),
                body:JSON.stringify(data.records),
            }
        } catch(error) {
            console.log(error)
            return {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
                statusCode:500,
                // body must be a string, can stringify not strings to meet this requirement
                body:"server error",
            }
        }
}