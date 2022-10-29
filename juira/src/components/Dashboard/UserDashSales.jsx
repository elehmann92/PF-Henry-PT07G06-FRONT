import React from 'react';
import Container from '@mui/material/Container';
import DashCard from './DashCard.jsx';
import EnhancedTable from './EnhancedTable';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();
const useStyles = makeStyles({
    root: {
        color: theme.palette.primary.main,
    }
    ,
    /* btn: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    }, */

    palette: {
        type: 'light',
        primary: {
            main: '#23c197',
        },
        secondary: {
            main: '#19d6c6',
        },
        text: {
            primary: 'rgba(179,0,0,0.87)',
        },
    },

});

export default function UserDashSales() {

    // let products = useSelector((state) => state.productsReducer.allProducts);

    // const dispatch = useDispatch();
    // products.length === 0 && dispatch(getAllProducts());

    // // Card 1
    // let productsTotalQuantity = products.length;
    // let totalAmount = "$ " + products.reduce((prev, curr) => prev + curr.price, 0).toLocaleString('de-DE');

    // // Card 2 
    // const publishedProducts = products.filter(p => p.status === "Publicado");
    // let productsPublishedQuantity = publishedProducts.length;
    // let totalAmountPublished = "$ " + publishedProducts.reduce((prev, curr) => prev + curr.price, 0).toLocaleString('de-DE');

    // // Card 3
    // const pausedProducts = products.filter(p => p.status === "En pausa");
    // let productsPausedQuantity = pausedProducts.length;
    // let totalAmountPaused = "$ " + pausedProducts.reduce((prev, curr) => prev + curr.price, 0).toLocaleString('de-DE');

    //let totalAmountSold = 0;
    //let productsSold = 0;
    //let productsDeleted = 0;



    const classes = useStyles();

    return (
        <Container className={classes.root}
            sx={{
                width: "85%", height: "100%", /* backgroundColor:"#444", */
                boxShadow: '0 8px 15px 5px #cccccc55', padding: '2rem', borderRadius: '.8rem'
            }} >

            INSERTAR TABLA DE VENTAS

            {/* <ProductsTable/> */}
            {/* <EnhancedTable items={products} className={classes.palette} /> */}

        </Container>
    )
}

