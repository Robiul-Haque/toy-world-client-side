// import React from 'react';

const Accordion = () => {
    return (
        <div className="accordion container my-5 py-5" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        An access token and a refresh token are commonly used in authentication and authorization systems. They serve different purposes and are used together to enhance security and manage user sessions effectively.
                        <br />
                        <strong>Access Token:</strong> An access token is a credential that is used to access protected resources or perform actions on behalf of a user. It represents the user authorization to access certain resources or services. Access tokens are typically short-lived and have an expiration time. When a client such as a mobile app or a web browser wants to access a protected resource, it includes the access token in the request headers to authenticate itself and gain access.
                        <br />
                        <strong>Refresh Token:</strong>A refresh token is a long-lived credential that is used to obtain a new access token without requiring the user to reauthenticate. It is typically issued alongside the access token during the initial authentication process. When the access token expires, the client can use the refresh token to request a new access token from the authentication server. This process is known as token refresh or token refreshing. Refresh tokens have a longer lifespan than access tokens and are securely stored by the client.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Compare SQL and NoSQL databases?
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        SQL (Structured Query Language) and NoSQL (Not Only SQL) are two different types of database management systems that serve distinct purposes and have contrasting characteristics.
                        <br />
                        <strong>SQL:</strong> SQL databases use a structured, tabular data model with predefined schemas. They store data in tables, rows, and columns, and relationships between tables are established using primary and foreign keys. SQL databases follow a rigid schema, meaning the structure of the data is defined in advance. SQL databases use the SQL query language for defining and manipulating data. SQL provides a standardized syntax for performing complex queries, joins, aggregations, and data manipulation operations.
                        <br />
                        <strong>NoSQL:</strong> NoSQL databases use various data models, such as key-value, document, columnar, or graph. They offer schema flexibility, allowing for dynamic and unstructured data storage. NoSQL databases are often schema-less, meaning the structure can evolve over time without requiring predefined schemas. NoSQL databases often have their own query languages or APIs. These query languages may be simpler and more focused on specific data models. For example, document-based NoSQL databases often use query languages that are JSON-like.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        What is express js? What is Nest JS
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>Express.js:</strong> Express.js is a minimalistic and flexible web application framework for Node.js. It provides a set of robust features and a simple API for building web applications and APIs. Express.js is known for its lightweight nature and unopinionated approach, allowing developers to have more control over the application structure and implementation details. It provides routing, middleware support, and integrates well with various templating engines and databases. Express.js is widely used and has a large ecosystem of plugins and extensions available.
                        <br />
                        <strong>Nest.js:</strong> Nest.js is a progressive, TypeScript-based web application framework built on top of Node.js and Express.js. It follows a modular and opinionated architectural pattern inspired by Angular, making it suitable for building scalable and maintainable server-side applications. Nest.js emphasizes the use of decorators, dependency injection, and modules to structure the application. It provides features like powerful routing, middleware, dependency injection, database integration, and strong typing with TypeScript. Nest.js also has support for WebSockets and microservices architecture using tools like gRPC and RabbitMQ.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        What is MongoDB aggregate and how does it work
                    </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        MongoDB aggregate is a powerful aggregation framework that allows you to perform advanced data analysis and manipulation operations on collections of documents. It provides a flexible and efficient way to process data within the database, rather than retrieving the entire dataset and performing computations on the client-side.The aggregate framework in MongoDB works by processing documents through a pipeline of stages. Each stage applies a specific operation or transformation to the input documents and passes the result to the next stage. The stages are executed sequentially, and the final output is returned as the result of the aggregation.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;