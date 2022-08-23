const userRegister = async(dataForm) =>{
    if(typeof dataForm !== 'object' || !dataForm) return false;

    const body = {
        "username":dataForm.userName,
        "password":dataForm.password,
        "json": JSON.stringify(dataForm)
    }

    const response = await fetch('/api/users',{
        method: 'POST',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    })
    let dataResponse = await response.json();
    switch (dataResponse.status){
        case(201):
            console.log('Fetch correct and registry data.')
        break;
        case(200):
            console.log('Fetch correct but no registry data.')
        break;
        default:
            console.log(`Error! impossible to resolve the request. ${dataResponse}`)
        break;
    }
}

const loginUser = async (user) =>{
    const url = "/api/user/login"
    const data = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: user.user,
            password: user.pass
        })
    })

    return await data.json()
}

export {
    userRegister,
    loginUser
};
