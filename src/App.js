
import "./App.css";
import Layout from "./components/Layout/Layout";
import SkyscaperBuilder from "./components/SkyscaperBuilder/SkyscaperBuilder";

function App() {
  return (
    <div className="App">
     <Layout>
       <h1>Skyscaper builder by Soltonbekova Aiym</h1>
      <SkyscaperBuilder />
     </Layout>
    </div>
  );
}
export default App;