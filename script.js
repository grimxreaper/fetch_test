fetch('https://reqres.in/api/users/23')
    .then(res => {
    if (res.ok) {
        console.log('Success')
    } else {
        console.log('Not Successful')
    }
    })
    .then(data => console.log(data))

