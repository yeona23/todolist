import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

// const ChildComp = () => <div>Child components</div>;

function App() {
  return (
    <div className="App">
      <Header />
      <Body></Body>
      <Footer />
    </div>
  );
}

export default App;
