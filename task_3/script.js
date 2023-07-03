console.log('START');

function sendR() {
  const xhr = new XMLHttpRequest();

  xhr.onload = function() {
    console.log(`Статус: ${xhr.status}; Результат: ${xhr.response}`)
  };
  
  xhr.onerror = function() {
    console.log('Ошибка запроса');
  };
  
  xhr.open("get", "https://jsonplaceholder.typicode.com/posts", true);
  xhr.send();
}


function getInputValue() {
  // Selecting the input element and get its value 
  let inputVal = document.getElementById("inputId").value;
  // Displaying the value
  if(inputVal >= 1 && inputVal <= 10) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.onreadystatechange = function() {
      const data = JSON.parse(xhr.responseText);
      console.log('id =',data[inputVal-1].id);
    }
    xhr.send();
  }
  else{
    console.log('число вне диапазона от 1 до 10')
  }
}