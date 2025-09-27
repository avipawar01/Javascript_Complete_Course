// Promisified function resolve async-await function


async function getProducts(){
    let res = await fetch('https://fakestoreapi.com/products/')
    res = await res.json()
    console.log(res);
}

getProducts();