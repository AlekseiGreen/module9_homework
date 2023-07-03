console.log('START');


const btn = document.querySelector('.btnOne');

btn.addEventListener('click', () => {
  const value1 = +document.getElementById('inputId_1').value;
  const value2 = +document.getElementById('inputId_2').value;
  let s = document.getElementById('result_1');
  s.textContent = '';
  if (!(value1 >= 100 && value1 <= 300 && value2 >= 100 && value2 <= 300)) {
    s.textContent = 'одно из чисел вне диапазона от 100 до 300';
    return;
  }
  else{
    fetch(`https://picsum.photos/${value1}/${value2}`)
      .then((response) => {
        document.getElementById('resultOut').src = response.url;
      });
  }
  
});