import {motion} from "framer-motion"
import {allImages} from "../../../../../utils/importAllImages"
import {InputCustom,InputSelect} from '../../../../Input/input'
import Extern from '../Extern'
import { useState } from 'react'
import { regExpInputs } from '../../../../../utils/regExp'
import { userRegister } from "../../../../../utils/provider/provider"

const Register = ({setIsLogin, setIsRegister, setIsEntry, setProfile, setError, setErrorMessage}) => {

    const [dataForm, setDataForm] = useState({userName:'', password:'', confirmpassword:'', email:'', age:0, genero:'', languaje:'', country:'', coilid:''});

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
        if(!regExpInputs.regExpEmail.test(dataForm.email)){
            dataForm.email == '' ? sendNotification({text:'Correo vacío',typeToast:"danger"}) : sendNotification({text:'Correo incorrecto',typeToast:"danger"})
            return;
        }
        if(!regExpInputs.regExpAge.test(dataForm.age)){
            dataForm.age == '' ? sendNotification({text:'Edad vacío',typeToast:"danger"}) : sendNotification({text:'Edad incorrecta',typeToast:"danger"})
            return;
        }
        if(dataForm.genero){
            if(dataForm.genero == ''){ 
                sendNotification({text:'Selecciona género',typeToast:"danger"}) 
                return;
            }
        }      
        if(dataForm.languaje){
            if(dataForm.languaje == ''){ 
                sendNotification({text:'Selecciona idioma',typeToast:"danger"}) 
                return;
            }
        }    
        if(dataForm.country){
            if(dataForm.country == ''){ 
                sendNotification({text:'País vacío',typeToast:"danger"}) 
                return;
            }
        }   
        let registerData = await userRegister(dataForm);
        if(registerData.status === true){
            sendNotification({text:'Registro completado',typeToast:"sucess"})
            showLogin()
        }else if(registerData.status === false){
            if(registerData.message.indexOf('registrado') > -1){
                sendNotification({text:'Usuario ya se encuentra registrado',typeToast:"warning"})
                showLogin()
                return;
            }else{
                sendNotification({text:'Error inesperado',typeToast:"warning"})
                return;
            }
        }
    }

    return(
        <>
            <span className="text-blue-900 text-center block font-['Sniglet'] mx-[auto] text-3xl">Register</span>
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
                        //value={''}
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
                        //value={''}
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
                        //value={''}
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
                        //value={''}
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
                        }) }                     />
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
                            //value={''}
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
                        //value={''}
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
                        //value={''}
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
                    />
                </motion.div>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.1 }}
                    className="btnRed"
                    style={{
                        marginTop: '20%',
                        fontSize: '100%',
                        width: '12rem'
                    }}
                    type='submit'
                >
                    <span>
                        Register
                    </span>
                </motion.button>
            </form>
            <Extern/>
        </>
    )
}

export default Register