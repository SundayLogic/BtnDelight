import { useState } from "react";
import KeyPad from "../organisms/KeyPad";
import NumberDisplay from "../organisms/NumberDisplay";

const MainTemplate = () => {
    const [displayNumber, setDisplayNumber] = useState<number>(0);
    const display = (x:number) => setDisplayNumber(x);
    return(
        <div>
            <NumberDisplay display={displayNumber}/>
            <KeyPad displayState={display}/>
        </div>
    )
};
export default MainTemplate;