const soldOut = (val1, val2, text, price) => {
    const num1 = Math.abs(val1);
    const num2 = Math.abs(val2);

    if (num1 > num2) {
        return (
            <>
                <p>{text}</p>
                <p>{price}</p>
            </>
        );
    } else {
        return <p>Sold Out</p>;
    };
};

export default soldOut;