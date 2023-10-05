import { useUserContext } from "../hooks/useUserContext"
import { useState } from "react";

const FormNote = () => {

     const { dispatch } = useUserContext();
     const [title, setTitle] = useState("");
     const [text, setText] = useState("");
     const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
     const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

     var count = 20 - title.length;
     count < 0 ? count = 0 : 20 - title.length;

     const addHandler = (e) => {
          e.preventDefault();
          const date = new Date()
          dispatch({
               type: "CREATE_NOTE", payload: {
                    id: date.getTime(),
                    title: title,
                    createdAt: `${days[date.getDay()]}, ${date.getDay()} ${months[date.getMonth()]} ${date.getFullYear()}`,
                    body: text,
                    archived: false,
               }
          })
          setTitle("")
          setText("")
     }
     return (
          <>
               <form className="notes">
                    <p>Sisa Karakter = {count}</p>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value.slice(0, 20)) } placeholder="Title" />
                    <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Text" />
                    <button onClick={e => {
                         e.preventDefault();
                         title != "" && text !="" ? addHandler(e) : alert("Input tidak boleh kosong")
                    }}>Add</button>

               </form>
          </>
     )
}

export default FormNote