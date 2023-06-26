import PageTitle from "../../PageTitle/PageTitle";
import ScrollTopBtn from "../../ScrollTopBtn/ScrollTopBtn";
import Form from "./Component/Form";
import './Login.css';

const Login = () => {
    return (
        <div className="login-bg-color">
            <PageTitle title={'Login'}></PageTitle>
            <Form></Form>
            <ScrollTopBtn></ScrollTopBtn>
        </div>
    );
};

export default Login;