// // import React from "react"
// import classes from "./SkyscaperLevel.module.css"

import floor1 from "../../../Images/livingFloor.jpg"
import floor2 from "../../../Images/do.jpg"
import floor3 from "../../../Images/bookstoree1.png"
import floor4 from "../../../Images/me.jpg"
import floor5 from "../../../Images/wer.jpg"

// import floorF1 from "../../../Images/fitF1.png"

const SkyscaperLevel =({type}) => {
    const types = {
        floor1 : {backgroundImage : `url(${floor1})` , width:"170px", height:"80px",  backgroundSize: "Cover"},
        floor2 : {backgroundImage : `url(${floor2})` , width:"170px", height:"100px",  backgroundSize: "Cover"},
        floor3 : {backgroundImage : `url(${floor3})` , width:"170px", height:"120px",  backgroundSize: "Cover"},
        floor4 : {backgroundImage : `url(${floor4})`,backgroundSize:"Cover",width:"170px",/*display: "block",*/height:"120px"},
        floor5 : {backgroundImage : `url(${floor5})` , width:"170px", height:"120px",  backgroundSize: "Cover"},


        //  floorF1 : {backgroundImage : `url(${floorF1})` , width:"170px", height:"120px",  backgroundSize: "Cover"},
    }
    return ( 
    <div    style={types[type]}> </div>
     );
}
export default SkyscaperLevel;