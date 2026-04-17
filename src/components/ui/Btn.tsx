 import type { FC } from 'react'
 import "./btn.scss";
interface IProps {
    text: string;
    width:  string;
    height:  string;
    mt?: string | number;
    ma?: string | number;
    disabled: boolean;
    icon?: string;

}   
const Btn: FC<IProps> = ({text, width, height, mt, ma, disabled, icon}) => {
  return (
    <button disabled={disabled} className="btn" style={{ width: width, height: height, marginTop: mt, margin: ma, marginLeft: ma, marginRight: ma }}>
{text}
{icon   && <span className="btn-icon">{icon}</span>}      
    </button>
  )
}

export default Btn