export const All = async () => {
    const data = await fetch(`${ process.env.BASE_URL }/api/users/selectAll`, {
        method: 'GET',
        headers: {
            'Authorization': process.env.BASE_TOKEN
        }
    })

    const response = await data.json()

    return {
        state: response.status != true ? 500 : 200,
        data: response
    }
}

export const UserByName = async (name) => {
    const data = await fetch(`${ process.env.BASE_URL }/api/users/getUserbyName/${ name }`, {
        method: 'GET',
        headers: {
            'Authorization': process.env.BASE_TOKEN
        }
    })

    const response = await data.json()

    return {
        state: response.status != true ? 500 : 200,
        data: response
    }
}

export const UpdateUser = async (user) => {
    const data = await fetch(`${ process.env.BASE_URL }/api/users/updateUser`, {
        method: 'PUT',
        headers: {
            'Authorization': process.env.BASE_TOKEN
        },
        body: JSON.stringify(user)
    })

    const response = await data.json()

    return {
        state: response.status != true ? 500 : 200,
        data: response
    }
}

export const CreateUser = async (user) => {
    const data = await fetch(`${ process.env.BASE_URL }/api/users/create`, {
        method: 'POST',
        headers: {
            'Authorization': process.env.BASE_TOKEN
        },
        body: JSON.stringify(user)
    })

    const response = await data.json()

    return {
        state: response.status != true ? 500 : 200,
        data: response
    }
}

export const LoginUser = async (user) => {
    const data = await fetch(`${ process.env.BASE_URL }/api/users/login`, {
        method: 'POST',
        headers: {
            'Authorization': process.env.BASE_TOKEN
        },
        body: JSON.stringify(user)
    })

    const response = await data.json()

    return {
        state: response.status != true ? 500 : 200,
        data: response
    }
}