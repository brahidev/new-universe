import Headers from '../index'

export const All = async () => {
    const headers = await Headers()
    if (headers.state != 200) {
        return {
            state: headers.state,
            data: headers.data
        }
    }

    const data = await fetch(`${ process.env.BASE_URL }/api/news/SelectAll`, {
        method: 'GET',
        headers
    })

    const response = await data.json()

    return {
        state: data.status,
        data: response
    }
}

export const FeedById = async (id) => {
    const headers = await Headers()
    if (headers.state != 200) {
        return {
            state: headers.state,
            data: headers.data
        }
    }

    const data = await fetch(`${ process.env.BASE_URL }/api/news/getNewsbyId/${ id }`, {
        method: 'GET',
        headers
    })

    const response = await data.json()

    return {
        state: data.status,
        data: response
    }
}

