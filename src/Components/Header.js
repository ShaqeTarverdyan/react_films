import React from 'react';
import {  Menu ,Segment, Button} from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchForm from '../Components/SearchForm';

const Header = () => {
    return (
   
        <Segment>
                <Menu  secondary>
                    <Menu.Item as={Link} to='/'>Home</Menu.Item>
                    <Menu.Item as={Link} to='/films'>Films</Menu.Item>
                    <Menu.Item as={Link} to='/contact'>Contact</Menu.Item>
                    <Menu.Item as={Link} to='/slider'>Slider</Menu.Item>
                    <Menu.Item as={Link} to='/Slider_Redux'>Slider_Redux</Menu.Item>
                    <Menu.Item position='right'>
                        <SearchForm/>
                    </Menu.Item>
                </Menu>
              
        </Segment>
      
    )
}

export default Header;