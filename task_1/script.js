const parser = new DOMParser();
//console.log('parser', parser);

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
//console.log('xmlString', xmlString)

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector('list');
const studentNode = listNode.querySelectorAll('student');
const nameNode = listNode.querySelector('name')

function getTextFromXML(str, num) {
  for(let i in studentNode) {
    return [studentNode[`${num}`].querySelector(str).textContent][i];
  }
}

function getAttrFromXML(str, num) {
  for(let i in studentNode) {
    return [studentNode[`${num}`].querySelector('name').getAttribute(str)][i];
  }
}

const student = {
  list: [
    {name: getTextFromXML('first', 0) + ' ' + getTextFromXML('second', 0), age: Number(getTextFromXML('age', 0)),
    prof: getTextFromXML('prof', 0), lang: getAttrFromXML('lang', 0)},
    {name: getTextFromXML('first', 1) + ' ' + getTextFromXML('second', 1), age: Number(getTextFromXML('age', 1)),
    prof: getTextFromXML('prof', 1), lang: getAttrFromXML('lang', 1)},
  ]
};

console.log(student)
