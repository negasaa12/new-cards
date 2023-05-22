

let favNumber = [100,250,940]


async function favoriteNumber(){

    let res = await axios.get(`http://numbersapi.com/${favNumber}`)
    numbers = res.data
    console.log(numbers)
    for(let key in numbers) {
        let li = document.createElement('li')
        let ul = document.querySelector('ul')
        li.textContent = key + numbers[key]
        console.log(key + numbers[key])
        ul.appendChild(li)
    }


}

favoriteNumber()