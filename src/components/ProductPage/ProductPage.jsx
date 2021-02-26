import React from "react";
import styles from "./ProductPage.module.scss";

const ProductPage = (props) => {
    const { data, display, setDisplay } = props;
    const { 
        itemName,
        itemImg,
        itemPrice,
        itemDetails,
        itemSpecs,
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

    const specMap = () => itemSpecs.map(spec => {
        if (itemSpecs) {
            return (
                <li>{spec}</li>
            );
        } else {
            return null;
        };
    });

    return (
        <div style={displayProductPage()} className={styles.product}>
            <div className={styles.articleBorder}>
                <article onClick={() => setDisplay(false)}>
                    <div className={styles.ticketCount}>
                        <p>Tickets: {ticketCounter} / {availableTickets}</p>
                    </div>
                    <h2>{itemName}</h2>
                    <img src={itemImg} alt="product" />
                    <div className={styles.divider} />
                    <p className={styles.productText}>{itemDetails}</p>
                    <div className={styles.divider} />
                    <ul className={styles.specList}>
                        {specMap()}
                    </ul>
                    <div className={styles.divider} />
                    <p className={styles.ticketStatement}>
                        £{itemPrice} per ticket. Each customer may purchase a maximum of {maxTickets} tickets.
                    </p>
                    <div className={styles.productButton}>
                        <p>Add to Cart</p>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default ProductPage;
