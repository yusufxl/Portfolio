import { useEffect } from "react";
import { TbError404Off } from "react-icons/tb";

function NotFoundPage() {
  useEffect(() => {
    alert("Sahifa topilmadi. Qaytadan urinib ko'ring.");  
  }, []);  

  return (
    <div className="Notfount">
      <p className="notfount">
        NotFount <TbError404Off />
      </p>
      <p className="notfound_text">Afsuski bunday page yo'q</p>
    </div>
  );
}

export default NotFoundPage;