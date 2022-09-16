import { useState } from "react"
import {motion} from "framer-motion"
import {allImages} from "../../../../../utils/importAllImages"
import {InputCustom} from '../../../../Input/input'
import Extern from '../Extern'
import {regExpInputs} from '../../../../../utils/regExp'
import { storeLoginCookie, checkLoginCookie } from '../../../../../utils/cookies'
import { loginUser } from '../../../../../utils/provider/provider'
import Loader from '../../../../Loader/Loader';


const Entry = ({setIsLogin, setIsRegister, setIsEntry, setProfile, setError, setErrorMessage }) => {

    const [ user, setUser ] = useState({ user: '', pass: '' })
    const [ loading, setLoading ] = useState(false)

    const showLogin = ()=>{
        setIsLogin(true);
        setIsEntry(false)
    }

    const sendNotification = (message) => {
        setError(true)
        setErrorMessage([...[message]])
        return;
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!regExpInputs.regExpUserName.test(user.user)){
            user.user == '' ? sendNotification({text:'Usuario vacío',typeToast:"danger"}) : sendNotification({text:'Usuario incorrecto',typeToast:"danger"})
            return;
        }
        if(!regExpInputs.regExpPassword.test(user.pass)){
            user.pass == '' ? sendNotification({text:'Contraseña vacía',typeToast:"danger"}) : sendNotification({text:'Contraseña incorrecta',typeToast:"danger"})
            return;
        }
        let loginData = await loginUser(user)
        console.log('LOGIN',loginData)
        if(loginData.data.status){
            storeLoginCookie()
            setProfile(true)
            setIsEntry(false)
            setIsLogin(false)
            setIsRegister(false)
        }else{
            sendNotification({text:'Usuario o contraseña incorrecto',typeToast:"danger"})
        }
    }

    return(
        <>
            { loading && <Loader /> }
            <div className="bg-white w-[15rem] flex flex-col justify-center mx-[auto] mt-[4rem] px-[2rem] rounded-[1rem]">
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    src={allImages['NewUniverseLogo.png'].default.src}
                    style={{
                        width: '5rem',
                        height: '5rem',
                        position: 'relative',
                        margin: 'auto' 
                    }}
                />
                <span className="text-white stroke-1 text-center whitespace-pre-line borderTextBlue font-['Sniglet'] text-3xl">New Universe</span>
            </div>
            <form onSubmit={ onSubmit }>        
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.1 }}
                    style={{
                        marginTop: '20%',
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
                        onChange={ (e) => setUser({ user: e.target.value, pass: user.pass }) }              
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
                        onChange={ (e) => setUser({ user: user.user, pass: e.target.value }) }           
                    />
                </motion.div>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.1 }}
                    className="btnBlueLogin"
                    style={{
                        marginTop: '20%',
                        fontSize: '100%',
                        width: '12rem'
                    }}
                    onClick={()=>{showLogin()}}
                >
                    <span>
                        Login
                    </span>
                </motion.button>
            </form>
            <Extern/>
        </>
    )
}

export default Entry