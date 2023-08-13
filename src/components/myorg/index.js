import { useState } from "react"
import "./MyOrg.css"


function MyOrg(props) {
    // console.log(props);
    // const [mostrar, actualizarMostrar] = useState(true)
   
    // const manejarClick = () => {
    //         actualizarMostrar(!mostrar);

    // }

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/images/addbtn.png" alt="add button" onClick={props.cambiarMostrar}></img>
    </section>
}


export default MyOrg