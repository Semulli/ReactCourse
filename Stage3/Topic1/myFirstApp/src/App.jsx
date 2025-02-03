import Header from "./components/header";
import Footer, { convertTime } from "./components/footer";

function App() {
  let number = 10;

  let time = convertTime();

  return (
    <div>
      <Header />
      <h1>hello React {time}  {number}</h1>
      <Footer/>
    </div>
  );
}

export default App;
