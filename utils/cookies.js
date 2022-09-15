const storeLoginCookie = () => {
    document.cookie = "logged=true"

    return `Cookie stored (logged)`
}

const checkLoginCookie = () => {
    const logged = document.cookie.split('=').filter(item => item === 'logged')

    if (logged.length) {
        return logged
    } else {
        return false
    }
}

const Loggout = () => {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

export {
    storeLoginCookie,
    checkLoginCookie,
    Loggout
}