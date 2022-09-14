import { useState } from "react";
import Link from "next/link";
import { Typography } from "@material-tailwind/react/";
import { useRouter } from "next/router"

import Icon from "../Icon/Icon";
import HomeIcon from "../SVG/Home";
import UserIcon from "../SVG/Users";
import GameIcon from "../SVG/Games";
import NewsIcon from "../SVG/News";
import LoggoutIcon from "../SVG/Loggout";
import MobileSidebar from "./MobileSidebar";
import { Loggout } from "../../../utils/cookies";

const Sidebar = ({ section, setSection }) => {
  const [ showSidebar, setShowSidebar ] = useState("-left-64");
  const router = useRouter()


  const loggout = () => {
    Loggout()

    router.push('/admin')
  }

  return (
    <>
      <MobileSidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />

      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <Link href="/">
            <a className="mt-2 text-center w-full inline-block">
              <Typography variant="h6">New Universe</Typography>
            </a>
          </Link>
          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />

            <ul className="flex-col min-w-full flex list-none">
              <li className="rounded-lg mb-2">
                <nav className={`flex items-center gap-4 text-sm font-light px-4 py-3 rounded-lg cursor-pointer ${ section === 'dashboard' ? "rounded-lg bg-gradient-to-tr from-light-blue-500 to-light-blue-700 shadow-md text-white" : 'text-gray-700 bg-transparent' }`} onClick={ () => setSection("dashboard") }>
                    <Icon
                      svg={ <HomeIcon /> }
                      color={ section === 'dashboard' ? "white" : "gray" }
                    />
                    Dashboard
                </nav>
              </li>
              <li className="rounded-lg mb-2">
                <nav className={`flex items-center gap-4 text-sm font-light px-4 py-3 rounded-lg cursor-pointer ${ section === 'users' ? "rounded-lg bg-gradient-to-tr from-light-blue-500 to-light-blue-700 shadow-md text-white" : 'text-gray-700 bg-transparent' }`} onClick={ () => setSection("users") }>
                  <Icon
                    svg={ <UserIcon /> }
                    color={ section === 'users' ? "white" : "gray" }
                  />
                  Users
                </nav>
              </li>
              <li className="rounded-lg mb-2">
                <nav className={`flex items-center gap-4 text-sm font-light px-4 py-3 rounded-lg cursor-pointer ${ section === 'games' ? "rounded-lg bg-gradient-to-tr from-light-blue-500 to-light-blue-700 shadow-md text-white" : 'text-gray-700 bg-transparent' }`} onClick={ () => setSection("games") }>
                  <Icon
                    svg={ <GameIcon /> }
                    color={ section === 'games' ? "white" : "gray" }
                  />
                  Games
                </nav>
              </li>
              <li className="rounded-lg mb-2">
                <nav className={`flex items-center gap-4 text-sm font-light px-4 py-3 rounded-lg cursor-pointer ${ section === 'news' ? "rounded-lg bg-gradient-to-tr from-light-blue-500 to-light-blue-700 shadow-md text-white" : 'text-gray-700 bg-transparent' }`} onClick={ () => setSection("news") }>
                  <Icon
                    svg={ <NewsIcon /> }
                    color={ section === 'news' ? "white" : "gray" }
                  />
                  News
                </nav>
              </li>
            </ul>

            <ul className="flex-col min-w-full flex list-none absolute bottom-0">
              <li
                className="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 px-4 rounded-lg text-white cursor-pointer mb-2"
                onClick={ loggout }
              >
                <a
                  className="flex items-center gap-4 text-sm font-light py-3"
                >
                  <Icon
                    svg={ <LoggoutIcon /> }
                  />
                  Cerrar Sesión
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
