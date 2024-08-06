// a
type Usuario = {
    id: number
    name: string
    age: number
    active: boolean
}

const Usuarios: Usuario[] = [
        {id: 1, name: 'Joao', age:23, active:true},
        {id: 2, name: 'Joao', age: 29, active:true},
        {id: 2, name: 'Duarte', age: 30, active:false},
        {id: 2, name: 'Mitski', age: 40, active:true}
]
    
// b

const ActiveUsers = Usuarios.filter(u => u.active === true)
// console.log(ActiveUsers)

// c
const GreatherThan25 = Usuarios.filter(u => u.age > 25)
// console.log(GreatherThan25)

// d

const PeopleNames = Usuarios.map(u => u.name)
// console.log(PeopleNames)

// e

const AddOneYearToAge = Usuarios.map(u => u.age = u.age +1)
// console.log(AddOneYearToAge)


Usuarios.forEach((user) => {
    console.log(`Nome: ${user.name}, Idade: ${user.age}`) 
})

// g

const AgeOfAllTheUsers = Usuarios.reduce((total, user) => total + user.age, 0)
console.log(`Total: ${AgeOfAllTheUsers}`)

// h

const HowManyUsersAreActive = ActiveUsers.reduce((total) => total += 1 , 0);

console.log(`Total: ${HowManyUsersAreActive}`)

// i

const NomeJoao = Usuarios.find((user)=> user.name === "Joao")
console.log(NomeJoao)

// j

const UserInactive = Usuarios.find((user)=> user.active === false)
console.log(UserInactive)