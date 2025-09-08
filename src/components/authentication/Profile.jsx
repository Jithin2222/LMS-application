import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, ListGroup, Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserDashboard from "../dashboard/UserDashboard";
import QuizPage from "../quiz/QuizPage";
import Notification from "../quiz/Notification";
import Setting from "../../pages/Setting";
import Message from "../quiz/Message";
import Footer from "../shared/Footer";
import CourseList from "../courses/CourseList";
import Forum from "../dashboard/Forum";
import WishlistPage from "../courses/WishlistPage";


function Profile(){

    const navigate = useNavigate();
    const[page, setPage] = useState("dashboard");
    const[userData, setUserData]=useState(null);

    useEffect(()=>{
        const savedUser = JSON.parse(localStorage.getItem("userData"));
        setUserData(savedUser);
    },[]);

    const handleLogout = () => {
        localStorage.removeItem("userData");
        localStorage.removeItem("enrolledCourses");
        navigate("/Login");
    };

    const renderPage = () => {
        switch(page){
            case "dashboard":
                return <Card className="p-3">
                            <UserDashboard/>
                        </Card>;
            case "message":
                return <Card className="p-3">
                            <Message/>
                        </Card>;
            case "quiz":
                return <Card className="p-3">
                            <QuizPage/>
                        </Card>;
            case "courses":
                return <Card className="px-0">
                            <CourseList/>
                        </Card>
            case "forum":
                return <Card className="p-3">
                            <Forum/>
                        </Card>;
            case "wishlist":
                return <Card className="p-3">
                            <WishlistPage/>
                        </Card>
            case "notification":
                return <Card className="p-3">
                            <Notification/>
                        </Card>
            case "setting":
                return <Card className="p-3">
                            <Setting/>
                        </Card>
        }
    }


    return(
        <>
            <Container fluid className="min-vh-100 px-0">
                <Row>
                    <Col md={3}>
                        <Card className="h-100 shadow-sm"  style={{backgroundColor:"#ffffff59"}}>
                            <Card.Body className="d-flex flex-column justify-content-between">
                            <div>
                                <div className="d-flex align-items-center mb-4">
                                    <Image src="https://tse4.mm.bing.net/th/id/OIP.p_yVJpMf6hUETy-glD0MQQHaLG?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt=".." roundedCircle  width={50}  height={50} style={{backgroundColor:"grey"}}/>
                                <div className="ms-3">
                                    <h6 className="mb-0">
                                        {userData ? `${userData.fname} ${userData.lname}` : "User"}
                                    </h6>
                                    <small className="text-muted">
                                        {userData ? userData.role : "role"}
                                    </small>
                                </div>
                                </div>
                                <ListGroup variant="flush">
                                    <ListGroup.Item action onClick={()=> navigate('/home')}>
                                        <i className="bi bi-house-fill p-2"></i>    
                                        Home
                                    </ListGroup.Item>
                                    <ListGroup.Item action onClick={()=> setPage("dashboard")}>
                                        <i className="bi bi-person-badge p-2"></i>
                                        Dashboard
                                    </ListGroup.Item>
                                    <ListGroup.Item action onClick={()=> setPage("message")} disabled>
                                        <i className="bi bi-envelope-fill p-2"></i>
                                        Messages
                                    </ListGroup.Item>
                                    <ListGroup.Item action onClick={()=> setPage("quiz")}>
                                        <i class="bi bi-fire p-2"></i>
                                        Quizes
                                    </ListGroup.Item>
                                    <ListGroup.Item action onClick={()=> setPage("courses")}>
                                        <i class="bi bi-box-fill p-2"></i>
                                        Courses
                                    </ListGroup.Item>
                                    <ListGroup.Item action onClick={()=> setPage("forum")}>
                                        <i class="bi bi-book p-2"></i>
                                        Forum
                                    </ListGroup.Item>
                                    <ListGroup.Item action onClick={()=> setPage("wishlist")}>
                                        <i class="bi bi-clipboard-check-fill p-2"></i>
                                        Wishlist
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                            <div>
                                <ListGroup variant="flush">
                                    <ListGroup.Item action onClick={()=> setPage("notification")}>
                                        <i class="bi bi-bell-fill p-2"></i>
                                        Notifications</ListGroup.Item>
                                    <ListGroup.Item action onClick={()=> setPage("setting")}>
                                        <i class="bi bi-gear-fill p-2"></i>
                                        Settings
                                    </ListGroup.Item>
                                    <ListGroup.Item action onClick={handleLogout}>
                                        <i class="bi bi-power p-2"></i>
                                        Logout
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={9} className="p-4">
                        {renderPage()}
                    </Col>
                </Row>
            </Container>

            <Footer/>

        </>
    )
};

export default Profile;