
    console.log('hello');
    const select_input1 = document.getElementById('select1-input');
    const select_input2 = document.getElementById('select2-input');
    const inner_select1 = select_input1.value;
    const inner_select2 = select_input2.value;


    const select1 = document.getElementById('select1');
    const select2 = document.getElementById('select2');
    let option1 = select1.value;
    let option2 = select2.value;

    const btn = document.querySelector('.btn');

    let RBU = "RUB";
btn.onmousedown = function () {

    console.log('herro');
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'dc7819c2b8mshebad27cdce2062bp1f7da1jsne943fb95701a',
            'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
        }
    };
    const container = document.querySelector('.container')


    fetch(`https://currency-exchange.p.rapidapi.com/exchange?from=${select1.value}&to=${select2.value}&q=10.0`, options)
        .then(response => response.json())
        .then(response => {
           select_input2.value = response * select_input1.value
        })
        .catch(err => console.error(err));
    }
