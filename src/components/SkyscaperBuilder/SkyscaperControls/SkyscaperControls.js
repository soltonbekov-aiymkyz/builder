
// import classes from "./SkyscaperControl/SkyscaperControl";
// import classes from "./SkyscaperControls.module.css";
// const SkyscaperControls = ({levels,addLevel,removeLevel}) => {
//   const result =[];
//   for(const level in levels){
//     result.push(
//     <SkyscaperControl 
//     type={level} 
//     addLevel={addLevel}
//     removeLevel={removeLevel}
//     />
//     )
//   }
//   return (
//     <div className={classes.SkyscaperControls}>{results}</div>
//   );
//   };
// export default SkyscaperControls;





import classes from "./SkyscaperControls.module.css";

const SkyscaperControls = ({levels}) => {
  const results = [];
  for (const level in levels) {
   results.push(computeHeadingLevel);
    }
 
    return (
      <div className={classes.SkyscaperControls}>
       {results}
      </div>
    );
  }
  
  export default SkyscaperControls;


