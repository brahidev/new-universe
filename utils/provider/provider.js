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
    return await response.json();
}

const userUpdate = async(dataForm) =>{
    if(typeof dataForm !== 'object' || !dataForm) return false;

    const response = await fetch('/api/users',{
        method: 'PUT',
        body: JSON.stringify(dataForm),
        headers: {'Content-Type': 'application/json'}
    })
    return await response.json();
}

const getUser = async(name) =>{
    if(typeof name !== 'string' || !name) return false;
    const response = await fetch(`/api/user/${name}`,{
        method: 'GET',
        headers: new Headers(),
        redirect: 'follow'
    })
    return await response.json();
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
    getUser,
    loginUser,
    userUpdate
};
