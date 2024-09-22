function Calcolatrice() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let add = document.getElementById('add');
    let sub = document.getElementById('sub');
    let molt = document.getElementById('molt');
    let div = document.getElementById('div');
    let Sqrt = document.getElementById('Sqrt');
    let Cbrt = document.getElementById('Cbrt');
    let Pow = document.getElementById('Pow');
    let Log = document.getElementById('Log');
    let LN = document.getElementById('LN');

    if (add.checked) {
        if (isNaN(num1) || isNaN(num2)) {
            document.getElementById('ris').innerText = "Inserisci due numeri validi.";
        }
        else {
            let addizione = num1 + num2;
            document.getElementById('ris').innerText = addizione;
        }
    }
    else if (sub.checked) {
        if (isNaN(num1) || isNaN(num2)) {
            document.getElementById('ris').innerText = "Inserisci due numeri validi.";
        }
        else {
            let sottrazione = num1 - num2;
            document.getElementById('ris').innerText = sottrazione;
        }
    }
    else if (molt.checked) {
        if (isNaN(num1) || isNaN(num2)) {
            document.getElementById('ris').innerText = "Inserisci due numeri validi.";
        }
        else {
            let moltiplicazione = num1 * num2;
            document.getElementById('ris').innerText = moltiplicazione;
        }
    }
    else if (div.checked) {
        if (isNaN(num1) || isNaN(num2)) {
            document.getElementById('ris').innerText = "Inserisci due numeri validi.";
        }
        else {
            if (num2 == 0) {
                alert("Non puoi dividere un numero per 0 !");
            }
            else {
                let divisione = num1 / num2;
                document.getElementById('ris').innerText = divisione;
            }
        }
    }
    else if (Sqrt.checked) {
        let radice = Math.sqrt(num1);
        document.getElementById('ris').innerText = radice;
    }
    else if (Cbrt.checked) {
        let cbrt = Math.cbrt(num1);
        document.getElementById('ris').innerText = cbrt;
    }
    else if (Pow.checked) {
        let Pow = Math.pow(num2, num1);
        document.getElementById('ris').innerText = Pow;
    }
    else if (Log.checked) {
        let Log = Math.log(num2) / Math.log(num1);
        document.getElementById('ris').innerText = Log;
    }
    else if (LN.checked) {
        let LN = Math.log(num1);
        document.getElementById('ris').innerText = LN;
    }
    else {
        document.getElementById('ris').innerText = "Scegli un'operazione da fare!";
    }
}

const Pow = document.getElementById('Pow');

Pow.addEventListener('change', function () {
    if (Pow.checked) {
        document.getElementById('Cambio').innerHTML = "Esponente";
        document.getElementById('Cambio2').innerHTML = "Base";
    }
    else {
        document.getElementById('Cambio').innerHTML = "Numero 1";
        document.getElementById('Cambio2').innerHTML = "Numero 2";
    }
});

function AC() {
    window.location.reload();
}

const Log = document.getElementById('Log');

Log.addEventListener('change', function () {
    if (Log.checked) {
        document.getElementById('Cambio').innerHTML = "Base";
        document.getElementById('Cambio2').innerHTML = "Argomento";
    }
    else {
        document.getElementById('Cambio').innerHTML = "Numero 1";
        document.getElementById('Cambio2').innerHTML = "Numero 2";
    }
});

const Sqrt = document.getElementById('Sqrt');

Sqrt.addEventListener('change', function () {
    if (Sqrt.checked) {
        document.getElementById('Cambio').innerHTML = "Radicando";
        document.getElementById('num2').style.display = 'none';
        document.getElementById('Cambio2').style.display = 'none';
    }
    else {
        document.getElementById('Cambio').innerHTML = "Numero 1";
        document.getElementById('num2').style.display = 'block';
        document.getElementById('Cambio2').style.display = 'block';
    }
});

const LN = document.getElementById('LN');

LN.addEventListener('change', function () {
    if (LN.checked) {
        document.getElementById('Cambio').innerHTML = "Argomento";
        document.getElementById('num2').style.display = 'none';
        document.getElementById('Cambio2').style.display = 'none';
    }
    else {
        document.getElementById('Cambio').innerHTML = "Numero 1";
        document.getElementById('num2').style.display = 'block';
        document.getElementById('Cambio2').style.display = 'block';
    }
});

const Cbrt = document.getElementById('Cbrt');

Cbrt.addEventListener('change', function () {
    if (Cbrt.checked) {
        document.getElementById('Cambio').innerHTML = "Radicando";
        document.getElementById('num2').style.display = 'none';
        document.getElementById('Cambio2').style.display = 'none';
    }
    else {
        document.getElementById('Cambio').innerHTML = "Numero 1";
        document.getElementById('num2').style.display = 'block';
        document.getElementById('Cambio2').style.display = 'block';
    }
});