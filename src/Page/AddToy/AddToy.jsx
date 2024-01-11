import PageTitle from "../../PageTitle/PageTitle";
import Form from "./Component/Form";
import './AddToy.css';
import ScrollTopBtn from "../../ScrollTopBtn/ScrollTopBtn";

const AddToy = () => {
    return (
        <div className="add-toy-bg-color">
            <PageTitle title={'Add A Toy'}></PageTitle>
            <Form></Form>
            <ScrollTopBtn></ScrollTopBtn>
        </div>
    );
};

export default AddToy;