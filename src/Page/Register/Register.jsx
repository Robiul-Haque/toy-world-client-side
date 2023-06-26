import PageTitle from "../../PageTitle/PageTitle";
import ScrollTopBtn from "../../ScrollTopBtn/ScrollTopBtn";
import Form from "./Component/Form";
import './Register.css';

const Register = () => {
    return (
        <div className="register-bg-color">
            <PageTitle title={'Register'}></PageTitle>
            <Form></Form>
            <ScrollTopBtn></ScrollTopBtn>
        </div>
    );
};

export default Register;