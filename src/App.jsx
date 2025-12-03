import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.css";
import { useState } from "react";
import { Outlet } from "react-router";

function App() {
  const [bucketCount, setBucketCount] = useState(0);

  const handleAddToBucket = async (count) => {
    setBucketCount((prevBucketCount) => prevBucketCount + count);
  };

  return (
    <>
      <Header bucketCount={bucketCount} />
      <Outlet context={{ handleAddToBucket }} />
      <Footer />
    </>
  );
}

export default App;
