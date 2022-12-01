const posts = [
    {title : 'post one',
        body: 'this is post one'
    },
    {title : 'post two',
        body: 'this is post two'
    },
]

const getPosts = () => {
    setTimeout(() => {
        let res = '';    
        posts.forEach((post) => {
            res += `<li>${post.body}</li>`
        })
        const ul = document.querySelector('.ul__main')
        ul.innerHTML = res;
    }, 1000)
}

const createPosts = (post, callback) => {
    setTimeout(() => {
        posts.push(post);
        callback();
        console.log('check the nested settimeout')
    }, 2000); //this, here, is the reason the third post does not go up on the web page. although, the posts array, now has three posts, the rendition of posts array, displayed in the dom element only had two, because of less time delay
}

const bttnval = document.querySelector('.bttn__main')
// bttnval.addEventListener('click', getPosts)
createPosts({
    title : 'title 3',
    body : 'this is the body of the 3rd post'
}, getPosts);
// getPosts();

