import "./App.css";
import Header from "./components/header/Header";
import RightSidebar from "./components/rightSidebar/RightSidebar";
import Feed from "./feeds/Feed";
import LeftSidebar from "./components/leftSidebar/LeftSidebar";

function App() {
  return (
    <>
      {/*----- HEADER -----*/}
      <Header />

      {/*---- LEFT SIDEBAR  ----*/}
      <div className="app-body">
        <LeftSidebar />
        <Feed />
        <RightSidebar />
      </div>

      {/* POST */}
      {/* RIGHT SIDEBAR */}
    </>
  );
}

export default App;
