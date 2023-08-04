
import Swal from 'sweetalert2';
import './style.scss'
import { useEffect } from 'react';
export const Alert = ({ text, icon }) => {
 
  useEffect(() => {
    const timer = setTimeout(() => {
      Swal.fire({
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 1500,
        icon: icon,
        text: text,
        customClass: {
          container: 'alert'
        }
      });
    }, 0);

    
    return () => clearTimeout(timer);
  }, [text, icon]);


  return null;
};

