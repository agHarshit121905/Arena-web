import SpartanOnRight from "./SpartanOnRight.jsx";
import SpartanOnLeft from "./SpartanOnLeft.jsx";
// import Temp from "./Temp.jsx"

export default function DesktopComponents() {
  return (
    <div>
      <SpartanOnRight renderNum={0}/>
      <SpartanOnLeft renderNum={0}/>
      <SpartanOnRight renderNum={1}/>
      <SpartanOnLeft renderNum={1}/>
      <SpartanOnRight renderNum={2}/>
    </div>
  );
}