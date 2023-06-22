/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";

const PageTitle = ({ title }) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title} | KID TOYS</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        </>
    );
};

export default PageTitle;