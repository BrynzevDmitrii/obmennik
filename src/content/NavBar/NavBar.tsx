import Burger from "./Burger/Burger";
import Items from "./Items/Items";

const NavBar = ({ widht }: { widht: boolean }) => {
  return (
    <>
      
      {widht ? <Items /> : <Burger />}
    </>
  );
};
export default NavBar;
