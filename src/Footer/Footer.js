import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router';
import {makeStyles} from "@material-ui/core/styles";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Whatshot} from '@material-ui/icons';

export default function Footer() {

  const history = useHistory();

  const [value, setValue] = React.useState('popular');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push("/" + `${newValue}`);
  };

  const useStyles = makeStyles({
    root: {
      backgroundColor: "pink",
      zIndex: 100,
      position: "fixed",
      bottom: 0,
      width: "100%"
    }
  });
  const classes = useStyles();

  return (
      <BottomNavigation sx={{width: 500}} value={value} onChange={handleChange} className={classes.root}>
        <BottomNavigationAction
            label="Popular"
            value="popular"
            icon={<RestoreIcon/>}

        />
        <BottomNavigationAction
            label="Series"
            value="series"
            icon={<FavoriteIcon/>}
        />
        <BottomNavigationAction
            label="Hot"
            value="trending"
            icon={<Whatshot/>}
        />
      </BottomNavigation>

  );
}