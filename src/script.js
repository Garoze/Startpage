const checkTime = (i) => {
    if (i < 10) return {i = "0" + i};
    return i;
}

const getGreetMessage = (actualHour) => {
    if (actualHour < 12) return 'Bom Dia ';
    if (actualHour >= 12 && actualHour <= 17) return 'Bom Tarde ';
    if (actualHour >= 17 && actualHour <= 24) return 'Boa Noite ';
}

const startTime = () => {
    const today = new Date();
    const hour = today.getHours();
    const dayWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    document.getElementById('sGreetings').innerHTML = `
        <b>${getGreetMessage(hour)}</b> Garoze <br> Hoje é <b>${dayWeek[today.getDay()]}-feira</b>!
    `
}

