import { Header } from "./components/Header";
import { Background } from "./components/Background";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
function App() {
  return (
    <>
    <div className="absolute z-50 w-full">
      <Header></Header>
      <Form></Form>
      <Footer></Footer>
    </div>
      <Background></Background>
    </>
  );
}

export default App;
