
let arr = []
window.onload = () => {
    const exchange = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'dc7819c2b8mshebad27cdce2062bp1f7da1jsne943fb95701a',
        'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
    }
};

fetch('https://currency-exchange.p.rapidapi.com/listquotes', exchange)
    .then(response => response.json())
    .then(response => arr.push(...response))
    .catch(err => console.error(err));

const select1 = document.getElementById('select1');
const select2 = document.getElementById('select2');

let myDiv = document.getElementById("myDiv");

}
arr = ['SGD', 'MYR', 'EUR', 'USD', 'AUD', 'JPY', 'CNH', 'HKD', 'CAD', 'INR', 'DKK', 'GBP', 'RUB', 'NZD', 'MXN', 'IDR', 'TWD', 'THB', 'VND']



arr.forEach(element => {
    select1.innerHTML += `<option> ${element} </option>`;
    select1.value = "USD"
});
arr.forEach(element => {
    select2.innerHTML += `<option> ${element} </option>`;
    select2.value = "EUR"
});
