import React, { useState } from 'react';
import userThumb from './userThumb.jpeg'
import {Badge,Col,Row,Image} from 'react-bootstrap';

const AuthorInfo = (props) => {
    const imgSize={width:"72px"}
    return  (
            <Row noGutters>
                <Col lg={"auto"} className="mr-3 text-center">
                    <Image className="mb-1" src={userThumb} roundedCircle style={imgSize}/>
                </Col>
                <Col style={{lineHeight:"1.2"}}>
                    <p className="pr-0 m-0">
                        <strong>
                            Abhishek Parashar Maheshwari
                        </strong>
                        <span className="text-muted pl-1" >
                            &middot; last updated Jul 23
                        </span>
                    </p>
                    <span className="text-muted" style={{lineHeight:"1"}}>(@para-abhi) <Badge size="sm" variant="warning">Noobie</Badge></span>
                    <p style={{lineHeight:"1.6"}}>
                        I love to draw and love.
                    </p> 
                </Col>
            </Row>
    )
}
export default AuthorInfo;