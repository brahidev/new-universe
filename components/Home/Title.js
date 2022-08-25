import Image from 'next/image'
import logo from '../../public/images/NewUniverseLogo.png'

const Title = ({ title, image = false }) => {
    return (
        <div className="pt-10 flex justify-center">
            <h1 className="text-blue-900 font-bold text-xl pb-5 md:hover:text-blue-900 md:p-0"> { title } </h1>
            {
                image && <Image src={ logo } width={ 150 } height={ 150 } alt="New universe logo" />
            }
        </div>
    )
}

export default Title