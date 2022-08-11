import Headers from '../index'

export const All = async () => {
    const headers = await Headers()
    if (headers.state != 200) {
        return {
            state: headers.state,
            data: headers.data
        }
    }

    const data = await fetch(`${ process.env.BASE_URL }/api/characters/findAll`, {
        method: 'GET',
        headers
    })

    const response = await data.json()

    return {
        state: data.status,
        data: response
    }
}