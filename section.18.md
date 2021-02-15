# Objects
## Crucial 
### Creating and working with Object literals 
Objects are collections of properies 
properties are a key-value pair 
rather than accessing data using index, we use custom keys
Object: example: 
const fitBitData = {
    totalSteps : 29292,
    totalMiles : 29292,
}; 
Property is a Key and a value, we need to the Key to get the value 
How to pull out data 
fitBitData["totalSteps"]
fitBitData.totalSteps
### Nesting Arrays and Objects 
## Modifying objects 
const midterms = {danielle: 96, thomas: 78}
midterms.Thomas=79 will change it 

const shoppingCart = [ 
    { product: "Jengo Classic',
    price: 6.88,
    quantity: 1,
    },
    { product: "Echo Dot", 
    price: 29.99,
    quanity: 3
    } 
]
Two objects nested inside this array. 
ShoppingCart[1].price
returns = 29.99
