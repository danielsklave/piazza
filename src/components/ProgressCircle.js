import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressCircle = ({value}) => <>
    <div className="progress-bar">
        <CircularProgressbar value={value} 
            strokeWidth={50}
            styles={buildStyles({strokeLinecap: "butt", pathColor: "rgb(var(--green))", trailColor: "#FFFFFF"})}
        />
    </div>
</>

export default ProgressCircle;