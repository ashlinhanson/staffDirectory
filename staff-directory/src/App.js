import React from "react";
import Search from "./pages/Search";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div>
      <Header />
      <Wrapper>
        <Search />

      </Wrapper>
    </div>
  );
}

export default App;
