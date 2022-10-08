import { useEffect, useState } from "react";
import Burger from "./Burger/Burger";
import Items from "./Items/Items";




const NavBar = () =>{
   const[widht, setWidht] = useState<number|undefined>();
    useEffect(() => {
        window.addEventListener('resize', ()=> {
          return setWidht(window.innerWidth)  
        })
  }, [widht]);
    return(
        (widht>1024)? (<Items />):(<Burger />)
        
            
    )
}
export default NavBar