import React from 'react';
import {Row} from 'react-bootstrap';
import Vote from './Vote';
import Share from './Share';
import Views from './Views';
import {CommentIcon} from './Comments';
import Report from './Report';

export default function ViewsVoteShareReport(props){
    return (
        <>
        <Row className="mt-4">
            <Views count="2393"/>
            <Vote downvotes={231} upvotes={789}/>
            <CommentIcon count={290}/>
            <Share title={"Element Title"} url={"https://element.url.om/elimentId"}/>
            <Report/>
        </Row>
        </>
    );
}