import React from "react";
import styles from "./ProductPage.module.scss";

const ProductPage = (props) => {
    const { data, display, setDisplay } = props;
    const { 
        itemName,
        itemImg,
        itemPrice,
        itemDetails,
        availableTickets,
        maxTickets,
        ticketCounter
    } = data;

    const displayProductPage = () => {
        if (display) {
            return {display: "block"};
        } else {
            return null;
        };
    };

    return (
        <div style={displayProductPage()} className={styles.product}>
            <div className={styles.articleBorder}>
                <article onClick={() => setDisplay(false)}>
                    <div className={styles.ticketCount}>
                        <p>Tickets: {ticketCounter} / {availableTickets}</p>
                    </div>
                    <h1>{itemName}</h1>
                    <img src={itemImg} alt="product" />
                    <p>{itemDetails}</p>
                    <p>£{itemPrice} per ticket. Each customer may purchase a maximum of {maxTickets} tickets.</p>
                    <div className={styles.productButton}>
                        <p>Add to Cart</p>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default ProductPage;
