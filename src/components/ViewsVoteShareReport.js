import React from 'react';
import {Col,Row} from 'react-bootstrap';
import Vote from './Vote';
import Share from './Share';
import Views from './Views';
import {CommentIcon} from './Comments';
import Report from './Report';

export default function ViewsVoteShareReport(props){
    return (
        <>
        <Row className="mt-4 justify-content-between flex-nowrap" noGutters>
            <Col md={9}>
                <Row noGutters>
                    <Views count="2393"/>
                    <Vote downvotes={231} upvotes={789}/>
                    <CommentIcon count={290}/>
                </Row>
            </Col>
            <Col xs={"auto"}>
                <Row className="justify-content-end flex-nowrap h-100" noGutters>
                    <Share title={"Element Title"} url={"https://element.url.om/elimentId"}/>
                    <Report/>
                </Row>
            </Col>
        </Row>
        </>
    );
}