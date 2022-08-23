import { Auth } from './auth/'

export default Headers = async () => {
    const auth = await Auth()

    if (auth.state != 200) {
        return auth
    }

    return {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Authorization': `Bearer ${ auth.data.token }`,
        'state': auth.state
    }
}