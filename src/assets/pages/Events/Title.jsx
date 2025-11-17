import Titleimg from "./eventsImages/title.png";
export default function Title() {
  document.body.style.backgroundColor = "black";
  return (
    <div className="mt-48">
      <img src={Titleimg} className="ml-auto mr-auto" />
    </div>
  );
}
