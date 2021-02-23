import React from "react";
import { Link } from "@reach/router";
import styles from "./ProductCard.module.scss";

const ProductCard = (props) => {
    const { 
        itemName,
        itemImg,
        itemPrice,
        raffleOdds,
        // itemInfo,
        // itemDetails,
        // maxTickets,
        // ticketCounter 
    } = props.data;

    return (
        <div className={styles.cardContainer}>
            <Link to="/product" className={styles.card}>
                <div className={styles.oddsContainer}>
                    <p>{raffleOdds}</p>
                </div>
                <img src={itemImg} alt="product" />
                <h3><span>{itemName}</span></h3>
                <div className={styles.enterDraw}>
                    <p>Enter the draw</p>
                    <p>£{itemPrice}</p>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
