import { useEffect, useState } from "react";

import Loader from "../../../components/Loader/Loader";

const GamesContent = () => {
  const [games, setGames] = useState();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const getGames = async () => {
      try {
        const host = window.location.host;
        const protocol = window.location.protocol;
        const url = `${protocol}//${host}/api/games`;
        const getting = await fetch(url);
        const { data } = await getting.json();

        setGames(data);
        setLoader(false);
      } catch (error) {
        console.error("Error Found", error);
      }
    };

    if (!games) {
      getGames();
    }
  }, [games]);

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
                  Game Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Game Code
                </th>
              </tr>
            </thead>
            <tbody>
              {games != undefined
                ? games.map((element, index) => {
                    return (
                      <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {element.user_name}
                        </th>
                        <td className="py-4 px-6">{element.game_name}</td>
                        <td className="py-4 px-6">{element.game_code}</td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
      }
    </div>
  );
};

export default GamesContent;
