const containerNums = document.getElementById('container-nums')
const allNums = document.querySelectorAll('.num')

const findNumInput = document.getElementById('find-num-input')
const findNumBtn = document.getElementById('find-num-btn')


let findNumInputContent = ''

findNumInput.addEventListener('input', (e) => {
    findNumInputContent += e.data
})

findNumBtn.addEventListener('click', () => {
    let inputNum = [...allNums].find(el => el.textContent == findNumInputContent)
    findNumInputContent = ''
    findNumInput.value = ''
    if (inputNum.textContent) {
        console.log(Object.values(allNums).forEach(el => {
            if (el.textContent !== inputNum.textContent) {
                el.remove()
            }
        }))
    }
})

const reduceBtn = document.getElementById('reduce-num-btn')

reduceBtn.addEventListener('click', () => {
    let numsFromHtml = []
    let array = [...allNums]
    array.forEach(div => {
        numsFromHtml.push(Number(div.textContent))
    })
    let sum = numsFromHtml.reduce((a, b) => a + b)
    Object.values(allNums).forEach((div, index) => {
        if (index === 0) {
            div.textContent = sum
        } else {
            div.remove()
        }
    })
})

const mapBtn = document.getElementById('map-array-btn')

mapBtn.addEventListener('click', () => {
    let newValues = Object.values(allNums).map(el => {
        return Number(el.textContent) * 2
    })

    for (let i = 0; i < newValues.length; i++) {
        Object.values(allNums)[i].textContent = newValues[i]
    }
})

const fillBtn = document.getElementById('fill-array-btn')

fillBtn.addEventListener('click', () => {
    let fillNum = Object.values(allNums).fill('100')

    for (let i = 0; i < fillNum.length; i++) {
        Object.values(allNums)[i].textContent = fillNum[i]
    }
})

const sortBtn = document.getElementById('sort-array-btn')

sortBtn.addEventListener('click', () => {
    let classicValues = []
    Object.values(allNums).forEach(div => {
        classicValues.push(Number(div.textContent))
    })
    const compare = (a, b) => b - a
    let reversedSort = classicValues.sort(compare)
    if (Number(Object.values(allNums)[0].textContent) < Number(Object.values(allNums)[1].textContent)) {
        for (i = 0; i < reversedSort.length; i++) {
            Object.values(allNums)[i].textContent = reversedSort[i]
        }
    } else if (Number(Object.values(allNums)[0].textContent) > Number(Object.values(allNums)[1].textContent)) {
        reversedSort.sort()
        for (i = 0; i < reversedSort.length; i++) {
            Object.values(allNums)[i].textContent = reversedSort[i]
        }
    }
})

const sortBtn = document.getElementById('filter-array-btn')

sortBtn.addEventListener('click', () => {
    
})