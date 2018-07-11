import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

export const DetailsCard = (props) => {
    const { by, time, title, type, url } = props.details;
    const date = new Date(time);
    return (
        <Card>
            <div>
                <CardContent>
                    <Typography variant="headline">{title}</Typography>
                    <Typography variant="subheading" color="textSecondary">by: {type}</Typography>
                    <Typography variant="subheading" color="textSecondary">by: {by} - {date.toDateString()}</Typography>
                    <Typography component="p"><a href={url}>{url}</a></Typography>
                </CardContent>
            </div>
        </Card>
    );
};