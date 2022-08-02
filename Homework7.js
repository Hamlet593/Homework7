// Ex. 1

// Write the delay function using Promise.
// For instance:
// functuin delay(ms) {
//  //your code
//  };
// delay(2000).then(() => alert('should show modal after 2 seconds'));

function delay(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
};
delay(2000).then(() => alert('should show modal after 2 seconds'));

// Ex. 2

// let urls = [
//     'https://validurl',
//     'https://validurl',
//     'https://invalidurl',
// ];

// Promise.all(urls.map(url => fetch(url)))
//     .then(responses => {
//         for (let response of responses) {
//             alert(response);
//         }
//     });
// If any of requests fails, the Promise.all rejects with the error, and we lose the results of
// all the other requests.
// Modify the code so that the array responses would include the response objects for
// successful fetches and error objects for failed ones.

let urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/users',
    'bad url',
];

let responses = urls.map(url => fetch(url));

Promise.all(responses).then(res => {
    for (let key of res) {
        if (key.status === 200) {
            alert('ok json');
        }
        else {
            alert('bad json');
        }
    }
});

// Rewrite the code using async/await instead of .then/catch.
// function loadJson(url) {
//     return fetch(url)
//         .then(response => {
//             if (response.status == 200) {
//                 return response.json();
//             } else {
//                 throw new Error(response.status);
//             }
//         })
// }
// loadJson('no-such-user.json').catch(alert);

async function loadJson(url) {
    let response = await fetch(url);
    if (response.status === 200) {
        return await response.json()
    }
    else {
        throw new Error(response.status);
    }
};

// loadJson('no-such-user.json').catch(console.log);

// We have a “regular” function f. How to call async function wait from it and use its result ?
//     async function wait() {
//         await new Promise(resolve => setTimeout(resolve, 1000));
//         return 10;
//     }
// function f() {
//     //your code
// }

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 10;
}

function f() {
    return wait().then(console.log);
};

f();