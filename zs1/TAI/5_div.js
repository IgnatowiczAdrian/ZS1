//document.getElementById('blok1').innerHTML = 'Janusz'

var b1 = document.getElementById('blok1');
var b2 = document.getElementById('blok2');
var b3 = document.getElementById('blok3');
var b4 = document.getElementById('blok4');
var inner = document.getElementById('inner');
var content = document.getElementById('content');

b1.innerHTML = 'Anna';
b2.innerHTML = 'Jacek';

var imie = prompt('Podaj imię');
b3.innerHTML = imie;

b4.textContent = 'Tomek';

//różnicy pomiędzy innerHTML a textContent

inner.innerHTML = '<a href="http://wp.pl"><h1>inner</h1></a>';
content.textContent = '<a href="http://wp.pl"><h1>content</h1></a>';

/*
    Użytkownik podaje z klawiatury dwie wartości: długość podstawy oraz wysokość trójkąta. Wyświetl wynik w div w formacie: "Pole trójkąta wynosi: ... cm2;
    Wynik ma być w kolorze białym na tle czarnym.
    Ogranicz blok wyświetlający do szerokości 200px.
    Zaokrąglij wynik do 2 miejsc po przecinku.
    W arkuszu stylów ustaw wyrównanie tekstu do środka.
*/
