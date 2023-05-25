// Change document background color to
// silver
document.body.style.backgroundColor = "#519aae";


// Change the font color for h1 title tag to
// green

document.getElementById('title').style.color='green'

// Change the font case for h3 title tags to
// uppercase
document.getElementById('vegies').style.textTransform='uppercase'


// Add one more fruit to the fruits list
let li = document.createElement('li')
li.innerHTML='Pineapple'
document.getElementById('fruList').appendChild(li)

// Add one more vegetable to the vegetables
// list
let x = document.createElement('li')
x.innerHTML='cabbage'
document.getElementById('vegList').appendChild(x)