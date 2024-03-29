import { useEffect,useState } from 'react';
import { motion } from 'framer-motion';
import {animationsFramer} from '../../utils/effectsFramerMotion'

const Error = ({ listMessages, duration=2000}) => {
    const [list,setList] = useState([]);
    useEffect(() => {
        setList([...listMessages]);
    }, [listMessages]);
    
    useEffect(() => {
        const interval = setInterval(() => {
            if (listMessages.length && list.length) {
                deleteToast(listMessages[0].id);
            }
        }, duration);
        
        return () => {
            clearInterval(interval);
        }

        // eslint-disable-next-line
    }, [listMessages, duration, list]);

    const deleteToast = id => {
        const listItemIndex = list.findIndex(e => e.id === id);
        const toastListItem = listMessages.findIndex(e => e.id === id);
        list.splice(listItemIndex, 1);
        listMessages.splice(toastListItem, 1);
        setList([...list]);
    }

return(
    <>
        {list.map((itemToast)=>
            itemToast.typeToast == "danger"?
            <motion.div
                    onClick={ (e) => e.stopPropagation() }
                    className="w-56 z-50 fixed p-0 h-16 top-[90vh] right-[5vw] rounded-lg flex flex-col items-center shadow-lg shadow-indigo-500/40 bg-neutral-200"
                    variants={ animationsFramer.dropFromDown }
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                <div id="toast-danger" className="flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                    <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Error icon</span>
                    </div>
                    <div className="ml-3 text-sm font-normal">{itemToast.text}</div>
                </div>
            </motion.div>
            : itemToast.typeToast == "warning"?
                <motion.div
                    onClick={ (e) => e.stopPropagation() }
                    className="w-56 z-50 fixed p-0 h-16 top-[90vh] right-[5vw] rounded-lg flex flex-col items-center shadow-lg shadow-indigo-500/40 bg-neutral-200"
                    variants={ animationsFramer.dropFromDown }
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <div id="toast-warning" className="flex items-center p-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                        <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Warning icon</span>
                        </div>
                        <div className="ml-3 text-sm font-normal">{itemToast.text}</div>
                    </div>
                </motion.div>
            : itemToast.typeToast == "sucess" ?
                <motion.div
                    onClick={ (e) => e.stopPropagation() }
                    className="w-56 z-50 fixed p-0 h-16 top-[90vh] right-[5vw] rounded-lg flex flex-col items-center shadow-lg shadow-indigo-500/40 bg-neutral-200"
                    variants={ animationsFramer.dropFromDown }
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <div id="toast-success" className="flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                        <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Check icon</span>
                        </div>
                        <div className="ml-3 text-sm font-normal">{itemToast.text}</div>
                    </div>
                </motion.div>
            : null
        )}
    </>
)}

export default Error