import {useState,useEffect} from "react"
import { motion } from "framer-motion"
import {regExpInputs} from '../../utils/regExp'
import {userRegister,getUser} from "../../utils/provider/provider"

const dropIn = {
    hidden: {
        y: "100vh",
        opacity: 0
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 100,
            stiffness: 500
        }
    },
    exit: {
        y: "-100vh",
        opacity: 0
    }
}

const Profile = ({setError, setErrorMessage})=>{
    const [dataForm, setDataForm] = useState({userName:'', password:'', name:'', age:0, email:''});
    
    const sendNotification = (message) => {
        setError(true)
        console.log('set true')
        setErrorMessage([...[message]])
        console.log('set message')
        return;
    }

    const sendData = async(e) => {
        e.preventDefault();
        console.log('DATA SAVE');
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
        if(registerData.status === true){
            sendNotification({text:'Registro completado',typeToast:"sucess"})
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

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUser('prueba');
            if(data?.data?.status){
                const dataUser = JSON.parse(data.data.data[0].json)
                const username = dataUser.username
                setDataForm({userName:username, password:dataForm.password, name:dataForm.name, age:dataForm.age, email:dataForm.email})
            }
        }
        fetchData()
    })

    return (
        <div className="w-[100%] h-[100%]">
            <h1 className="tittleMenuText font-['Sniglet']">Profile</h1>
            <div className="flex flex-col overflow-x-hidden overflow-y-scroll scrollbar mw-x-[100%] w-[100%] h-[100%]">
                <motion.div
                    onClick={ (e) => e.stopPropagation() }
                    className="w-[80%] h-auto m-auto p-10 rounded-lg flex flex-col items-center from-slate-100"
                    variants={ dropIn }
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <form onSubmit={ sendData } className="flex flex-col w-[100%]">
                        <div className="pb-5">
                            <motion.input
                            type="text"
                            placeholder="Usuario"
                            className="w-[100%] text-[1rem] p-2 rounded-xl text-white bg-indigo-700 shadow-lg outline-0 placeholder:italic placeholder:text-white"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onChange={(e)=> setDataForm({userName:e.target.value, password:dataForm.password, name:dataForm.name, age:dataForm.age, email:dataForm.email}) }
                            readonly='readonly'
                            defaultValue={dataForm.userName.length > 0? dataForm.userName : ''}
                            />
                        </div>
                        <div className="pb-5">
                            <motion.input
                            type="password"
                            placeholder="Contraseña"
                            className="w-[100%] text-[1rem] p-2 rounded-xl text-white bg-indigo-700 shadow-lg outline-0 placeholder:italic placeholder:text-white"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onChange={(e)=> setDataForm({userName:dataForm.userName, password:e.target.value, name:dataForm.name, age:dataForm.age, email:dataForm.email}) }
                            />
                        </div>
                        <div className="pb-5">
                            <motion.input
                            type="text"
                            placeholder="Nombres"
                            className="w-[100%] text-[1rem] p-2 rounded-xl text-white bg-indigo-700 shadow-lg outline-0 placeholder:italic placeholder:text-white"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onChange={(e)=> setDataForm({userName:dataForm.userName, password:dataForm.password, name:e.target.value, age:dataForm.age, email:dataForm.email}) }
                            readonly='readonly'
                            />
                        </div>
                        <div className="pb-5">
                            <motion.input
                            type="number"
                            placeholder="Edad"
                            className="w-[100%] text-[1rem] p-2 rounded-xl text-white bg-indigo-700 shadow-lg outline-0 placeholder:italic placeholder:text-white"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onChange={(e)=> setDataForm({userName:dataForm.userName, password:dataForm.password, name:dataForm.name, age:e.target.value, email:dataForm.email}) }
                            />
                        </div>
                        <div className="pb-5">
                            <motion.input
                            type="email"
                            placeholder="Correo"
                            className="w-[100%] text-[1rem] p-2 rounded-xl text-white bg-indigo-700 shadow-lg outline-0 placeholder:italic placeholder:text-white"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onChange={(e)=> setDataForm({userName:dataForm.userName, password:dataForm.password, name:dataForm.name, age:dataForm.age, email:e.target.value}) }
                            readonly='readonly'
                            />
                        </div>
                        <div className="flex flex-row justify-center pt-[1rem]">
                            <div className="mr-2">
                                <motion.button
                                className="text-base p-2 w-20 italic text-center text-white rounded-lg shadow-lg border-solid border-2 border-indigo-700 bg-indigo-700"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                type="submit"
                                >
                                    Save
                                </motion.button>
                            </div>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}

export default Profile