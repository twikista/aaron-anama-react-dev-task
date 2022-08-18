import { Component } from "react";
import styled from "styled-components";
import MiniCartItem from "./MiniCartItem";
import { cart } from "../data";

const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 293px;
  max-height: 420px;
  overflow: hidden scroll;
`;

class MinicartItems extends Component {
  render() {
    return (
      <CartItemsContainer>
        {cart.map((item) => (
          <MiniCartItem
            key={item.id}
            item={item}
            currentCurrency={this.props.currentCurrency}
          />
        ))}
      </CartItemsContainer>
    );
  }
}

export default MinicartItems;
