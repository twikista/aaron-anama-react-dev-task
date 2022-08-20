import { Component } from "react";
import MainCart from "./components/MainCart";
import Header from "./components/Header";
import Main from "./components/Main";
import Product from "./components/Product";
import Products from "./components/Products";
import { Routes, Route, Navigate } from "react-router-dom";

class App extends Component {
  state = { currentCurrency: "USD", symbol: "$", open: false };
  getSelectedCurrency = (currency) => {
    this.setState({
      ...this.state,
      currentCurrency: currency.label,
      symbol: currency.symbol,
    });
    // console.log(this.state);
  };

  overLaytoggle = (toggleState) => {
    this.setState({ ...this.state, open: toggleState });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header
          getSelectedCurrency={this.getSelectedCurrency}
          overLaytoggle={this.overLaytoggle}
        />
        <Main>
          <Routes>
            <Route
              path="/"
              element={
                <Products
                  currentCurrency={this.state}
                  isOpen={this.state.open}
                />
              }
            />
            {/* <Route path="all" element={<Navigate to="/" />} /> */}
            <Route
              path="/:category"
              element={
                <Products
                  currentCurrency={this.state}
                  isOpen={this.state.open}
                />
              }
            />
            {/* <Route
              path="/all"
              element={
                <Products
                  currentCurrency={this.state}
                  isOpen={this.state.open}
                />
              }
            /> */}
            <Route
              path="/:category/:product"
              element={<Product currentCurrency={this.state} />}
            />
            {/* <Route
              path="/product/:produt"
              element={<Product currentCurrency={this.state} />}
            /> */}
            <Route
              path="/cart"
              element={<MainCart currentCurrency={this.state} />}
            />
          </Routes>
        </Main>
      </div>
    );
  }
}

export default App;
