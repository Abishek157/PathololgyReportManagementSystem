import React from "react";
import Sidebar from "./Sidebar";
import "../styles/mainPage.css";
import renderContent from "../containers/renderContentToMainPanel";
import useRouteStore from "../hooks/useRouteStore"; // Zustand store

const MainPage = () => {
  const { selectedRoute, setSelectedRoute } = useRouteStore(); // Get Zustand state

  return (
    <>
      <div className="Main">
        <div className="SidebarPannel">
          <Sidebar
            selectedRoute={selectedRoute}
            setSelectedRoute={setSelectedRoute}
          />
        </div>
        <div className="MainPanel">{renderContent(selectedRoute)}</div>
      </div>
    </>
  );
};

export default MainPage;
