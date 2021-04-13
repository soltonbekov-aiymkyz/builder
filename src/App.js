
import "./App.css";
import Layout from "./components/Layout/Layout";
import SkyscaperBuilder from "./components/SkyscaperBuilder/SkyscaperBuilder";

// import React, { Component } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { bounce } from 'react-animations';



// const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`

function App() {
  return (
    <div className="App">
     <Layout>
       <h1>Skyscaper builder </h1>
       {/* <Bounce><h1>Hello Animation Bounce</h1></Bounce> */}
      <SkyscaperBuilder />
     </Layout>
    </div>
  );
}
export default App;
