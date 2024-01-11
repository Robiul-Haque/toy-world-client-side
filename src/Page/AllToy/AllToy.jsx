import PageTitle from "../../PageTitle/PageTitle";
import Table from "./Component/Table";
import './AllToy.css';
import ScrollTopBtn from "../../ScrollTopBtn/ScrollTopBtn";

const AllToy = () => {
    return (
        <div className="all-toy-bg-color">
            <PageTitle title={'All Toy'}></PageTitle>
            <Table></Table>
            <ScrollTopBtn></ScrollTopBtn>
        </div>
    );
};

export default AllToy;