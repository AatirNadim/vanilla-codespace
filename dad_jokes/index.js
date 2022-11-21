const joke_container = document.getElementById('joke__con')
const joke_button = document.getElementById('joke__btn');
// joke_button.innerHTML= 'dsd'


const generateJoke = async () => {
    const config = {
        headers : {
            Accept : 'application/json',
        },
    }
    try {    
        // const res_json = fetch('https://icanhazdadjoke.com');
        // res_json
        // .then(response => {
        //     console.log(response)
        //     joke_container.innerHTML = response.json.joke;
        // })
        // .catch(err => {
        //     alert('Some error has occured');
        //     console.log(err)
        // })
        const res = await fetch('https://icanhazdadjoke.com/', config);
        const data = await res.json();
        console.log(data);
        joke_container.innerHTML = data.joke;

    } catch(err) {
        alert('error connecting to remote server');
        console.log('error connecting to remote server');
    }
    
}
joke_button.addEventListener('click', generateJoke);
generateJoke();