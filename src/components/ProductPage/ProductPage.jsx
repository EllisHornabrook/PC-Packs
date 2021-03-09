import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ProductPage.module.scss";
import displaySoldOut from "../../utils/displaySoldOut";

const ProductPage = (props) => {
    const { data, display, setDisplay, cart, setCart } = props;
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

    const displayProductPage = display ? {display: "block"} : null;
    const addToCart = (availableTickets > ticketCounter) ? cart => [...cart, data] : cart;

    return (
        <div style={displayProductPage} className={styles.product}>
            <div className={styles.articleBorder}>
                <article>
                    <FontAwesomeIcon 
                        icon={"times"} 
                        className={styles.icon} 
                        onClick={() => setDisplay(false)} 
                    />
                    <div className={styles.ticketCount}>
                        <p>Tickets: {ticketCounter} / {availableTickets}</p>
                    </div>
                    <h2>{itemName}</h2>
                    <img src={itemImg} alt={itemName} />
                    <p className={styles.productText}>{itemDetails}</p>
                    <div className={styles.divider} />
                    <ul className={styles.specList}>
                        {itemSpecs.map((spec, i) => 
                            itemSpecs ? <li key={i}>{spec}</li> : null
                        )}
                    </ul>
                    <div className={styles.divider} />
                    <p className={styles.ticketStatement}>
                        £{itemPrice} per ticket. Each customer may purchase a maximum of {maxTickets} tickets. All ticket sales are final.
                    </p>
                    <div
                        className={styles.button}
                        onClick={() => setCart(addToCart)}
                    >
                        {displaySoldOut(
                            availableTickets, 
                            ticketCounter, 
                            "Add To Cart"
                        )}
                    </div>
                </article>
            </div>
        </div>
    );
};

export default ProductPage;
