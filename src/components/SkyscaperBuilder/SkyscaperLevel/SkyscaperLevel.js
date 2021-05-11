import floor0 from "../../../Images/ai.svg"
import floor1 from "../../../Images/livingFloor.jpg"
import floor2 from "../../../Images/do.jpg"
import floor3 from "../../../Images/sale.jpg"
import floor4 from "../../../Images/me.jpg"
import floor5 from "../../../Images/bookstoree1.png"
const SkyscaperLevel = ({ type }) => {
    const types = {
         floor0: { backgroundImage: `url(${floor0})`, width: "170px", height: "80px", backgroundSize: "Cover" },
        floor1: { backgroundImage: `url(${floor1})`, width: "170px", height: "80px", backgroundSize: "Cover" },
        floor2: { backgroundImage: `url(${floor2})`, width: "170px", height: "100px", backgroundSize: "Cover" },
        floor3: { backgroundImage: `url(${floor3})`, width: "170px", height: "120px", backgroundSize: "Cover" },
        floor4: { backgroundImage: `url(${floor4})`, backgroundSize: "Cover", width: "170px", height: "100px" },
        floor5: { backgroundImage: `url(${floor5})`, width: "170px", height: "110px", backgroundSize: "Cover" },
    }
    return (
        <div style={types[type]}> </div>
    );
}
export default SkyscaperLevel;
