import BtnAction from "../atoms/Btns/BtnAction";
import TextAtom from "../atoms/Text/TextAtom";

interface CircleBtnProps {
  text: number;
  action: any;
}
const CircleBtn = ({ text, action }: CircleBtnProps) => {
  const BtnDesign = () => {
    return (
      <div className="flex items-center justify-center h-20 w-20 rounded-full bg-slate-400">
        <TextAtom text={text} type="SMALL"/>
      </div>
    );
  };
  return <BtnAction content={BtnDesign} action={action} />;
};
export default CircleBtn;
