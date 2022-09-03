import {useState,useEffect} from "react"
import { motion } from "framer-motion"
import Backdrop from "../Backdrop"
import Error from '../Error/Error';
import {regExpInputs} from '../../utils/regExp'
import {userRegister} from "../../utils/provider/provider"
import {animationsFramer} from '../../utils/effectsFramerMotion'

const Modal = ({ handleClose, setError, setErrorMessage, content }) => {
    
    const [dataForm, setDataForm] = useState({userName:'', password:'', name:'', age:0, email:''});

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
        if(!regExpInputs.regExpName.test(dataForm.name)){
            dataForm.name == '' ? sendNotification({text:'Nombre vacío',typeToast:"danger"}) : sendNotification({text:'Nombre incorrecto',typeToast:"danger"})
            return;
        }
        if(!regExpInputs.regExpAge.test(dataForm.age)){
            dataForm.age == '' ? sendNotification({text:'Edad vacío',typeToast:"danger"}) : sendNotification({text:'Edad incorrecta',typeToast:"danger"})
            return;
        }
        if(!regExpInputs.regExpEmail.test(dataForm.email)){
            dataForm.email == '' ? sendNotification({text:'Correo vacío',typeToast:"danger"}) : sendNotification({text:'Correo incorrecto',typeToast:"danger"})
            return;
        }        
        let registerData = await userRegister(dataForm);
        console.log('REGISTRO',registerData)
        if(registerData.status === true){
            sendNotification({text:'Registro completado',typeToast:"sucess"})
            handleClose()
        }else if(registerData.status === false){
            if(registerData.message.indexOf('registrado') > -1){
                sendNotification({text:'Usuario ya se encuentra registrado',typeToast:"warning"})
                return;
            }else{
                sendNotification({text:'Error inesperado',typeToast:"warning"})
                return;
            }
        }
    }

    return (
        <Backdrop onclick={ handleClose }>
            <motion.div
                onClick={ (e) => e.stopPropagation() }
                className="h-auto m-auto p-10 rounded-lg flex flex-col items-center shadow-lg shadow-indigo-500/40 bg-neutral-200"
                variants={ animationsFramer.dropFromUp }
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <form onSubmit={ sendData } className="flex flex-col">
                    <div className="pb-5">
                        <motion.input
                        type="text"
                        placeholder="Usuario"
                        className="p-2 rounded-xl text-white bg-indigo-700 shadow-lg outline-0 placeholder:italic placeholder:text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onChange={(e)=> setDataForm({userName:e.target.value, password:dataForm.password, name:dataForm.name, age:dataForm.age, email:dataForm.email}) }
                        />
                    </div>
                    <div className="pb-5">
                        <motion.input
                        type="password"
                        placeholder="Contraseña"
                        className="p-2 rounded-xl text-white bg-indigo-700 shadow-lg outline-0 placeholder:italic placeholder:text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onChange={(e)=> setDataForm({userName:dataForm.userName, password:e.target.value, name:dataForm.name, age:dataForm.age, email:dataForm.email}) }
                        />
                    </div>
                    <div className="pb-5">
                        <motion.input
                        type="text"
                        placeholder="Nombres"
                        className="p-2 rounded-xl text-white bg-indigo-700 shadow-lg outline-0 placeholder:italic placeholder:text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onChange={(e)=> setDataForm({userName:dataForm.userName, password:dataForm.password, name:e.target.value, age:dataForm.age, email:dataForm.email}) }
                        />
                    </div>
                    <div className="pb-5">
                        <motion.input
                        type="number"
                        placeholder="Edad"
                        className="p-2 rounded-xl text-white bg-indigo-700 shadow-lg outline-0 placeholder:italic placeholder:text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onChange={(e)=> setDataForm({userName:dataForm.userName, password:dataForm.password, name:dataForm.name, age:e.target.value, email:dataForm.email}) }
                        />
                    </div>
                    <div className="pb-5">
                        <motion.input
                        type="email"
                        placeholder="Correo"
                        className="p-2 rounded-xl text-white bg-indigo-700 shadow-lg outline-0 placeholder:italic placeholder:text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onChange={(e)=> setDataForm({userName:dataForm.userName, password:dataForm.password, name:dataForm.name, age:dataForm.age, email:e.target.value}) }
                        />
                    </div>
                    <div className="flex flex-row justify-center pt-5">
                        <motion.button
                        className="p-2 w-20 mr-2 italic text-center text-white rounded-lg shadow-lg border-solid border-2 border-indigo-700 bg-indigo-700"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type="submit"
                        >
                            Registrar
                        </motion.button>
                        <motion.button
                        className="p-2 w-20 italic text-center text-white rounded-lg shadow-lg border-solid border-2 border-indigo-700 bg-indigo-700"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleClose}
                        type="button"
                        >
                            Cerrar
                        </motion.button>
                    </div>
                </form>
            </motion.div>
        </Backdrop>
    )
}

export default Modal