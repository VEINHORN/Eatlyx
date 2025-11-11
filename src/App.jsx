import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.css";
import { MenuPage } from "./pages/MenuPage/MenuPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { useState } from "react";

function App() {
  const [bucketCount, setBucketCount] = useState(0);

  const handleAddToBucket = (count) => {
    setBucketCount((prevBucketCount) => prevBucketCount + count);
  };

  return (
    <>
      <Header bucketCount={bucketCount} />
      <MenuPage onAddToBucket={handleAddToBucket} />
      <Footer />
    </>
  );
}

export default App;
