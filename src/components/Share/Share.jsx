import './Share.css'
import { Button, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile, faLocationDot, faPhotoFilm, faTag } from '@fortawesome/free-solid-svg-icons';

function Share() {
    return (
        <div className='share'>
            <div className='shareWrapper'>
                <div className='shareTop'>
                    <img src="images/006.jpg" alt='awer321' className='shareProfileImg' />
                    <input placeholder="What's in your mind Khawar?" className='shareInput' />
                </div>
                <hr className='shareHr' />
                <div className='shareBottom'>
                    <div className='shareOptions'>
                        <Row>
                            <Col xs={12} sm={3}>
                                <div className='shareOption'>
                                    <FontAwesomeIcon icon={faPhotoFilm}  className="shareIcon" style={{color:'tomato'}} />
                                    <span className='shareOptionText'>Photos</span>
                                </div>
                            </Col>
                            <Col xs={12} sm={3}>
                                <div className='shareOption'>
                                    <FontAwesomeIcon icon={faTag} className="shareIcon" style={{color:'yellowgreen'}} />
                                    <span className='shareOptionText'>Tag</span>
                                </div>
                            </Col>
                            <Col xs={12} sm={3}>
                                <div className='shareOption'>
                                    <FontAwesomeIcon icon={faLocationDot} className="shareIcon" style={{color:'red'}} />
                                    <span className='shareOptionText'>Location</span>
                                </div>
                            </Col>
                            <Col xs={12} sm={3}>
                                <div className='shareOption'>
                                    <FontAwesomeIcon icon={faFaceSmile} className="shareIcon" style={{color:'gold'}} />
                                    <span className='shareOptionText'>Feelings</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className='shareButton'>
                    <Button variant="secondary" size='sm'>Share</Button>
                </div>
            </div>
        </div>
    )
}

export default Share
