import React, { useState } from "react";
import styles from "./ProductCard.module.scss";
import ProductPage from "../ProductPage";
import displaySoldOut from "../../utils/displaySoldOut";

const ProductCard = (props) => {
    const { data, cart, setCart } = props;
    const {
        itemName,
        itemImg,
        itemPrice,
        availableTickets,
        ticketCounter
    } = data;
    const [display, setDisplay] = useState(false);

    return (
        <article className={styles.cardContainer}>
            <div className={styles.card} onClick={() => setDisplay(true)}>
                <div className={styles.oddsContainer}>
                    <p>1/{availableTickets}</p>
                </div>
                <img src={itemImg} alt={itemName} />
                <h3>{itemName}</h3>
                <div className={styles.button}>
                    {displaySoldOut(
                        availableTickets,
                        ticketCounter,
                        "Enter the draw",
                        `£${itemPrice}`
                    )}
                </div>
            </div>
            <ProductPage
                data={data}
                display={display}
                setDisplay={setDisplay}
                cart={cart}
                setCart={setCart}
            />
        </article>
    );
};

export default ProductCard;
