import * as React from "react";
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Layout from "./components/Layout/Layout";

class App extends React.Component {
  public render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
