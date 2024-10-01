import { useState } from "react";
import Form from "./Form";
import ColorList from "./ColorList";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colors, setColors] = useState(new Values("#25e3e9").all(5));

  const addColor = (color) => {
    console.log(color);
    try {
      let newColors = new Values(color).all(5);
      setColors(newColors);
      toast.success(`${color} added`);
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };

  return (
    <main>
      <Form addColor={addColor}></Form>
      <ColorList colors={colors}></ColorList>
      <ToastContainer position="top-center"></ToastContainer>
    </main>
  );
};
export default App;
