document.querySelector('.buscar').addEventListener('submit', async (event) => {
  event.preventDefault();

  let input = document.querySelector('.input').value;

  if (input !== '') {
    clearInfo();
    mensagem('Carregando...');

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=${API_TOKEN}=metric&lang=pt_br`;

    let req = await fetch(url);
    let res = await req.json();

    if (res.cod === 200) {
      resultInfo({
        name: res.name,
        pais: res.sys.country,
        temp: res.main.temp,
        tempIcon: res.weather[0].icon,
        windSpeed: res.wind.speed,
        windDeg: res.wind.deg,
      })
    } else {
      clearInfo();
      mensagem('Localização não encontrada. Tente novamente!');
    }
  } else {
    clearInfo();
  }
});

function resultInfo(res) {
  mensagem('');

  document.querySelector('.titulo').innerHTML = `${res.name}, ${res.pais}`;
  document.querySelector('.tempInfo').innerHTML = `${res.temp}<sup>°C</sup>`;
  document.querySelector('.ventoInfo').innerHTML = `${res.windSpeed}<span>Km/h</span>`;

  document.querySelector('.temp img').setAttribute('src', `https://openweathermap.org/img/wn/${res.tempIcon}@2x.png`);

  document.querySelector('.ventoPonto').style.transform = `rotate(${res.windDeg - 90}deg)`;

  document.querySelector('.result').style.display = 'block';
}

function mensagem(msg) {
  document.querySelector('.aviso').innerHTML = msg;
}

function clearInfo() {
  mensagem('');
  document.querySelector('.result').style.display = 'none';
}