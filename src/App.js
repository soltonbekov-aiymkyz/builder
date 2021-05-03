// import "./App.css";
// import Layout from "./components/Layout/Layout";
// import SkyscaperBuilder from "./components/SkyscaperBuilder/SkyscaperBuilder";
// import Checkout from "./components/Checkout/Checkout"
// import { Redirect, Route, Switch } from "react-router";
// function App() {
//   return (
//     <div className="App">
//      <Layout>
//      <Switch>
//           <Route path="/" component={SkyscaperBuilder} exact />
//           <Route path="/checkout" component={Checkout} />
//           <Redirect to="/" />
//         </Switch>
//        <h1>Skyscaper builder by Soltonbekova Aiym </h1>
//      </Layout>
//     </div>
//   );
// }
// export default App;

import Layout from "./components/Layout/Layout";
import SkyscaperBuilder from "./components/SkyscaperBuilder/SkyscaperBuilder";
import Checkout from "./components/Checkout/Checkout";
import Orders from "./components/Orders/Orders";
import "./App.css";
import { Redirect, Route, Switch } from "react-router";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" component={SkyscaperBuilder} exact />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;



























//history match
//push otpravlyaet na novuu
// replace ozgortboit almashtyrat 