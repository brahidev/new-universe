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
