import Swal from "sweetalert2";



export const SwalGlobalised = (
    icon: string | any,
    text: string,
    confirmButtonText: string,
   
  ) => {

    
    return Swal.fire({
      text: text,
  
      icon: icon,
  
      confirmButtonText: confirmButtonText,
    });
  };