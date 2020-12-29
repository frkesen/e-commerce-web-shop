import React from 'react';
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";
import CartItem from "./CardItems/CartItem";

const Cart = ({ cart }) => {
    const classes = useStyles();
    
    const EmptyCart = () => {
        return (
        <Typography variant="subtitle1">You have no items in your shopping cart, start adding some!</Typography>)
    };

    const FilledCart = () => {
        return (
        <>
            <Grid container spacing={3}>
                {cart?.line_items?.map((item) => (
                    <Grid item key={item.id} xs={12} sm={4}>
                        <CartItem item={item} />
                    </Grid>                
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: {cart?.subtotal?.formatted_with_symbol} </Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>

            </div>
        </>)
    };

    if(!cart.line_items) return 'Loading...'

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h4" gutterBottom>Your Shopping Cart</Typography>
            { !cart?.line_items?.length ? <EmptyCart />  : <FilledCart /> }
        </Container>
    )
}

export default Cart;