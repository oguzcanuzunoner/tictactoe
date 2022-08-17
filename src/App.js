import "./App.css";
import TicTacToe from "./components/TicTacToe";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Oğuzcan Uzunöner</title>
      </Helmet>
      <TicTacToe />
    </>
  );
}

export default App;
