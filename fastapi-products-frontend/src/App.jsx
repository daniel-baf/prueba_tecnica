import Home from "./pages/Home";

import "./App.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column", "minWidth": "100vw" }}
    >
      <Header />
      <div style={{ flex: 1 }}>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
