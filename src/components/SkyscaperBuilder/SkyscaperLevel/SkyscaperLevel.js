


import floor1 from "../../../Images/livingFloor.jpg"
import floor2 from "../../../Images/do.jpg"
import floor3 from "../../../Images/glob.jpg"
import floor4 from "../../../Images/bookstoree1.png"
import floor5 from "../../../Images/sale.jpg"



// import floor6 from "../../../Images/gym.jpg"

const SkyscaperLevel = ({ type }) => {
    const types = {

        floor1: { backgroundImage: `url(${floor1})`, width: "170px", height: "80px", backgroundSize: "Cover" },
        floor2: { backgroundImage: `url(${floor2})`, width: "170px", height: "100px", backgroundSize: "Cover" },
        floor3: { backgroundImage: `url(${floor3})`, width: "170px", height: "120px", backgroundSize: "Cover" },
        floor4: { backgroundImage: `url(${floor4})`, backgroundSize: "Cover", width: "170px", height: "100px" },
        floor5: { backgroundImage: `url(${floor5})`, width: "170px", height: "110px", backgroundSize: "Cover" },
   

        // floor6: { backgroundImage: `url(${floor1})`, width: "170px", height: "80px", backgroundSize: "Cover" },

   
    }
    return (
        <div style={types[type]}> </div>
    );
}
export default SkyscaperLevel;

// bul esse Step to Success koomduk birikmesinin (karakol sharyy )"kyrgyzstandyn mediasabatuu jashtary "
// dolborunun alkagynda jazyldy .dolboor  Praga jarandyk Borborunun komogy mn atkarylat
// // #praguecivilsocietycentre