type TextTypes = "LARGE" | "SMALL";
interface TextAtomProps {
  text: number;
  type: TextTypes;
}
const TextAtom = ({text,type}:TextAtomProps) => {
  const textGenerator = () => {
    let finalCode;
    switch (type) {
      case "LARGE":
        finalCode = <h1 className="text-xl">{text}</h1>;
        break;
      case "SMALL":
        finalCode = <p className="text-sm">{text}</p>;
        break;
      default:
        finalCode = <h1>text not found</h1>;
    }
    return finalCode;
  };
  return textGenerator();
};
export default TextAtom;