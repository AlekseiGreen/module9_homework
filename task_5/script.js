console.log('START');


const btn = document.querySelector('.btnOne');

btn.addEventListener('click', () => {
  const page = +document.getElementById('inputId_1').value;
  const limit = +document.getElementById('inputId_2').value;
  let s = document.getElementById('result_1');
  s.textContent = '';
  if (!(page >= 1 && page <= 10 && limit >= 1 && limit <= 10)) {
    s.textContent = 'одно из чисел вне диапазона от 1 до 10';
    return;
  }
  else{
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
      .then((response) => {
        const dataFromSite = response.json();
        dataFromSite.then((value) => {
          const list = Object.values(value);
          console.log(list);
          const res = list[0]['url'];
          console.log(res);
          document.getElementById('resultOut').src = res;
        })
      })
  }
  
});