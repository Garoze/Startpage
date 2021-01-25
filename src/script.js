function startTime() { // days
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    m = checkTime(m);
    s = checkTime(s);

    var greet;
    if (h < 12)
        greet = 'Bom Dia ';
    else if (h >= 12 && h <= 17)
        greet = 'Boa Tarde ';
    else if (h >= 17 && h <= 24)
        greet = 'Boa Noite ';

    //document.getElementById('sGreetings').innerHTML = `
    //<b>${greet}</b> Garoze, hoje é <b>${days[today.getDay()]}-feira</b>!
    //`

    document.getElementById('sGreetings').innerHTML = `
        <b>${greet}</b> Garoze <br> Hoje é <b>${days[today.getDay()]}-feira</b>!
    `
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

// duckduck go
function duckSearch() {
    var searchField = document.getElementById("searchField");
    if (searchField && searchField.value) {
        var query = escape(searchField.value);
        window.location.href = "https://duckduckgo.com/?q=" + query;
    }
}
