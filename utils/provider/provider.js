const userRegister = (nameApi) =>{
    fetch()
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
