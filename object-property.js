const students = [
{id: 21, name: 'Omor suny'},
{id: 31, name: 'mannnna'},
{id: 41, name: 'Omor sunnny'},
{id: 71, name: 'deepjol'}
];



const names = students.map(s => s.name);
const ids = students.map( s => s.id)
const bigger = students.filter(s => s.id > 40 )
const biggerOne = students.find(s => s.id > 40 )
console.log(biggerOne);





















