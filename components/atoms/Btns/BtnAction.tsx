interface BtnActionProps{
    action: () => any | void;
    content: () => JSX.Element;
}
const BtnAction = ({action, content}:BtnActionProps) => 
    <button onClick={() => action()}>{content()}</button>
export default BtnAction;