## Intro to the dom 
    combining js with html and css 
    document object model 
    a bunch of js objects that represents the webpage 
    Every element in the HTML get assigned a js object 
    console.dir(document); in the console will show the JS objects in webpage 
        You can pull a bunch of info for anything 

    Document is an object that is created by a brower that represents the objects on the page

# selecting 

## getElementById 
    .getElementbyId()
        pass in an id  

    .getElementsByTagName() 
        get a list of multiple elements with tag name 
        NOT an array
        return an HTML collection  

    .getElementsByClassName()
        the same as tag name but uses class 
        

## querySelector 
    newer and quicker way of selecting elements 
    all in one method to select a single element 
    we can select by, #id, .class or tag. 
    only give the first match 
## querySelectorAll
    returns a collection instead of first match 
    Not an array 
    you can get a specific element by clalling .querySelector("input[type='checkbox']") example.. 

# Manipulating the DOM 
    Using js to impact what the user sees or what happens on the webpage 
properites and methods 
    classList               innerText
    getAttribute()          textContent
    setAttribute()          innerHTML
    appendChild()           value 
    append()                parentElement
    prepend()               children
    reomveChild()           nextSibling
    remove()                prviousSibling
    createElement()         style

## innerHTML textContent and innerText 
    .innerText the content inbetween the open and closing tags, senitive to what is showing at the moment to the user 
    .textContent is going to return every element in the content, does not care about what is being showed to the user 
    .innerHTML will give the entirty of the markup. Used to add in whole elements 
    = will over ride what ever is in there += will add to the value 

##  Attributes 
    href 
    source 
    id 
    class 
    .getAttribute()
    We can set the input to a const object and then have access to a bunch of different attributes and can change an whole bunch of stuff using js 
    .setAtrribute('type', 'text'); This will set the attribute to what you want 

## changing styles 
    how to select something and change the color or choose new class 
    .style object does not contain any current styles if diferent style sheet
    .style will change and object, but its not perfered because it makes inline styles on your style sheet 

    window.getComputedStyle(h1) will give the computed styles for that exact element.
    this is nice to do tweeks live in the DevTools 

    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    const span = document.querySelectorAll('span');
for (let i = 0; i < span.length; i++) {
    span[i].style.color = colors[i];
}
Explination: Span get turned into the usable object span with const,
             Create a for loop, i starts at 0, i < less than the length of span, i increases by one each go around the loop 
             We set span object to i and then .style.color is equal to color object also set to i.
             What happens is, the span runs throw the loop, changes its .style.color in cordiation with the colors object that is also going through the loop!


    
## classList 
.classList is an object that we can use to control the classes on an element and retrieve them 
.classList has a bunch of methods, add works like push. You can just keep on using it 
toggle method allows you to add and remove a class everytime it is called 
const li = document.querySelectorAll('li'); 

for (let allLi of li) {
    
    if (allLi.classList.contains('highlight')) {
        allLi.classList.toggle('highlight'); 
    } else {
        allLi.classList.add('highlight');
    }   
}
Explination: 
We pulled out all of the li elements and named it li.
Then used for/of to say that allLi is the same as li... so you can use the const li for more then one loop. 
if allLi classList contains the class highlight
then take allLi and toggle the class highlight 
else... if it allLi does not have the class highlight, then add it.  

## Tansversing Parent/child/siblings from a given element
.parentElement.parentElement.parentElement... etc. You can use this object to find out the parent element and keep moving up the chain 
.children will give you a HTML collection off all the children 
.nextSibling and .previousSibling will give text nodes 
.nextElementSibling and previousElementSibling will give the next element down the HTML collection 

## Append and AppendChild 
document.createElement(); creating new elements from scratch 
node.appendChild(); this will put a new element on the webpage. document, then parent element then appendChild and (new node object (element, id or class)in parenthsis)
.append() is an easy way to add in text to an element 
.prepend() will send that element to the front of the children elements ...
    does not work on internet explorer
element.insertAdjacentElement(position, element); 
    'beforebegin'= before target element 
     'afterbegin'= Just inside the targetElement, before its first child 
     'beforeend'= Just inside the targeElement, after its last child 
      'afterend'= After the targetElement itself  
.childNode.after() = insert element after another element 
    Not supported by internet explorer 
.childNode.before() = insert elemnt befoe another element 
    Not supported by internet explorer

## removeChild & remove 
create a const for the element that is getting removed 
then use 
example... to get ride of b 
b.parentElement.removeChild(b). 
Have to find out the parent element to remove the element you want 
or you can use .remove, but it is not supported by internet explorer
