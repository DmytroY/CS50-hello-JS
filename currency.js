document.addEventListener('DOMContentLoaded',function () {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "H1CAUh5fYBnpxqlyVjcWvOsdbs43AoKF");

    document.querySelector('form').onsubmit = () => {
        const currency = document.querySelector('#currency').value.toUpperCase();
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };

        fetch(`https://api.apilayer.com/exchangerates_data/latest?symbols=${currency}&base=USD`, requestOptions)
            //.then(response => response.text())
            //.then(result => console.log(result))
            .then(response => response.json())
            //.then(data => )
            .then(data => {
                console.log(data);
                const rate = data.rates[currency];
                document.querySelector('.result').innerHTML = `1 USD = ${rate.toFixed(3)} ${currency}.`;
            })
            .catch(error => {
                document.querySelector('.result').innerHTML = "Error. Are you sure that you input valid currency code?";
                console.log('error', error)
            });
        return false;
    }

});