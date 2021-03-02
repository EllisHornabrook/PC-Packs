import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ProductPage.module.scss";
import displaySoldOut from "../../utils/displaySoldOut";

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

    const specMap = () => itemSpecs.map((spec, i) => {
        if (itemSpecs) {
            return (
                <li key={i}>{spec}</li>
            );
        } else {
            return null;
        };
    });

    return (
        <div style={displayProductPage()} className={styles.product}>
            <div className={styles.articleBorder}>
                <article>
                    <FontAwesomeIcon icon={"times"} className={styles.icon} onClick={() => setDisplay(false)} />
                    <div className={styles.ticketCount}>
                        <p>Tickets: {ticketCounter} / {availableTickets}</p>
                    </div>
                    <h2>{itemName}</h2>
                    <img src={itemImg} alt="product" />
                    <p className={styles.productText}>{itemDetails}</p>
                    <div className={styles.divider} />
                    <ul className={styles.specList}>
                        {specMap()}
                    </ul>
                    <div className={styles.divider} />
                    <p className={styles.ticketStatement}>
                        £{itemPrice} per ticket. Each customer may purchase a maximum of {maxTickets} tickets. All ticket sales are final.
                    </p>
                    <div className={styles.button}>
                        {displaySoldOut(availableTickets, ticketCounter, "Add To Cart")}
                    </div>
                </article>
            </div>
        </div>
    );
};

export default ProductPage;
