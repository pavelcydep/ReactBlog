/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { makeStyles } from '@mui/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';

const useStyles = makeStyles({
    root: {
        width: 250,
        height: 130,
    },
});

export const PostItem = ({
    title,
    description,
    likePost,
    liked,
    deletePost,
    image,
    togglePopupEdit,
    handleSelectPost
 }) => {

    
    const heartStyles = liked ? "crimson" : "black";
    const classes = useStyles();

const showEditForm=()=>{
    togglePopupEdit();
    handleSelectPost();
}




    return (

        <Card sx={{ maxWidth: 250 }}>
            <CardMedia>
                <img className={classes.root} src={image} />
            </CardMedia>

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"> <FavoriteIcon onClick={likePost} style={{ fill: heartStyles }} /></Button>
                <Button size="small"> <EditIcon onClick={showEditForm} /></Button>
                <Button size="small"> < DeleteIcon onClick={deletePost} /></Button>
                
            </CardActions>
        </Card>

    );
}





