//Ejercicio 3
function hora(en12h: string): string {
    // Separa la cadena en horas, minutos y am/pm
    const partes = en12h.split(' ');
    const tiempo = partes[1];
    const [horas, minutos] = partes[0].split(':');

    let horas24 = parseInt(horas, 10);// Convierte las horas a número
    // Ajusta las horas si es necesario para el formato de 24 horas
    if (tiempo === 'pm' && horas24 !== 12) {
      horas24 += 12;
    } else if (tiempo === 'am' && horas24 === 12) {
      horas24 = 0;
    }  
    const horasStr = horas24.toString().padStart(2, '0');// Formatea las horas en cadena
    const minutosStr = minutos.padStart(2, '0');// Formatea lOS minutos en cadena   
    return `${horasStr}${minutosStr}`;// Devuelve la hora en formato de 24 horas
  } 
  // Ejemplos de uso: 
    const hora1 = "10:00 am";
    const hora2 = "10:00 pm";
    console.log(hora(hora1)); 
    console.log(hora(hora2)); 
  