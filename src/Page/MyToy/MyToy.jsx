import PageTitle from "../../PageTitle/PageTitle";
import ScrollTopBtn from "../../ScrollTopBtn/ScrollTopBtn";
import Table from "./Component/Table";

const MyToy = () => {
    return (
        <div className="my-toy-bg-color">
            <PageTitle title={'My Toy'}></PageTitle>
            <Table></Table>
            <ScrollTopBtn></ScrollTopBtn>
        </div>
    );
};

export default MyToy;