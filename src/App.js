import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import data from "./data/data.json";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"



//Merging, creating and defining props and state variables for required component
const App = () => {
  
  // counter state
  const [itemCount, setItemCount] = useState(0);

  //function to check type of button for calling related functions
  const manageItems = (event) => {
    if (event.target.innerText === "Add to cart") {
      addItem(event);

    } else if(event.target.innerText === "Remove from cart") {
      removeItem(event);
    }
  }

  //add item function to increase item count
  const addItem = (event) => {
    setItemCount(() => itemCount + 1);
    event.target.innerText = "Remove from cart";
    event.target.classList.value = "btn btn-outline-danger mt-auto";
  };

  //remove item function to decrease item count
  const removeItem = (event) => {
    setItemCount(() => itemCount - 1);
    event.target.innerText = "Add to cart";
    event.target.classList.value = "btn btn-outline-dark mt-auto";
  };
 
  return (
    <>
      <Navbar itemCount={itemCount} />
      <Header />
      <Cards data={data} manageItems={manageItems} />
      <Footer />
    </>
  );
}

export default App;