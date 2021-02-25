import React, { useState } from "react";
import styles from "./ProductCard.module.scss";
import ProductPage from "../ProductPage";

const ProductCard = (props) => {
    const { data } = props;
    const { 
        itemName,
        itemImg,
        itemPrice,
        availableTickets
    } = data;
    const [display, setDisplay] = useState(false);

    return (
        <article className={styles.cardContainer}>
            <div className={styles.card} onClick={() => setDisplay(true)}>
                <div className={styles.oddsContainer}>
                    <p>1/{availableTickets}</p>
                </div>
                <img src={itemImg} alt="product" />
                <h3><span>{itemName}</span></h3>
                <div className={styles.productButton}>
                    <p>Enter the draw</p>
                    <p>£{itemPrice}</p>
                </div>
            </div>
            <ProductPage data={data} display={display} setDisplay={setDisplay} />
        </article>
    );
};

export default ProductCard;
