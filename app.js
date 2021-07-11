 document.addEventListener("DOMContentLoaded", () => {
    //  let promise = new Promise ((resolve, reject) => {
    //      let a = 1 + 1;

    //      if (a === 3) {
    //          resolve(5+6); 
    //      } else {
    //          reject({status: "Failure"});
    //      };
    //  });

    //  console.log(promise);

    //  promise.then((w) => console.log(w)).catch((error) => console.log(error));

    fetch("https://jsonplaceholder.typicode.com/users")
        .then((e) => e.json(e))
        .then((data) => console.log(data))
        .catch((e) => console.log(e));

 });