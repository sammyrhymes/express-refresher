const people = [
    {id:1, name:'john'},
    {id:2, name:'jacob'},
    {id:3, name:'james'},
    {id:4, name:'joel'},
    {id:5, name:'jonah'},
]

const products = [
    {
        id:1,
        productName:'box',
        price:9.99,
        desc:`a ${this.productName} of price ${this.price}`
    },    {
        id:2,
        productName:'pillow',
        price:19.99,
        desc:`a ${this.productName} of price ${this.price}`
    },    {
        id:3,
        productName:'bedding',
        price:99.99,
        desc:`a ${this.productName} of price ${this.price}`
    },    {
        id:3,
        productName:'matchbox',
        price:9.99,
        desc:`a ${this.productName} of price ${this.price}`
    }
]

module.exports = {products, people}