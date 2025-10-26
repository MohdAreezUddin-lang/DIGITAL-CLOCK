const div = document.querySelector(`div`);

setInterval(() => {
    let time = new Date();
    div.textContent = `CURRENT TIME : ${time.toLocaleTimeString()}`;
},1000)