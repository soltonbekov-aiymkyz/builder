import classes from "./SkyscaperBuilder.module.css";
import SkyscaperPreview from "./SkyscaperPreview/SkyscaperPreview";
import SkyscaperControls from "./SkyscaperControl/SkyscaperControl";
const  SkyscaperBuilder = () => {
    const levels = {
        restaurantfloor: 10,
        livingfloor: 20,
        shopfloor: 10,
    };
    return (
        <div className={classes.SkyscaperBuilder}>
            <SkyscaperPreview levels = {levels}/>
            <SkyscaperControls />
    
        </div>
    )
}
export default SkyscaperBuilder;