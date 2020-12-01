import React from "react";
import employees from "./employees"
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";

function App() {
  return (
    <div>
      <Header/>
      <Search/>
      <Table employees={employees}/>
    </div>

  );
}

export default App;
