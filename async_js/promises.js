const posts = [
    { title: "post one", body: "this is the body of post 1" },
    {
        title: "post two",
        body: "this is the body of post 2",
    },
];
const getPosts = () => {
    let res = "";
    setTimeout(() => {
        const ul = document.querySelector(".ul__main");
        posts.forEach((post) => {
            res += `<li>${post.body}</li>`;
        });
        ul.innerHTML = res;
    }, 1000);
};

const createPosts = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const err = true;
            if (!err) resolve("async event handled successfully");
            else reject("some error has occured, this is the reject function param");
            // this is dispalyed as the wrong statement in the console, if the .catch method is not called
        }, 2000);
    });
};
// createPosts(
//     {
//         title: 'title 3',
//         body : 'this is the body of the third post'
//     }
// ).then(getPosts)
// .catch(err => {
//     console.log(err)
// })

const promise1 = new Promise((resolve, reject) => {
    reject('in the reject param')
    resolve('this is the resolve function parameter');
})
const promise2 = new Promise((resolve, reject) => {
    resolve(10);
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 0, 'resolve param in settimeout')
})

Promise.all([promise1, promise2, promise3])
    .then(() => {
        console.log('this is the Promise.all kaam')
    })
    .catch(err => {
        console.log(err);
    })