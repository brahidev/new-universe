const userRegister = async(dataForm) =>{
    if(typeof dataForm !== 'object' || !dataForm) return false;
    
    const body = {
        "username":dataForm.userName,
        "password":dataForm.password,
        "json": JSON.stringify(dataForm)
    }

    const response = await fetch('/api/users',{
        method: 'POST',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    })
    let dataResponse = await response.json();
    switch (dataResponse.status){
        case(201):
            console.log('Fetch correct and registry data.')
        break;
        case(200):
            console.log('Fetch correct but no registry data.')
        break;
        default:
            console.log(`Error! impossible to resolve the request. ${dataResponse}`)
        break;
    }
}

export {userRegister};
