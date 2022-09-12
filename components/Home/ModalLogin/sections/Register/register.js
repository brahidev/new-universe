import {motion} from "framer-motion"
import {allImages} from "../../../../../utils/importAllImages"
import {InputCustom,InputSelect} from '../../../../Input/input'
import Extern from '../Extern'

const Register = ({setIsLogin, setIsRegister, setIsEntry}) => {

    const showLogin = ()=>{
        setIsLogin(true);
        setIsEntry(false)
    }

    const showRegister = ()=>{
        setIsRegister(true);
        setIsEntry(false)
    }

    return(
        <>
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
                    value={''}
                    placeholder="Nickname"
                    label=""
                    name="nickname"
                    classInput="InputText"
                    classForm="login"
                    onChange={()=>{}}                
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
                    value={''}
                    placeholder="Password"
                    label=""
                    name="password"
                    classInput="InputText"
                    classForm="login"
                    onChange={()=>{}}                
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
                    value={''}
                    placeholder="Confirm Password"
                    label=""
                    name="password"
                    classInput="InputText"
                    classForm="login"
                    onChange={()=>{}}                
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
                    type="email"
                    value={''}
                    placeholder="Email"
                    label=""
                    name="email"
                    classInput="InputText"
                    classForm="login"
                    onChange={()=>{}}                
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
                        value={''}
                        placeholder="Age"
                        label=""
                        name="age"
                        classInput="InputTextMedium"
                        classForm="login"
                        onChange={()=>{}}                
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
                    value={''}
                    placeholder="Country/Region"
                    label=""
                    name="password"
                    classInput="InputText"
                    classForm="login"
                    onChange={()=>{}}                
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
                    value={''}
                    placeholder="Coil ID"
                    label=""
                    name="password"
                    classInput="InputText"
                    classForm="login"
                    onChange={()=>{}}                
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
                onClick={()=>{showLogin()}}
            >
                <span>
                    Register
                </span>
            </motion.button>
            <Extern/>
        </>
    )
}

export default Register