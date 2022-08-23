export const Auth = async () => {
    const data = await fetch(`${ process.env.BASE_URL }/api/login_check`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*'
        },
        body: JSON.stringify({ username: process.env.USERLOGIN, password: process.env.PASS })
    })

    if (data.status != 200) {
        return {
            state: data.status,
            data: 'Error Auth Token'
        }
    }

    const response = await data.json()

    return {
        state: data.status,
        data: response
    }
}