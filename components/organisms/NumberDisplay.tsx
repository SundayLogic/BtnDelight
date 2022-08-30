import TextAtom from "../atoms/Text/TextAtom";
interface NumberDisplayProps {
    display: number
}
const NumberDisplay = ({display}:NumberDisplayProps) => {
    return(
        <div className="flex items-end">
           <TextAtom text={display} type="LARGE"/>
        </div>
    );
};
export default NumberDisplay 