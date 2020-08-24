const _products=[
    {"id":1,"title":"ipad 4 Mini","price":500.01,"inventory":2},
    {"id":2,"title":"H&M T-Shirt White","price":10.99,"inventory":10},
    {"id":3,"title":"Chrli XCX - Sucker","price":19.99,"inventory":5},
]

export const getAllProducts=callback=>{
    setTimeout(() => {
        callback(_products)
    }, 100);
}