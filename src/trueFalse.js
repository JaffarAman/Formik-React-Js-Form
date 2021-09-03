// import React from "react"
// import OnImg from "./img/light-bulb-on-off-png-11553940319kdxsp3rf0i.png"
// import OffImg from "./img/light-bulb-on-off-png-11553940208oq66nq8jew.png"
// function Hi({isOpen}){

//     const flag = isOpen
//     let url;
//     flag == "on" ? url = OnImg : url = OffImg
//     return(
        
//         <img src={url} width="120" />


//     )
// }

// export default Hi


import React , {useState} from "react"
import OnImg from "./img/light-bulb-on-off-png-11553940319kdxsp3rf0i.png"
import OffImg from "./img/light-bulb-on-off-png-11553940208oq66nq8jew.png"
import "./bulb.css"
export default function Hi() {
    let [imgUrl , setImgUrl] = useState(OffImg)
    
    const changeHandler = ()=>{
        imgUrl === OnImg ? setImgUrl(OffImg) : setImgUrl(OnImg)    

    }
    return(
        <div>
            <img src={imgUrl} width="150" />

        <br />    <button onClick={changeHandler}>CHANGE</button>
        </div>
    )

}