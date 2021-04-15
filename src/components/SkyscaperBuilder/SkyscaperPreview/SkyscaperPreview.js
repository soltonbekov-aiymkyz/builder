
import classes from "./SkyscaperPreview.module.css";
import SkyscaperLevel from "../SkyscaperLevel/SkyscaperLevel";

const  SkyscaperPreview = ({levels,price}) => {
    const result = [];
for (const level in levels){
    for (let i=0; i<levels[level]; i++){
    result.push(<SkyscaperLevel  key={level + i} type={level}/>)
}
 }
// d.n
//if ing=10
// d.b



// const  animations = ({animations,level}) => {
//     const result = [];
// for (const level in levels){
//     for (let i=0; i<levels[level=10]; i++){
//     result.push(<SkyscaperLevel  key={level + i} type={level}/>)
// }
//  }







// function Animation({level}) {
//     if (level=10) {
//       return: true;
//     }
//     if (level!=10) {
//         return: false;
//       }
  
//   class Page extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {showWarning: true};
//       this.handleToggleClick = this.handleToggleClick.bind(this);
//     }
  
//     handleToggleClick() {
//       this.setState(state => ({
//         showWarning: !state.showWarning
//       }));
//     }
  
//     render() {
//       return (
//         <div>
//           <WarningBanner warn={this.state.showWarning} />
//           <button onClick={this.handleToggleClick}>
//             {this.state.showWarning ? 'Спрятать' : 'Показать'}
//           </button>
//         </div>
//       );
//     }
//   }
  
//   ReactDOM.render(
//     <Page />,
//     document.getElementById('root')
//   );
  

return ( 
    <div className = {classes.SkyscaperPreview}>
    
        <div className={classes.levels}>
            <div
            className ={classes.levels}/>
            {result}
        </div>
    <div className={classes.price}>{price.toFixed(1)}som</div>
    </div>
);}
export default SkyscaperPreview;
 
 

