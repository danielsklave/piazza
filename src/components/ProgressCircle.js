import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import variables from '../variables.module.scss';

const ProgressCircle = ({value}) => <>
    <div className="progress-bar">
        <CircularProgressbar value={value} 
            strokeWidth={50}
            styles={buildStyles({strokeLinecap: "butt", pathColor: variables.green, trailColor: "#FFFFFF"})}
        />
    </div>
</>

export default ProgressCircle;