import React from "react";
import Input from "./components/Input";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="px-16 md:p-12 lg:px-16 lg:py-12 xl:py-12 xl:px-24">
      <div className="text-lg text-gray-500 font-serif sm:text-2xl lg:text-3xl 2xl:text-4xl mb-7">
        Inputs
      </div>
      <Input />
      <Footer />
    </div>
  );
}

export default App;
