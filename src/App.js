import "./App.css";
import Header from "./components/header/Header";
import LeftSidebar from "./leftSidebar/LeftSidebar";

function App() {
  return (
    <>
      {/*----- HEADER -----*/}
      <Header />

      {/*---- LEFT SIDEBAR  ----*/}
      <div className="app-body">
        <LeftSidebar />
      </div>

      {/* POST */}
      {/* RIGHT SIDEBAR */}
    </>
  );
}

export default App;
