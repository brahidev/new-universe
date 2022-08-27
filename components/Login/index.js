import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../Modal/register';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import { loginUser } from '../../utils/provider/provider'
import { storeLoginCookie, checkLoginCookie } from '../../utils/cookies'
import { regExpInputs } from '../../utils/regExp'

const Login = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [ user, setUser ] = useState({ user: '', pass: '' })
    const [ loading, setLoading ] = useState(false)
    const [ isError, setError ] = useState(false)
    const [ listErrorMessage, setErrorMessage ] = useState([])
    const router = useRouter()

<<<<<<< HEAD
    const close = () => {
        setError(false)
        console.log("ES ERROR", isError)
        setModalOpen(false)
    }
    const open = () => {
        setError(false)
        console.log("ES ERROR", isError)
=======
    const close = (e) => {
        e.preventDefault()

        setError(false)
        setModalOpen(false)
    }
    const open = (e) => {
        e.preventDefault()

        setError(false)
>>>>>>> 3db08084d1600940a2d49595387b45d691aa5dfc
        setModalOpen(true)
    }

    useEffect( () => {
        const checkLogin = checkLoginCookie()
        if (checkLogin) {
            router.push('/dashboard')
        }
    }, [router])

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
        setLoading(false)
        storeLoginCookie()
        router.push('/dashboard')
    }

    return (
        <>
            { loading && <Loader /> }

            <form
                onSubmit={ onSubmit }
                className="flex row justify-center"
            >
                <div
                    className="flex flex-row"
                >
                    <div>
                        <motion.input
                            type="text"
                            placeholder="Usuario"
                            className="p-2 mr-2 rounded-xl text-white bg-indigo-700 shadow-lg outline-0 placeholder:italic placeholder:text-white"
                            onChange={ (e) => setUser({ user: e.target.value, pass: user.pass }) }
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        />
                    </div>
                    <div>
                        <motion.input
                            type="password"
                            placeholder="Contraseña"
                            className="p-2 mr-2 rounded-xl text-white bg-indigo-700 shadow-lg outline-0 placeholder:italic placeholder:text-white"
                            onChange={ (e) => setUser({ user: user.user, pass: e.target.value }) }
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        />
                    </div>
                </div>
                <div
                    className="flex flex-row justify-center"
                >
                    <div className="mr-2">
                        <motion.button
                            className="p-2 w-20 italic text-center text-white rounded-lg shadow-lg border-solid border-2 border-indigo-700"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            type="submit"
                        >
                            Entrar
                        </motion.button>
                    </div>
                    <div>
                        <motion.button
                            className="p-2 w-20 italic text-center text-white rounded-lg shadow-lg border-solid border-2 border-indigo-700"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
<<<<<<< HEAD
                            onClick={ () => (modalOpen ? close() : open()) }
                            type="button"
=======
                            onClick={ (e) => (modalOpen ? close() : open(e)) }
>>>>>>> 3db08084d1600940a2d49595387b45d691aa5dfc
                        >
                            Registro
                        </motion.button>
                    </div>
                </div>
            </form>
            {isError &&
                <Error
                    listMessages={ listErrorMessage.length === 0 ? ['Todos los campos son obligatorios 🔐'] : listErrorMessage }
                />
            }
            <AnimatePresence
                initial={ false }
                exitBeforeEnter={ true }
                onExitComplete={ () => null }
            >
                { modalOpen && <Modal modalOpen={ modalOpen } setError={setError} setErrorMessage={setErrorMessage} handleClose={ close } /> }
            </AnimatePresence>
        </>
    )
}

export default Login