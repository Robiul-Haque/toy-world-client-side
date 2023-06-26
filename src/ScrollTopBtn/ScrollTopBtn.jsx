import ScrollToTop from "react-scroll-to-top";
import './ScrollTopBtn.css';

const ScrollTopBtn = () => {
    return (
        <div>
            <ScrollToTop smooth className="scroll-btn" />
        </div>
    );
};

export default ScrollTopBtn;