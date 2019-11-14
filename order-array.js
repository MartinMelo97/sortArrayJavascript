let array = ["Juan", "Pedro", "Joel", "Carlo"]
const selectDOM = document.querySelector('#select-person')
const inputNewPosition = document.querySelector('#input-new-position')
const btnSort = document.querySelector('#btn-sort')
const newList = document.querySelector('#new-list')
let oldPosition = null
let newPosition = null

selectDOM.addEventListener("change", (event) => {
    oldPosition = event.target.value
})

btnSort.addEventListener("click", event => {
    newPosition = inputNewPosition.value
    while(newList.firstChild) {
        newList.removeChild(newList.firstChild)
    }
    orderData(oldPosition, newPosition)
})

document.addEventListener("DOMContentLoaded", function(event){
    getArray()
})

const orderData = (oldPosition, newPosition) => {
    if(newPosition > array.length) {
        alert('No existe esa posición, no mms')
    } else {
        const temporalData = array[oldPosition]
        array.splice(oldPosition, 1)
        array.splice(newPosition, 0, temporalData)

        array.forEach(person => {
            const li = document.createElement('li')
            li.innerHTML = person
            newList.appendChild(li)
        })
    }
}

const getArray = () => {
    array.forEach((person, index) => {
        const option = document.createElement("option")
        option.value = index
        option.innerHTML = person
        selectDOM.appendChild(option)
    })
}
