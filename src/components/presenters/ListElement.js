import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { Link } from '@reach/router';
import ListItemText from '@material-ui/core/ListItemText';

export const ListElement = (props) => {
    const id = '/details/' + props.elem
    return (
        <ListItem button divider>
            <Link to={id}>#{props.elem}</Link>
        </ListItem>
    );
}
