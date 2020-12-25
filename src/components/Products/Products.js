import React from 'react';
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";
import useStyles from "./styles";

const products = [
    { id: 1, name: "Shoes", description: "Running shoes.", price: "$5", image: "https://assetscdn1.paytm.com/images/catalog/product/F/FO/FOOKASOL-MEN-S-M-AN110169217D82CB7/1593083947735_0..jpg?" },
    { id: 2, name: "Macbook", description: "Apple macbook.", price: "$10", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202011?wid=904&hei=840&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1603406905000"  },
];

const Products = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>                
                    
                ))}
            </Grid>
        </main>
    )
}

export default Products;
