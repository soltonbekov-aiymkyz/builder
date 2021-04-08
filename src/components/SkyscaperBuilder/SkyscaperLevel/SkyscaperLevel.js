
// import classes from "./SkyscaperLevel.module.css";
// //import flowershopp01 from "../../../images/flowershopp01.png";
// const SkyscaperLevel = ({ type }) => {
//     const types = {
//     //  floor1: { backgroundColor: `url(${flowershopp01})`, width: "50px", height: "50px", },
    
//      floor1: { backgroundColor: `red`, width: "50px", height: "50px",display: "inline-block" },
//       floor2: { backgroundColor: `blue`, width: "50px", height: "50px",display: "inline-block" },
//       floor3: { backgroundColor: `green`, width: "50px", height: "50px",display: "inline-block" },
//       floor4: { backgroundColor: `yellow`, width: "50px", height: "50px",display: "inline-block"},
//       floor5: { backgroundColor: `pink`, width: "50px", height: "50px", display: "inline-block"},
//       floor6: { backgroundColor: `orange`, width: "50px", height: "50px",display: "inline-block" },
//     }
//     return <div className={classes.SkyscaperLevel} style={types[type]}></div>;
//   };
//  export default SkyscaperLevel;

import floor1 from "../../../Images/livingFloor.jpg"
import floor2 from "../../../Images/bookstoree1.png"
import floor3 from "../../../Images/changingroom.png"
import floor4 from "../../../Images/flower.jpg"
import floor5 from "../../../Images/plants.png"
const SkyscaperLevel =({type}) => {
    const types = {
        floor1 : {backgroundImage : `url(${floor1})` , width:"170px", height:"80px",  backgroundSize: "Cover"},
        floor2 : {backgroundImage : `url(${floor2})` , width:"170px", height:"100px",  backgroundSize: "Cover"},
        floor3 : {backgroundImage : `url(${floor3})` , width:"170px", height:"120px",  backgroundSize: "Cover"},
        floor4 : {
          backgroundImage : `url(${floor4})` ,
          backgroundSize: "Cover",
          width:"170px",
          display: "block",
          height:"120px"
        },
        floor5 : {backgroundImage : `url(${floor5})` , width:"170px", height:"120px",  backgroundSize: "Cover"},
    }
    return ( 
        <div style={types[type]}></div>
     );
}
 
export default SkyscaperLevel;