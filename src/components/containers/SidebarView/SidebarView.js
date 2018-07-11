import React, { Component } from 'react';
import List from '@material-ui/core/List';
import { ListElement } from '../../presenters/ListElement';
import ListItem from '../../../../node_modules/@material-ui/core/ListItem';
import ListItemText from '../../../../node_modules/@material-ui/core/ListItemText';
import { hnBasepath } from '../../../configs/config';

export default class SidebarView extends Component {
    constructor(props) {
        super(props);
        this.state = { idArray: [] };
    }

    async getIds() {
        const data = await fetch(hnBasepath + 'topstories.json').then(data => data.json());
        this.setState({ idArray: data })
    }

    componentDidMount() {
        this.getIds();
    }

    render() {
        let listItems;
        if (this.state.idArray.length !== 0) {
            listItems = this.state.idArray.map((item, index) => {
                return <ListElement elem={item} key={index} />
            });
        } else {
            listItems = <ListItem><ListItemText>Empty =)</ListItemText></ListItem>
        }
        return (
            <List>
                {listItems}
            </List>
        )
    }
}