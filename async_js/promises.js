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
createPosts(
    {
        title: 'title 3',
        body : 'this is the body of the third post'
    }
).then(getPosts)
.catch(err => {
    console.log(err)
})
// when this method is called, the text (the reject function param) is displayed as common text and not an error response
// createPosts(
//     {
//         title : 'thirs post',
//         body : 'this is the body of the third post'
//     }, getPosts
// )
