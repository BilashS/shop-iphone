let pices = [399.00, 599.00, 699.00, 999.00, 1200.00, 1599.00];
$(document).ready(function () {
    console.log($('.iphone').length);

    function setPriceUAH(rate, prices) {
            prices.forEach(function (currentPrice, index) {
            $('.iphone_' + index + ' .price__uah').prepend((prices[index] * rate).toFixed(2));
        });

    }

    $.get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5",
        (data) => {
            let rate = Number(data[0].sale);
            console.log(rate);
            setPriceUAH(rate, pices);
        });
});


//for(pices = 0 ; pices < length ; pices++)