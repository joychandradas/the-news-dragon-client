import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../../Qzone/Qzone';
import bg from '../../../../assets/bg.png';
import './RightNav.css';

const RightNav = () => {
    return (
        <div>
            {/* login button */}
            <h4>Login with</h4>
            <Button className='mb-2 w-75 mt-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
            <Button className='w-75' variant="outline-secondary"> <FaGithub /> Login with GitHub</Button>
            {/* find us */}
            <div className='mt-5'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item className='m-2 w-75'> <FaFacebook className='text-info mx-2' /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='m-2 w-75'> <FaTwitter className='text-primary mx-2' /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='m-2 w-75'> <FaInstagram className='text-danger mx-2' /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            {/* Q-Zone */}
            <Qzone />
            <div className='hard-text'>
                <img src = {bg} alt="" />
                <div className='center-text'>
                    <h3>Create an Amazing Newspaper</h3>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="danger">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;