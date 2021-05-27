import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function Shop({ count, handleClick }) {
    return (
        <>
            <Header count={count} />
            <Main handleClick={handleClick} />
            <Footer/>
        </>
    )

}

export default Shop;