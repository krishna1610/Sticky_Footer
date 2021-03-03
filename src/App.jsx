import "./App.css";
import AppBody from "./Components/AppBody";
import AppFooter from "./Components/AppFooter";
import AppHeader from "./Components/AppHeader";

function App() {
  return (
    <div className="d-flex flex-column h-100">
      <AppHeader />
      <AppBody />
      <AppFooter />
    </div>
  );
}

export default App;
