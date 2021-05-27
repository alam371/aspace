import styles from "./Product.module.css"
import ProductItem from "./ProductItem";

function Products({ items, handleClick }) {
    return (
        <>
            <h2>Constellation Products:</h2>
            <div className={styles.productWrapper}>
                {items !== null ? <ProductItem items={items} handleClick={handleClick}/> : <h2>Loading the amazing cosmic shop</h2>}
            </div>
        </>
    )
}

export default Products;