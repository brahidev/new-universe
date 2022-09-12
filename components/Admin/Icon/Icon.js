import { IconButton } from '@material-tailwind/react/';
import Default from '../SVG/Default';

const Icon = ({ svg, color = "white", handleClick }) => (
  <>
    <IconButton
      variant="text"
      color={ color }
      ripple={ true }
      onClick={ handleClick }
    >
      {
        !svg ?
          <Default />
        :
          svg
      }
    </IconButton>
  </>
);

export default Icon;
