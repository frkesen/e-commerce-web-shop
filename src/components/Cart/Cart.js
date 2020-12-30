import React from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  CircularProgress,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import CartItem from "./CardItems/CartItem";

const Cart = ({ cart, handleUpdateCartQty, handleRemove, handleEmptyCart }) => {
  const classes = useStyles();

  const EmptyCart = () => {
    return (
      <Typography variant="subtitle1">
        You have no items in your shopping cart,
        <Link to="/" className={classes.link}>
          start adding some!
        </Link>
      </Typography>
    );
  };

  const FilledCart = () => {
    return (
      <>
        <Grid container spacing={3}>
          {cart?.line_items?.map((item) => (
            <Grid item key={item.id} xs={12} sm={4}>
              <CartItem
                item={item}
                onUpdateCartQty={handleUpdateCartQty}
                onRemoveFromCart={handleRemove}
              />
            </Grid>
          ))}
        </Grid>
        <div className={classes.cardDetails}>
          <Typography variant="h4">
            Subtotal: {cart?.subtotal?.formatted_with_symbol}{" "}
          </Typography>
          <div>
            <Button
              className={classes.emptyButton}
              size="large"
              type="button"
              variant="contained"
              color="secondary"
              onClick={handleEmptyCart}
            >
              Empty Cart
            </Button>
            <Button
              className={classes.checkoutButton}
              size="large"
              type="button"
              variant="contained"
              color="primary"
            >
              Checkout
            </Button>
          </div>
        </div>
      </>
    );
  };

  return (
    <Container>
      {cart?.line_items == null ? (
        <div className={classes.root}>
          <CircularProgress className={classes.circular} />
        </div>
      ) : (
        <>
          <div className={classes.toolbar} />
          <Typography className={classes.title} variant="h4" gutterBottom>
            Your Shopping Cart
          </Typography>
          {!cart?.line_items?.length ? <EmptyCart /> : <FilledCart />}
        </>
      )}
    </Container>
  );
};

export default Cart;
