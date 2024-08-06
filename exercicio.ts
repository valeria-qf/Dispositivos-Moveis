// 1
type User = { name: string
     age?: Number
      skills: string[] }

let usuario: User = { name: 'Valéria', age: 19, skills: ['watch tv shows', 'watch movies'] }

// 2

function evenNumbers(numbers: number[]): number[] {

    let evenNumbersArray: number[] = []
    numbers.forEach(number => {
        if (number % 2 === 0) {
            evenNumbersArray.push(number)
        }
    })
    return evenNumbersArray
}


// 4

function numberOrString(variable: string | number) {
    return typeof variable === 'string' ? variable.length : Math.pow(variable, 2)
}

// 6 

type Component = {
    title?: string
    width?: number
    height?: number
}


// 7 

type ApiResponse<T> =
    {
        dataProperty: T
        messageProperty: string
    }


// 8

function AddValueToArray<T>(value: T) {
    let arrayReturned: T[] = []

    if (arrayReturned.length === 0 || typeof value === typeof arrayReturned[0]) {
        arrayReturned.push(value)
    }

    return arrayReturned
}

// 9 

function ReturnMessage(mensagem: 'asc' | 'desc') {
    if (mensagem === 'asc') {

        return 'tipo asc'
    }

    else if (mensagem === 'desc') {
        return 'mensagem do tipo desc'
    }
}
