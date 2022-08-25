const storeLoginCookie = () => {
    document.cookie = "logged=true"

    return `Cookie stored (logged)`
}

const checkLoginCookie = () => {
    const logged = document.cookie.split('=').filter(item => item === 'logged')

    return logged.length ? true : false
}

export {
    storeLoginCookie,
    checkLoginCookie
}