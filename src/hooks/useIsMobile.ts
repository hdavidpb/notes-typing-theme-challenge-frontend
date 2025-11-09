import { useState, useEffect } from "react";



export const useIsMobile = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {

        checkIsMobile();
        
        window.addEventListener('resize', checkIsMobile);
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        }
    }, []);

          const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };


    




  return isMobile
}
