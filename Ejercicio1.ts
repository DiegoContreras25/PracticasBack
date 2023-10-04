//Ejercicio1
const array = [1, 7, 5, 6, 8, 9, 9, 100, 24, 35, 10]

function bubbleSort(array,i){
  if(i==array.length){
  return array;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      let newvar = array[i];
      array[i] = array[i + 1];
      array[i + 1] = newvar;
    }
  }
  return bubbleSort(array,i+1);

 }
console.log(bubbleSort(array,0));