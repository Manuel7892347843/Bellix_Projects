//QUESTO E' UN COMMENTO IN JAVASCRIPT

//Commento in JavaScript
//Scrittura di un testo in JavaScript
document.write("Ciao Mondo!");

//Metodo 1:
//Creazione di una Variabile
let variabile;
//Istanziamento di un varibile
variabile = 5;

//Metodo 2:
//Dichiarazione su una linea unica
let variabile2 = 5;

//Dichiarazione di una variabile stringa
let variabile3 = "ciao";

//Dichiarazione di una variabile boleana
let variabile4 = true;
let variabile5 = false;

//Concatenazione di stringhe
let primo_periodo = "Questa è";
let secondo_periodo = " una frase";
let terzo_periodo = " in JavaScript";
let frase = primo_periodo + secondo_periodo + terzo_periodo;

//"<br>" serve per andare a capo come in HTML
document.writeln("<br>" + frase);

//OPERATORI BINARI
//Se si fa la stessa cosa con dei numeri non verrano concatenati ma sommati
let a = 5;
let b = 10;
let ris = a + b;

document.write("<br>" + ris);

//Sottrazioni
let a1 = 5;
let b1 = 10;
let ris1 = a - b;

document.write("<br>" + ris1);

//Moltiplicazioni
let a2 = 5;
let b2 = 10;
let ris2 = a * b;

document.write("<br>" + ris2);

//Divisione
let a3 = 5;
let b3 = 10;
let ris3 = a / b;

document.write("<br>" + ris3);

//Resto
let a4 = 5;
let b4 = 10;
let ris4 = a % b;

document.write("<br>" + ris4);

//OPERATORI UNARI
let num = 5;
let ris5 = num++;

//Se stampo ris5 mi dara' il valore di num che e' 5
document.write("<br>" + ris5);

//Se stampo num mi dara' il valore di num ma incrementato di 1 cioe' 6
document.write("<br>" + num);

//Operazione opposta
let num1 = 5;
let ris6 = ++num1;

//Se stampo ris5 mi dara' il valore di num che e' 5
document.write("<br>" + ris6);

//Se stampo num mi dara' il valore di num ma incrementato di 1 cioe' 6
document.write("<br>" + num1);

//MENTRE SE VOGLIO SOTTRARRE USO "--" DAVANTI ALLA MIA VARIABILE

var alpha = "SIMOGOGOGO";
//Lunghezza della stringa
var l = alpha.length;
document.write("<br>" + "La lunghezza della stringa e' = " + l);

//Metodo substring serve per prendere parti di una stringa indicato da due variabili
//I due parametri che substring chiede includeranno il primo paramentro ma escluderanno l'ultimo numero
var l1 = alpha.substring(2, 9);
document.write("<br>" + "Il pezzo di stringa compreso tra 2 e 9 e' = " + l1);
var l2 = alpha.substring(0,6);
document.write("<br>" + "Il pezzo di stringa compreso tra 0 e 6 e' = " + l2);

//ARRAY
var vett1 = new Array(7);
vett1[0] = "Torres";
vett1[1] = false;
vett1[2] = 105;
vett1[3] = "C";
vett1[4] = false;
vett1[5] = 10.5;
vett1[6] = "CTRL + S";

document.write("<br>" + vett1[0] + "<br>" + vett1[1] + "<br>" + vett1[2] + "<br>" + vett1[3] + "<br>" + vett1[4] + "<br>" + vett1[5] + "<br>" + vett1[6]);

//Creazione di un array su singola linea
var vett2 = new Array("Ciao", "cane", 18, true, false, 83278.3);

//Creazione di un array su singola linea senza "new Array"
var vett3 = ["Ciao", "cane", 18, true, false, 83278.3];

//FUNZIONI o METODI
function DimmiCiao(chi)//Se inserisco qualcosa nelle tonde diventeranno delle variabili
{
    document.write("<br>" + "Ciao " + chi);
}

//Richiamo la funzione DimmiCiao()
DimmiCiao("Manu");
DimmiCiao("Torres");
DimmiCiao("Pussy Suprema");

//IF e ELSE
let n = 1;
//"==" uguale, ">" maggiore, "<" minore, ">=" maggiore uguale, "<=" minore uguale, "!=" diverso da ...
if(n > 10)
{
    alert(n);
}
else if(n == 1)
{
    alert("Torri odia i vettori");
}

let h = "coniglio";
if(h == "Coniglio")
{
    alert(h);
}
else
{
    alert("non Coniglio");
}

document.write("<br>");

//CICLI
for(i = 0; i<5; i++)
{
    document.write("Ripetizione = " + i + "<br>");
}