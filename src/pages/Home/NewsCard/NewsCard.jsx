import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaRegBookmark, FaRegEye, FaRegStar, FaShareAlt, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, rating, author, total_view } = news;
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex justify-content-center align-items-center'>
                <Image src={author?.img} style={{ height: '50px' }} className='p-2' roundedCircle />
                <div className='ps-2 flex-grow-1'>
                    <p className='mb-0'>{author?.name}</p>
                    <p><small>{moment(author?.published_date).format('yyyy MM D')}</small></p>
                </div>
                <div>
                    <FaRegBookmark className='mx-2' /> <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} className='mt-3 mb-3' />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> :
                        <>
                            {details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link>
                        </>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-center align-items-center">
                <div className='flex-grow-1'>
                    <Rating
                        placeholderRating={rating?.number}
                        readonly
                        emptySymbol={<FaRegStar />}
                        placeholderSymbol={<FaStar className='text-warning'/>}
                        fullSymbol={<FaStar />}
                        className='me-2'
                    />
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaRegEye /> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;