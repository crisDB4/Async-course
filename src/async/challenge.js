import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

const anotherFn = async (urlApi) => {
    try {
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
        console.log(products);
        console.log(product.title);
        console.log(category.name);
    } catch (error) {
        console.error(error);
    }
}

anotherFn(API);

import fetch from 'node-fetch';


async function runCode(urlAPI) {
    try {
        const url = new URL(urlAPI);
    } catch {
        throw new Error('Invalid URL');
    }
    
    try {
        const response = await fetch(urlAPI,{
            method: "GET"
        });
        const data = await response.json();
        return data;
    } catch (e) {
        throw new Error('Something was wrong');
    }
}

console.log(runCode('https://api.escuelajs.co/api/v1/categories'));


//----------------------------------------------------

import fetch from 'node-fetch';

async function runCode(url) {
    const options = {
      method: "GET"
    }
  
    try {
      new URL(url)
    } catch (error) {
      throw new Error('Invalid URL');
    }
  
    try { 
      const response = await fetch(url, options);
      const data = await response.json()
      return data
    } catch (error) {
      throw new Error('Something was wrong');
    }
  }
  console.log(runCode('https://api.escuelajs.co/api/v1/categories'))