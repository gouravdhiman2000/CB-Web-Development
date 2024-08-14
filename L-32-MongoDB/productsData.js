let products = [
    {
        name: "dal",
        category : "veg",
        price :100
    },
    {
        name: "rice",
        category : "veg",
        price :120
    },
    {
        name: "chicken",
        category : "non-veg",
        price :200
    },
    {
        name: "pizza",
        category : "veg",
        price :200
    },
]

// Query
db.products.aggregate([
    {
        $group:{
            _id : "$category",
            totalSales : { $sum : "$price" }

        }
    }
])