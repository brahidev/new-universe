import Headers from '../index'

export const All = async () => {
    const headers = await Headers()
    if (headers.state != 200) {
        return {
            state: headers.state,
            data: headers.data
        }
    }

    const data = await fetch(`${ process.env.BASE_URL }/api/users/selectAll`, {
        method: 'GET',
        headers
    })

    const response = await data.json()

    return {
        state: data.status,
        data: response
    }
}

export const UserByName = async (name) => {
    const headers = await Headers()
    if (headers.state != 200) {
        return {
            state: headers.state,
            data: headers.data
        }
    }

    const data = await fetch(`${ process.env.BASE_URL }/api/users/getUserbyName/${ name }`, {
        method: 'GET',
        headers
    })

    const response = await data.json()

    return {
        state: response.status != true ? 500 : 200,
        data: response
    }
}

export const UpdateUser = async (user) => {
    const headers = await Headers()
    if (headers.state != 200) {
        return {
            state: headers.state,
            data: headers.data
        }
    }

    const data = await fetch(`${ process.env.BASE_URL }/api/users/updateUser`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(user)
    })

    const response = await data.json()

    return {
        state: response.status != true ? 500 : 200,
        data: response
    }
}

export const CreateUser = async (user) => {
    const headers = await Headers()
    if (headers.state != 200) {
        return {
            state: headers.state,
            data: headers.data
        }
    }


    const data = await fetch(`${ process.env.BASE_URL }/api/users/create`, {
        method: 'POST',
        headers,
        body: JSON.stringify(user)
    })

    const response = await data.json()

    return {
        state: response.status != true ? 500 : 200,
        data: response
    }
}

export const LoginUser = async (user) => {
    const headers = await Headers()
    if (headers.state != 200) {
        return {
            state: headers.state,
            data: headers.data
        }
    }

    const data = await fetch(`${ process.env.BASE_URL }/api/users/login`, {
        method: 'POST',
        headers,
        body: JSON.stringify(user)
    })

    const response = await data.json()

    return {
        state: response.status != true ? 500 : 200,
        data: response
    }
}