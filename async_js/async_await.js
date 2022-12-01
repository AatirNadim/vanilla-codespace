const posts = [
    {
        title: 'post one',
        body : 'this is the body of post one'
    },
    {
        title: 'post two',
        body : 'this is the body of post two'
    }
]
const getPosts = () => {
    let res= '';
    setTimeout(() => {
        posts.forEach(post => {
            res += `<li>${post.body}</li>`
        })
        const ul = document.querySelector('.ul__main')
        ul.innerHTML= res;
    }, 2000);
}
const createPosts = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const err = false;
            if(!err) resolve('workin just fine')
            else reject('error has occured')
        }, 1000)   
    })
}

const init = async () => {
    await createPosts({
        title : 'post three',
        body : 'this is the body of post three'
    })

    console.log('this logging command will execute after the await statement has been interpreted since the createPosts() function returns a promise')
    await getPosts();
}

init()