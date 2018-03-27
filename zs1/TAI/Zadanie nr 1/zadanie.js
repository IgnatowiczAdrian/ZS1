var wynik = document.getElementById('wynik');
var dl = Number(prompt('Podaj długość'));
var wys = Number(prompt('Podaj wysokość'));
var oblicz = 0.5 * dl * wys;
oblicz = oblicz.toFixed(2);
wynik.innerHTML = 'Pole trójkąta wynosi:' + oblicz + 'cm<sup>2</sup>';