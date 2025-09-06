import React from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";


const Searchbar = ()=>{
    return(
        <>
            <Container fluid className="d-flex justify-content-center my-5 px-0">
                <Form className="w-100" style={{ maxWidth: "900px" }}>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            placeholder="Search for courses..."
                            className="py-2"
                        />
                        <Button type="submit" variant="primary">
                            Search
                        </Button>
                    </InputGroup>
                </Form>
            </Container>
        </>
    )
};

export default Searchbar;