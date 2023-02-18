


function calcularPromedio() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value);
    const promedio = (nota1 + nota2 + nota3 + nota4) / 4;
    let mensaje = '';
    if (promedio >= 7) {
        mensaje = 'El alumno está aprobado';
    } else {
        mensaje = 'El alumno no está aprobado, debe volver a rendir';
    }
    document.getElementById('resultado').innerHTML = 'El promedio es ' + promedio.toFixed(2) + '. ' + mensaje;
    console.log('El promedio es ' + promedio.toFixed(2) + '. ' + mensaje);
}



function mostrarResultado() {
    const resultado = calcularPromedio();
    document.getElementById('resultado').innerHTML = resultado;
}
