import Headers from '../index'

export const All = async () => {
    const headers = await Headers()
    if (headers.state != 200) {
        return {
            state: headers.state,
            data: headers.data
        }
    }

    const data = await fetch(`${ process.env.BASE_URL }/api/games/getAllgames`, {
        method: 'GET',
        headers
    })

    const response = await data.json()

    return {
        state: data.status,
        data: response
    }
}

export const UserById = async (id) => {
    const headers = await Headers()
    if (headers.state != 200) {
        return {
            state: headers.state,
            data: headers.data
        }
    }

    const data = await fetch(`${ process.env.BASE_URL }/api/games/getGameById/${ id }`, {
        method: 'GET',
        headers
    })

    const response = await data.json()

    return {
        state: data.status,
        data: response
    }
}

export const UserByUser = async (user) => {
    const headers = await Headers()
    if (headers.state != 200) {
        return {
            state: headers.state,
            data: headers.data
        }
    }

    const data = await fetch(`${ process.env.BASE_URL }/api/games/getGameByUser/${ user }`, {
        method: 'GET',
        headers
    })

    const response = await data.json()

    return {
        state: data.status,
        data: response
    }
}

export const CreateGame = async (game) => {
    const headers = await Headers()
    if (headers.state != 200) {
        return {
            state: headers.state,
            data: headers.data
        }
    }

    const data = await fetch(`${ process.env.BASE_URL }/api/games/createGame`, {
        method: 'POST',
        headers,
        body: JSON.stringify(game)
    })

    const response = await data.json()

    return {
        state: data.status,
        data: response
    }
}

export const UpdateGame = async (game) => {
    const headers = await Headers()
    if (headers.state != 200) {
        return {
            state: headers.state,
            data: headers.data
        }
    }

    const data = await fetch(`${ process.env.BASE_URL }/api/games/updateGame`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(game)
    })

    const response = await data.json()

    return {
        state: data.status,
        data: response
    }
}