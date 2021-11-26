import "./App.css";
import Product from "./components/Product";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div>
        <Button title="Add New"/>
      </div>
      <div>
        <Input name="Search Products" placeholder="Search Products" />
        <Input name="Name" placeholder="Name"/>
        <Input name="Price" placeholder="Price"/>
      </div>

      <Product name="Mark" description="Air Max 95 U" prics="$ 99" />
    </div>
  );
}

export default App;
