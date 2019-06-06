import React from 'react';
import { Pagination , Segment} from 'semantic-ui-react'

const Contact = () => {
    return (
        <Segment>
            <Pagination defaultActivePage={5} totalPages={10}/>
        </Segment>
    );
}

export default Contact;