import {useState,useEffect} from "react"
import { motion } from "framer-motion"
import Backdrop from "../Backdrop"
import Error from '../Error/Error';
import {regExpInputs} from '../../utils/regExp'
import {userRegister} from "../../utils/provider/provider"
import {animationsFramer} from '../../utils/effectsFramerMotion'

const Modal = ({ handleClose, content }) => {
    
    const [dataForm, setDataForm] = useState({userName:'', password:'', name:'', age:0, email:''});
    const [ error, setError ] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState('')

    useEffect( () => {
        if ( errorMessage != '' ) {
            setTimeout(() => {
                setError(false)
                setErrorMessage('')
            }, 2000)
        }
    }, [errorMessage])

    const sendData = (e) => {
        e.preventDefault();
        const sendNotification = (message) => {
            setError(true)
            setErrorMessage(message)
            return;
        }
        if(!regExpInputs.regExpUserName.test(dataForm.userName)){
            sendNotification('NOMBRE MAL')
            return;
        }
        if(!regExpInputs.regExpPassword.test(dataForm.password)){
            sendNotification('CONTRASEÑA MAL')
            return;
        }
        if(!regExpInputs.regExpName.test(dataForm.name)){
            console.log('NOMBRE MAL')
            sendNotification('CONTRASEÑA MAL')
            return;
        }
        if(!regExpInputs.regExpAge.test(dataForm.age)){
            console.log('EDAD MAL')
            sendNotification('CONTRASEÑA MAL')
            return;
        }
        if(!regExpInputs.regExpEmail.test(dataForm.email)){
            console.log('EMAIL MAL')
            sendNotification('CONTRASEÑA MAL')
            return;
        }

        return;
        userRegister(dataForm);
    }

    return (
        <Backdrop onclick={ handleClose }>
            <motion.div
                onClick={ (e) => e.stopPropagation() }
                className="w-1/3 h-auto m-auto p-10 rounded-lg flex flex-col items-center shadow-lg shadow-indigo-500/40 bg-neutral-200"
                variants={ animationsFramer.dropFromUp }
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <form onSubmit={ sendData } className="flex flex-col">
                    <div className="pb-5">
                        <motion.input
                        type="text"
                        placeholder="Username"
                        className="p-2 rounded-xl text-white bg-indigo-700 shadow-lg outline-0 placeholder:italic placeholder:text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onChange={(e)=> setDataForm({userName:e.target.value, password:dataForm.password, name:dataForm.name, age:dataForm.age, email:dataForm.email}) }
                        />
                    </div>
                    <div className="pb-5">
                        <motion.input
                        type="password"
                        placeholder="Password"
                        className="p-2 rounded-xl text-white bg-indigo-700 shadow-lg outline-0 placeholder:italic placeholder:text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onChange={(e)=> setDataForm({userName:dataForm.userName, password:e.target.value, name:dataForm.name, age:dataForm.age, email:dataForm.email}) }
                        />
                    </div>
                    <div className="pb-5">
                        <motion.input
                        type="text"
                        placeholder="Name"
                        className="p-2 rounded-xl text-white bg-indigo-700 shadow-lg outline-0 placeholder:italic placeholder:text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onChange={(e)=> setDataForm({userName:dataForm.userName, password:dataForm.password, name:e.target.value, age:dataForm.age, email:dataForm.email}) }
                        />
                    </div>
                    <div className="pb-5">
                        <motion.input
                        type="number"
                        placeholder="Age"
                        className="p-2 rounded-xl text-white bg-indigo-700 shadow-lg outline-0 placeholder:italic placeholder:text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onChange={(e)=> setDataForm({userName:dataForm.userName, password:dataForm.password, name:dataForm.name, age:e.target.value, email:dataForm.email}) }
                        />
                    </div>
                    <div className="pb-5">
                        <motion.input
                        type="email"
                        placeholder="Email"
                        className="p-2 rounded-xl text-white bg-indigo-700 shadow-lg outline-0 placeholder:italic placeholder:text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onChange={(e)=> setDataForm({userName:dataForm.userName, password:dataForm.password, name:dataForm.name, age:dataForm.age, email:e.target.value}) }
                        />
                    </div>
                    <div className="flex flex-row justify-center pt-5">
                        <button className="mr-2">
                            <motion.button
                            className="p-2 w-20 italic text-center text-white rounded-lg shadow-lg border-solid border-2 border-indigo-700 bg-indigo-700"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            >
                                Send
                            </motion.button>
                        </button>
                        <button>
                            <motion.button
                            className="p-2 w-20 italic text-center text-white rounded-lg shadow-lg border-solid border-2 border-indigo-700 bg-indigo-700"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleClose}
                            >
                                Close
                            </motion.button>
                        </button>
                    </div>
                </form>
                { error && <Error
                    message={ errorMessage === '' ? ['Todos los campos son obligatorios 🔐'] : [errorMessage] }
                />
                }   
            </motion.div>
        </Backdrop>
    )
}

export default Modal