import React from "react";
import Data from "./data.json";
import Product from "./Product";

class Main extends React.Component {

  render() {
    const data = Data.products;
    return (
      <>
        <div>
          <Product data={data || []} test='test' />
        </div>
      </>
    )
  }
}

export default Main;