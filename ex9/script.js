var maindiv = document.getElementById('container')

// header nav bar

var nav1 = document.createElement('nav');
var h1 = document.createElement('h1');
var h2 = document.createElement('h2');
var anotheh2 = document.createElement('h2');


h1Text = document.createTextNode('HighOnCoding');
h2Text = document.createTextNode('Home');
h3Text = document.createTextNode('Catagories');
h1.style.display.inl
h1.appendChild(h1Text);
h2.appendChild(h2Text);
anotheh2.appendChild(h3Text);
nav1.appendChild(h1)
nav1.appendChild(h2)
nav1.appendChild(anotheh2)
maindiv.appendChild(nav1)
h1.style.color = 'white'
h2.style.color = 'white'
anotheh2.style.color = 'white'

console.log(h1)
nav1.style.backgroundColor = '#0099ff'
nav1.style.msTextCombineHorizontal


// Paragraph one

var div2 = document.createElement('div');
var header = document.createElement('h1');
var headtext = document.createTextNode('Curse of the currunt reviews')
var p = document.createElement('p');
var ptext = document.createTextNode('An HTML element is a type of HTML (Hypertext Markup Language) document component, one. HTML documents are delivered as "documents". These are then parsed.A typical example is the (hard line-break) element.There are multiple kinds of HTML elements: void elements, raw text elements,An HTML element is a type of HTML (Hypertext Markup Language) document component, An HTML element is a type of HTML (Hypertext Markup Language) document component, An HTML element is a type of HTML (Hypertext Markup Language) document component,An HTML element is a type of HTML (Hypertext Markup Language) document component,An HTML element is a type of HTML (Hypertext Markup Language) document component,An HTML element is a type of HTML (Hypertext Markup Language) document component,An HTML element is a type of HTML (Hypertext Markup Language) document component,An HTML element is a type of HTML (Hypertext Markup Language) document component,')
header.appendChild(headtext);
p.appendChild(ptext);

div2.appendChild(header)
div2.appendChild(p)
maindiv.appendChild(div2)

div2.style.backgroundColor = 'gray'
div2.style.margin = ('20px')



// Paragraph two

var div3 = document.createElement('div');
var header3 = document.createElement('h2');
var headtext3 = document.createTextNode('Hello Watchkit')
var p3 = document.createElement('p');
var ptext3 = document.createTextNode('An HTML element is a type of HTML (Hypertext Markup Language) document component, one. HTML documents are delivered as "documents". These are then parsed.A typical example is the (hard line-break) element.There are multiple kinds of HTML elements: void elements, raw text elements,An HTML element is a type of HTML (Hypertext Markup Language) document component, An HTML element is a type of HTML (Hypertext Markup Language) document component, An HTML element is a type of HTML (Hypertext Markup Language) document component,An HTML element is a type of HTML (Hypertext Markup Language) document component,An HTML element is a type of HTML (Hypertext Markup Language) document component,An HTML element is a type of HTML (Hypertext Markup Language) document component,An HTML element is a type of HTML (Hypertext Markup Language) document component,An HTML element is a type of HTML (Hypertext Markup Language) document component,')
header3.appendChild(headtext3);
p3.appendChild(ptext3);

div3.appendChild(header3)
div3.appendChild(p3)
maindiv.appendChild(div3)

header3.style.color = 'blue'
div3.style.margin = ('20px')

header3.appendChild(headtext3);
p3.appendChild(ptext3);

div3.appendChild(header3)
div3.appendChild(p3)
maindiv.appendChild(div3)


var p4 = document.createElement('p');

var ptext4 = document.createTextNode('15 Comments' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + '124 likes')

p4.appendChild(ptext4);
div3.appendChild(p4)
maindiv.appendChild(div3)

p4.style.backgroundColor = 'orange'



p4.style.tableLayout.split


//paragraph three

var div4 = document.createElement('div');
var header4 = document.createElement('h2');
var headtext4 = document.createTextNode('Introduction to swift')
var p5 = document.createElement('p');
var ptext5 = document.createTextNode('An HTML element is a type of HTML (Hypertext Markup Language) document component, one. HTML documents are delivered as "documents". These are then parsed.A typical example is the (hard line-break) element.There are multiple kinds of HTML elements: void elements, raw text elements,An HTML element is a type of HTML (Hypertext Markup Language) document component, An HTML element is a type of HTML (Hypertext Markup Language) document component, An HTML element is a type of HTML (Hypertext Markup Language) document component,An HTML element is a type of HTML (Hypertext Markup Language) document component,An HTML element is a type of HTML (Hypertext Markup Language) document component,An HTML element is a type of HTML (Hypertext Markup Language) document component,An HTML element is a type of HTML (Hypertext Markup Language) document component,An HTML element is a type of HTML (Hypertext Markup Language) document component,')

header4.appendChild(headtext4);
p5.appendChild(ptext5);

div4.appendChild(header4)
div4.appendChild(p5)
maindiv.appendChild(div4)

header4.style.color = 'blue'
div4.style.margin = ('20px')


var p6 = document.createElement('p');
var ptext6 = document.createTextNode('12 Comments' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + '45 likes')
p6.appendChild(ptext6);
div4.appendChild(p6)
maindiv.appendChild(div4)

p6.style.backgroundColor = 'orange'

var x = document.querySelectorAll('p')



// create button
var button = document.createElement('button')
button.setAttribute('type', 'button')
button.setAttribute('class', 'btn btn-primary')
button.setAttribute('id', 'btn-primary')
button.setAttribute('style', 'align:center')
button.setAttribute('onclick', 'openForm()')

var span = document.createElement('span')

span.setAttribute('class', 'span')
span.innerHTML = 'MY BUTTON'
button.appendChild(span)
// button.style.alignItems = "center"
button.style.margin = 'auto'
document.body.append(button);
console.log(button)






const formdiv = document.createElement('div')
formdiv.setAttribute('class', 'form-popup')
formdiv.setAttribute('id', 'myForm')

// //create form
const formf = document.createElement('form')
formf.setAttribute('class', 'form-container')
formf.setAttribute('action', '/action_page.php')
// formdiv.appendChild(formf)
// //create h1
const h1f = document.createElement('h1')
h1f.innerHTML =('Comment Form')
h1f.style.textAlign='center'
// formf.appendChild(h1f)

//create label
const label1 = document.createElement('label')
label1.setAttribute('for', 'email')
label1.innerHTML=('Title')
// formf.appendChild(label)


//create input
const input1 = document.createElement('input')
input1.setAttribute('type', 'title')
input1.setAttribute('placeholder', 'type your title')


//create label
const label2 = document.createElement('label')
label2.setAttribute('type', 'comment')
label2.innerHTML=('comment')
// formf.appendChild(label)


//create input
const input2 = document.createElement('input')
input2.setAttribute('type', 'comment')
input2.setAttribute('placeholder', 'type your comment')

const submit = document.createElement('button')
 submit.setAttribute('type', 'button')
 submit.setAttribute('class', 'submit')
submit.innerHTML ='Submit'

 const cancel = document.createElement('button')
 cancel.setAttribute('type', 'button')
 cancel.setAttribute('class', 'cancel')
  cancel.innerHTML = 'Cancel'

formf.appendChild(h1f)
formf.appendChild(label1)
formf.appendChild(input1)
formf.appendChild(label2)
formf.appendChild(input2)
formf.appendChild(submit)
formf.appendChild(cancel)
formdiv.appendChild(formf)



function openForm() {
document.body.appendChild(formdiv)
  formdiv.style.display = "block";
  button.style.display = "none"
 input1.value= ''
 input2.value= ''

}


submit.addEventListener('click', function() {
  var newh= document.createElement('h2')
  var newp= document.createElement('p')
  newh.style.color = 'green'
  val1 = input1.value;
  val2 = input2.value;
  if (val1 != '' && val2 != ''){
   var newText1 = document.createTextNode(val1);
  var newText2 = document.createTextNode(val2);
  newh.appendChild(newText1)
  newp.appendChild(newText2)

  maindiv.appendChild(newh)
  maindiv.appendChild(newp)


  formdiv.style.display = "none";
  button.style.display = "block"
  
  } else {
    alert('Please fill all fields')

  
  }

  })

  cancel.addEventListener('click', function() {
    formdiv.style.display = "none";
    button.style.display = "block"

    })
  