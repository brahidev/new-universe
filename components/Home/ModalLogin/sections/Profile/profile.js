import {motion} from "framer-motion"
import {allImages} from "../../../../../utils/importAllImages"
import {InputCustom,InputSelect} from '../../../../Input/input'
import Extern from '../Extern'
import { useState,useEffect } from 'react'
import { regExpInputs } from '../../../../../utils/regExp'
import { userRegister,userUpdate } from "../../../../../utils/provider/provider"
import { getCookie, Loggout } from '../../../../../utils/cookies'

const Profile = ({setIsLogin, setIsRegister, setIsEntry, setProfile, setError, setErrorMessage}) => {

    const [dataForm, setDataForm] = useState({userName:'', password:'', confirmpassword:'', email:'', age:0, genero:'', languaje:'', country:'', coilid:''});

    useEffect(()=>{
        let dataUser = getCookie('user')
        if(dataUser && dataUser.length > 0){
            let userObj = JSON.parse(dataUser)
            setDataForm({
                userName:userObj.userName, 
                password:userObj.password,
                confirmpassword:userObj.confirmpassword,
                email:userObj.email,
                age:userObj.age,
                genero:userObj.genero,
                languaje:userObj.languaje,
                country:userObj.country,
                coilid:userObj.coilid
            })
        }
    },[])

    const showLogin = ()=>{
        setIsLogin(true);
        setIsEntry(false)
    }

    const sendNotification = (message) => {
        setError(true)
        setErrorMessage([...[message]])
        return;
    }

    const sendData = async(e) => {
        e.preventDefault();
        
        if(!regExpInputs.regExpUserName.test(dataForm.userName)){
            dataForm.userName == '' ? sendNotification({text:'Usuario vacío',typeToast:"danger"}) : sendNotification({text:'Usuario incorrecto',typeToast:"danger"})
            return;
        }
        if(!regExpInputs.regExpPassword.test(dataForm.password)){
            dataForm.password == '' ? sendNotification({text:'Contraseña vacía',typeToast:"danger"}) : sendNotification({text:'Contraseña incorrecta',typeToast:"danger"})
            return;
        }
        if(dataForm.confirmpassword){
            if(dataForm.confirmpassword == '') {
                sendNotification({text:'Confirma contraseña',typeToast:"danger"}) 
                return;
            }
            if(dataForm.confirmpassword !== dataForm.password){
                sendNotification({text:'Contraseñas no coinciden',typeToast:"danger"})
                return;
            }
        } 
        let json = new Object(dataForm)
        delete dataForm.email
        delete dataForm.age
        delete dataForm.genero
        delete dataForm.languaje
        delete dataForm.country
        delete dataForm.coilid
        let dataUser = getCookie('user')
        if(dataUser && dataUser.length > 0){
            const {confirmpassword,password,userName} = dataForm
            let body = {
                "id":JSON.parse(dataUser).id,
                "password":password,
                "username":userName,
                "json":JSON.stringify(json)
            }
            let registerData = await userUpdate(body);
            if(registerData.status === true){
                sendNotification({text:'Actualización completado',typeToast:"sucess"})
                showLogin()
            }else if(registerData.status === false){
                sendNotification({text:'Error inesperado',typeToast:"warning"})
                return;
            }
        }
    }

    return(
        <>
            <span className="text-blue-900 text-center block font-['Sniglet'] mx-[auto] text-3xl">Profile</span>
            <form onSubmit={ sendData }>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.1 }}
                    style={{
                        marginTop: '10%',
                        fontSize: '100%',
                        width: '12rem',
                        marginInline: 'auto'
                    }}
                >
                    <InputCustom 
                        type="text"
                        value={dataForm.userName}
                        placeholder="Nickname"
                        label=""
                        name="nickname"
                        classInput="InputText"
                        classForm="login"
                        onChange={(e)=> setDataForm({
                            userName:e.target.value, 
                            password:dataForm.password, 
                            confirmpassword:dataForm.confirmpassword, 
                            email:dataForm.email, 
                            age:dataForm.age, 
                            genero:dataForm.genero, 
                            languaje:dataForm.languaje, 
                            country:dataForm.country, 
                            coilid:dataForm.coilid
                        }) }            
                    />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.1 }}
                    style={{
                        marginButton: '20%',
                        fontSize: '100%',
                        width: '12rem',
                        marginInline: 'auto',
                        marginBlock: '1rem'
                    }}
                >
                    <InputCustom 
                        type="text"
                        value={dataForm.password}
                        placeholder="Password"
                        label=""
                        name="password"
                        classInput="InputText"
                        classForm="login"
                        onChange={(e)=> setDataForm({
                            userName:dataForm.userName, 
                            password:e.target.value, 
                            confirmpassword:dataForm.confirmpassword, 
                            email:dataForm.email, 
                            age:dataForm.age, 
                            genero:dataForm.genero, 
                            languaje:dataForm.languaje, 
                            country:dataForm.country, 
                            coilid:dataForm.coilid
                        }) } 
                    />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.1 }}
                    style={{
                        marginButton: '20%',
                        fontSize: '100%',
                        width: '12rem',
                        marginInline: 'auto',
                        marginBlock: '1rem'
                    }}
                >
                    <InputCustom 
                        type="text"
                        value={dataForm.confirmpassword}
                        placeholder="Confirm Password"
                        label=""
                        name="password"
                        classInput="InputText"
                        classForm="login"
                        onChange={(e)=> setDataForm({
                            userName:dataForm.userName, 
                            password:dataForm.password, 
                            confirmpassword:e.target.value, 
                            email:dataForm.email, 
                            age:dataForm.age, 
                            genero:dataForm.genero, 
                            languaje:dataForm.languaje, 
                            country:dataForm.country, 
                            coilid:dataForm.coilid
                        }) }                     />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.1 }}
                    style={{
                        marginButton: '20%',
                        fontSize: '100%',
                        width: '12rem',
                        marginInline: 'auto',
                        marginBlock: '1rem'
                    }}
                >
                    <InputCustom 
                        type="email"
                        value={dataForm.email}
                        placeholder="Email"
                        label=""
                        name="email"
                        classInput="InputText"
                        classForm="login"
                        onChange={(e)=> setDataForm({
                            userName:dataForm.userName, 
                            password:dataForm.password, 
                            confirmpassword:dataForm.confirmpassword, 
                            email:e.target.value, 
                            age:dataForm.age, 
                            genero:dataForm.genero, 
                            languaje:dataForm.languaje, 
                            country:dataForm.country, 
                            coilid:dataForm.coilid
                        }) }     
                        disabled="true"
                    />
                </motion.div>
                <div className="flex flex-row w-[85%] justify-around">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.1 }}
                        style={{
                            marginButton: '20%',
                            fontSize: '100%',
                            width: '3rem',
                            marginBlock: '1rem'
                        }}
                    >
                        <InputCustom 
                            type="number"
                            value={dataForm.age}
                            placeholder="Age"
                            label=""
                            name="age"
                            classInput="InputTextMedium"
                            classForm="login"
                            onChange={(e)=> setDataForm({
                                userName:dataForm.userName, 
                                password:dataForm.password, 
                                confirmpassword:dataForm.confirmpassword, 
                                email:dataForm.email, 
                                age:e.target.value, 
                                genero:dataForm.genero, 
                                languaje:dataForm.languaje, 
                                country:dataForm.country, 
                                coilid:dataForm.coilid
                            }) }                
                            disabled="true"         
                        />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.1 }}
                        style={{
                            marginButton: '20%',
                            fontSize: '100%',
                            width: '3rem',
                            marginBlock: '1rem'
                        }}
                    >
                        <InputSelect
                            value={dataForm.genero}
                            optionsValues={[
                                {value:'',name:'Gender'},
                                {value:'M',name:'Male'},
                                {value:'F',name:'Female'}
                            ]} 
                            positionDefault={1}
                            classSelect={''}
                            functionOnchange={(e)=>{setDataForm({
                                userName:dataForm.userName, 
                                password:dataForm.password, 
                                confirmpassword:dataForm.confirmpassword, 
                                email:dataForm.email, 
                                age:dataForm.age, 
                                genero:e.target.value, 
                                languaje:dataForm.languaje, 
                                country:dataForm.country, 
                                coilid:dataForm.coilid
                            })} }
                            disabled="true"
                        />
                    </motion.div>
                </div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.1 }}
                    style={{
                        marginButton: '20%',
                        fontSize: '100%',
                        width: '12rem',
                        marginInline: 'auto',
                        marginBlock: '1rem'
                    }}
                >
                    <InputSelect
                        value={dataForm.languaje}
                        optionsValues={[
                            {value:'',name:'Languaje'},
                            {value:'Spanish',name:'Spanish'},
                            {value:'English',name:'English'}
                        ]} 
                        positionDefault={1}
                        classSelect={'InputSelectLarge'}
                        functionOnchange={(e)=>{setDataForm({
                            userName:dataForm.userName, 
                            password:dataForm.password, 
                            confirmpassword:dataForm.confirmpassword, 
                            email:dataForm.email, 
                            age:dataForm.age, 
                            genero:dataForm.genero, 
                            languaje:e.target.value, 
                            country:dataForm.country, 
                            coilid:dataForm.coilid
                        })} }
                        disabled="true"
                    />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.1 }}
                    style={{
                        marginButton: '20%',
                        fontSize: '100%',
                        width: '12rem',
                        marginInline: 'auto',
                        marginBlock: '1rem'
                    }}
                >
                    <InputCustom 
                        type="text"
                        value={dataForm.country}
                        placeholder="Country/Region"
                        label=""
                        name="password"
                        classInput="InputText"
                        classForm="login"
                        onChange={(e)=> setDataForm({
                            userName:dataForm.userName, 
                            password:dataForm.password, 
                            confirmpassword:dataForm.confirmpassword, 
                            email:dataForm.email, 
                            age:dataForm.age, 
                            genero:dataForm.genero, 
                            languaje:dataForm.languaje, 
                            country:e.target.value, 
                            coilid:dataForm.coilid
                        }) }               
                        disabled="true"
                    />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.1 }}
                    style={{
                        marginButton: '20%',
                        fontSize: '100%',
                        width: '12rem',
                        marginInline: 'auto',
                        marginBlock: '1rem'
                    }}
                >
                    <InputCustom 
                        type="text"
                        value={dataForm.coilid}
                        placeholder="Coil ID"
                        label=""
                        name="password"
                        classInput="InputText"
                        classForm="login"
                        onChange={(e)=> setDataForm({
                            userName:dataForm.userName, 
                            password:dataForm.password, 
                            confirmpassword:dataForm.confirmpassword, 
                            email:dataForm.email, 
                            age:dataForm.age, 
                            genero:dataForm.genero, 
                            languaje:dataForm.languaje, 
                            country:dataForm.country, 
                            coilid:e.target.value
                        }) }    
                        disabled="true"             
                    />
                </motion.div>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.1 }}
                    className="btnBlue"
                    style={{
                        marginTop: '10%',
                        fontSize: '100%',
                        width: '14rem',
                        marginInline: 'auto'
                    }}
                    type='submit'
                >
                    <span>
                        Actualizar
                    </span>
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.1 }}
                    className="btnRed"
                    onClick={()=>{Loggout(); setIsLogin(true); setProfile(false)}}
                    style={{
                        marginTop: '10%',
                        fontSize: '100%',
                        width: '14rem'
                    }}
                    type='button'
                >
                    <span>
                        Cerrar sesión
                    </span>
                </motion.button>
            </form>
            <Extern/>
        </>
    )
}

export default Profile