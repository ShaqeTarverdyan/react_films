import React from 'react';
import { Header, Segment} from 'semantic-ui-react';

const Home = () => {
    return (
       
        <Segment style={HomeStyle}>
           <Header as='h2'>this is home page</Header> 
        </Segment>
    );
}
const HomeStyle = {
    height:'60vw',
    textAlign:'center'
}

export default Home;