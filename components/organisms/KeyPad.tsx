import CircleBtn from "../molecules/CircleBtn";
interface KeyPadProp {
    displayState: any
}
const KeyPad = ({displayState}:KeyPadProp) => {
    return(
        <div>
            <CircleBtn text={1} action={displayState(1)}/>
            <CircleBtn text={2} action={displayState(2)}/>
            <CircleBtn text={3} action={displayState(3)}/>
            <CircleBtn text={4} action={displayState(4)}/>
        </div>
    );
};
export default KeyPad;