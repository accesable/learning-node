# Javascript and ES6 break-through
1. var,let ,const
2. Template String
3. Object and JSON
4. Destructing assignment and Renaming Variables in it
5. Skipping Elements
6. Rest Syntax
7. Higher order function and arrow function 


# Node.js Architecture
- Single-Threaded and Non-blocking I/O
- Event loop
- Modules
- Event emitter and listener
    ## Single-Threaded
  - Event loop to handle mutiple requests
  - handle large number of concurrent requests
  - Single-threaded execution can be a bottleneck for CPU-intensive tasks
  - Node.js provides ways to offload CPU-intensive tasks to other processes or threads.
  
![pic1](./images/p1.png)

![pic2](./images/p2.png)

 ## CallBack
 > This is a function which will be passed as argument to another function and intended to be executed after the completion of that function (the function which receive the callback)
```javascript
function prepareBread(callback) {
  setTimeout(function () {
    console.log("Bread is ready!");
    callback();
  }, 1000);
}

function addCheese() {
  console.log("Cheese added!");
}

prepareBread(addCheese);

```
 ## CallBack Hell
```javascript
prepareBread(function () {
  addCheese(function () {
    addTomato(function () {
      addLettuce(function () {
        // And it goes on...
      });
    });
  });
});

```
 ## Promise
```javascript
function prepareBread() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Bread is ready!");
      resolve();
    }, 1000);
  });
}

function addCheese() {
  console.log("Cheese added!");
}

prepareBread()
  .then(addCheese)
  .then(function () {
    console.log("Sandwich is ready!");
  });

```