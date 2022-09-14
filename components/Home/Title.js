import Image from 'next/image'
import logo from '../../public/images/NewUniverseLogo.png'

const Title = ({ title, image = false, color = "text-blue-900" }) => {
    return (
        <div className="pt-10 md:pt-0 flex justify-center">
            <h1 className={`${color} mb-[1rem] text-center font-['Sniglet'] text-4xl md:hover:${ color } md:p-0`}> { title } </h1>
            {
                image && <Image src={ logo } width={ 150 } height={ 150 } alt="New universe logo" />
            }
        </div>
    )
}

export default Title