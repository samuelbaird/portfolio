import "./Sidebar.css";
import Links from "./links/Links";
import ToggleButton from "./togglebutton/ToggleButton";

const Sidebar = () => {
  return (
      <div className="Sidebar">
          <div className="bg">
              <Links />
          </div>
        <ToggleButton />
    </div>
  )
}

export default Sidebar