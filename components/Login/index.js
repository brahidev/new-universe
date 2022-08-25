import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../Modal/register';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import { loginUser } from '../../utils/provider/provider'
import { storeLoginCookie, checkLoginCookie } from '../../utils/cookies'

const Login = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [ user, setUser ] = useState({ user: '', pass: '' })
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState('')
    const router = useRouter()

    const close = () => setModalOpen(false)
    const open = () => setModalOpen(true)

    useEffect( () => {
        const checkLogin = checkLoginCookie()
        console.log('Check Login', checkLogin)
        if (checkLogin) {
            router.push('/dashboard')
        }
    }, [router])

    useEffect( () => {
        checkLoginCookie()

        if (user.pass != '' || user.user != '') {
            setError(false)
        }
    }, [user])

    useEffect( () => {
        if ( errorMessage != '' ) {
            setTimeout(() => {
                setError(false)
            }, 2000)
        }
    }, [errorMessage])

    const onSubmit = async (e) => {
        e.preventDefault()

        if (user.pass === '' || user.user === '') {
            setError(true)
            setErrorMessage('')

            return
        }

        setError(false)
        setErrorMessage('')
        setLoading(true)

        const login = await loginUser(user)

        if (!login.data.status) {
            setLoading(false)
            setError(true)
            setErrorMessage('Usuario o contraseña incorrecto 🔐')

            return
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
            >
                <div
                    className="flex flex-col"
                >
                    <div className="pb-5">
                        <motion.input
                            type="text"
                            placeholder="Username"
                            className="p-2 rounded-xl text-white bg-indigo-700 shadow-lg outline-0 placeholder:italic placeholder:text-white"
                            onChange={ (e) => setUser({ user: e.target.value, pass: user.pass }) }
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        />
                    </div>
                    <div>
                        <motion.input
                            type="password"
                            placeholder="Password"
                            className="p-2 rounded-xl text-white bg-indigo-700 shadow-lg outline-0 placeholder:italic placeholder:text-white"
                            onChange={ (e) => setUser({ user: user.user, pass: e.target.value }) }
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        />
                    </div>
                </div>
                <div
                    className="flex flex-row justify-center pt-5"
                >
                    <div className="mr-2">
                        <motion.button
                            className="p-2 w-20 italic text-center text-white rounded-lg shadow-lg border-solid border-2 border-indigo-700"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            type="submit"
                        >
                            Login
                        </motion.button>
                    </div>
                    <div>
                        <motion.button
                            className="p-2 w-20 italic text-center text-white rounded-lg shadow-lg border-solid border-2 border-indigo-700"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={ () => (modalOpen ? close() : open()) }
                        >
                            Register
                        </motion.button>
                    </div>
                </div>
            </form>

            { error && <Error
                    message={ errorMessage === '' ? 'Todos los campos son obligatorios 🔐' : errorMessage }
                />
            }
            <AnimatePresence
                initial={ false }
                exitBeforeEnter={ true }
                onExitComplete={ () => null }
            >
                { modalOpen && <Modal modalOpen={ modalOpen } handleClose={ close } /> }
            </AnimatePresence>
        </>
    )
}

export default Login