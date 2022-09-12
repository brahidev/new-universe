import { Button, Typography } from '@material-tailwind/react/';
import Icon from '../Icon/Icon';
import MenuIcon from '../SVG/Menu';

const MobileSidebar = ({ showSidebar, setShowSidebar }) => (
  <nav className="bg-light-blue-500 md:ml-64 py-6 px-3">
    <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
      <div className="md:hidden flex justify-center items-center">
        <Icon
          svg={ <MenuIcon /> }
          handleClick={ () => setShowSidebar("left-0") }
        />
        <a className="text-center w-full inline-block text-white" >
          <Typography variant="h6">New Universe</Typography>
        </a>
        <div
          className={`absolute top-2 md:hidden ${
            showSidebar === 'left-0' ? 'left-64' : '-left-64'
          } z-50 transition-all duration-300`}
        >
          <Icon
            handleClick={ () => setShowSidebar("-left-64") }
          />
        </div>
      </div>
    </div>
  </nav>
);

export default MobileSidebar
