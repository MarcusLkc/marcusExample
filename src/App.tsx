import React from "react";
import { Header } from "./components/Header";
import { ProjectNavigation } from "./layouts/Project/ProjectNavigation";
import { ProjectSubheader } from "./layouts/Project/ProjectSubheader";
import { Project } from "./layouts/Project";

function App() {
  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col">
      <Header />
      <Project />
    </div>
  );
}

export default App;
