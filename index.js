import dogs from './data.js'
import Dog from './Dog.js'

const rex = new Dog(dogs.rex)
const bella = new Dog(dogs.bella)
const teddy = new Dog(dogs.teddy)

console.log(rex)
console.log(bella)
console.log(teddy)

document.querySelector('.cross-btn').addEventListener('click', () => {
    alert('NIE LUBIE')
})
document.querySelector('.heart-btn').addEventListener('click', () => {
    alert('LUBIE')
})