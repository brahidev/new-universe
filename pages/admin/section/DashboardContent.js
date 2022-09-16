import { useEffect, useState } from "react"

import Loader from '../../../components/Loader/Loader'

const DashboardContent = () => {
	const [ users, setUsers ] = useState()
	const [ loader, setLoader ] = useState(true)

	useEffect(() => {
		const getUsers = async () => {
			try {
				const host = window.location.host
				const protocol = window.location.protocol
				const url = `${ protocol }//${ host }/api/users`
				const getting = await fetch(url)
				const { data } = await getting.json()

				setUsers(data)
				setLoader(false)
			} catch (error) {
				console.error('Error Found', error)
			}
		}

		if (!users) {
			getUsers()
		}
	}, [users])

	return (
		<div className="overflow-x-auto relative md:ml-[15vw] md:w-[80%]">
			{
				loader ?
					<Loader />
				:
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                User Name
              </th>
              <th scope="col" className="py-3 px-6">
                Nombre
              </th>
              <th scope="col" className="py-3 px-6">
                Edad
              </th>
              <th scope="col" className="py-3 px-6">
                Correo
              </th>
            </tr>
          </thead>
            <tbody>
              {
                users != undefined ?
                  users.map((element, index) => {
                    const data = JSON.parse(element.json)

                    return (
                      <tr key={ index } className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          { element.username }
                        </th>
                        <td className="py-4 px-6">
                          { data.name }
                        </td>
                        <td className="py-4 px-6">
                          { data.age }
                        </td>
                        <td className="py-4 px-6">
                          { data.email }
                        </td>
                      </tr>
                    )
                  })
                :
                  null
              }
            </tbody>
          </table>
        }
		</div>
	)
}

export default DashboardContent