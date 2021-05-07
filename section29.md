## what on earth are prototypes 
    - object prototypes 
    - objects have methods 
      - like arrays .splice .push and all of those 
    - using string.prototype.whatever 
      - You can make your own moethods 
      - string.prototype.yell = function() { return `omg! ${this.toUpperCase()}!!!!! aghghghgh!`}
        - "i hate you".yell() this will call the new method 
        - Not a good patter to follow but good demo of how protypes work 
## Into to object oriented programming 
    - Organizing code into distinct patterns and objects 
## Factory function
- Not commonly used 
- this is a function that makes an object  
  - Something that can bes used many times and help with working productivity
    - The example of turning rgb color into hex color and back again 
- Not the ideal method of making factory function 
## Constructor functions 
- function Color(r, g, b) {
- this.r = r; 
- this.g = g;
- this.b = b}
- console.log(this); 
- }
    - new Color(224, 49, 100); 
  - Without the new color call, the function above does not work, its undefined. 
    - with it, js automatically creates a object and a return behinds the scenes to make it work...
      - Cuts down on the bulk of the code 
  
- Color.prototype.rgb = function() {
- const {r, g, b} = this; 
- return `rgb(${r}, ${g}, ${b}); 
- }; 
  - you have to use the color.prototype.rgb to call the object and use it outside the originial fucntion
  - since everything is on the shared prototype, they can use the same methods 
  
- Do not use arrow function for constructor because you can run into trouble, use standard function 
## JavaScript classes 
-  class Color {
-  consturctor(r,g,b, name) {
-  this.r = r; 
-  this.g = g; 
-  this.b = b;
-  this.name = name; 
-  }
-   greet() {
-   return `hello from ${this.name}!`
-   }
-  }
-  const c1 = new Color(255, 67, 89, 'tomato'); 

to call it you,
- c1.greet()
- an theat will comeback with " hello from tomato!"

- Make the first letter capitalized to signify that it is a constructor function 

## More class practice 
- adding to the color class 
- focus on this. and the constructor and the inner play inside the class and function 


## Extends and super keywords 
- both have to do with subclassing 
- const monty = new Cat('monty', 2)
    - This will set the name and age to monty and 2 
- monty.eat(); this will call "monty is eating!" That is what we called in the dom 
- Extend allows us to call a nutral name for the constuctor class and then use that constructor for our different objects. That way do not have to create two different constructor classes for cats and dogs 
- Super will be used to take information from the first constuctor if you want to add more information under an new constructor like adding 9 lives to the cat constructor 
