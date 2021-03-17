import Layout from "./components/Layout/Layout";
import Logo from "./components/Logo/Logo";
import Nav from "./components/Nav/Nav";
import classes from "./components/Toolbar/Toolbar";


function App() {
  return (
    <div className="App">
     <Layout>
       <Toolbar/>
       <Logo />
       <Nav />
       awesome builder by soltonbekova aiymkyz
     </Layout>
    </div>
  );
}

export default App;

