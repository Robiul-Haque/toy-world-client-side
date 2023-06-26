import PageTitle from "../../PageTitle/PageTitle";
import Accordion from "./Component/Accordion";
import './Blog.css';
import ScrollTopBtn from "../../ScrollTopBtn/ScrollTopBtn";

const Blog = () => {
    return (
        <div className="blog-bg-color">
            <PageTitle title={'Blog'}></PageTitle>
            <Accordion></Accordion>
            <ScrollTopBtn></ScrollTopBtn>
        </div>
    );
};

export default Blog;