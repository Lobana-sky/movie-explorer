import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const baseURL = "http://image.tmdb.org/t/p/w1280/";



class Actor extends Component {
  constructor() {
    super();
    this.state = {
      cast: []
    };
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/${this.props.actor}/credits?api_key=542003918769df50083a13c415bbc602`
    )
      .then(resp => resp.json())
      .then(actors =>
        this.setState({
          cast: actors.cast.slice(0, 4)
        })
      );
  }



  useStyles = () => makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      
    },
    inline: {
      display: 'inline',
    },
  }));


  classes = this.useStyles();

  renderActors = list => {

    return list.map(actor => {
      return (
        <React.Fragment>

        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={actor.name} src={baseURL+actor.profile_path} />
        </ListItemAvatar>
        <ListItemText
          primary={actor.name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={this.classes.inline}
                color="textPrimary"
              >
                Character in Movie :{actor.character}
              </Typography>
         
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
  </React.Fragment>
      )
    })
  }



  render() {

    return (
      <List className={this.classes.root}>
        Actors
          {this.renderActors(this.state.cast)}
          
        </List>


 
    );
  }
}

export default Actor;

/**
 * 
 *    <List key={actor.id}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={baseURL + actor.profile_path} />
                </ListItemAvatar>
                <ListItemText
                  primary= {actor.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                      >
                       
                      </Typography>
                      Charecter in Movie : {actor.character}
                    </React.Fragment>
                  }
                />
              </ListItem>

              <Divider variant="inset" component="li" />
            </List>


         <GridListTile key={actor.profile_path} >
              <img  src={baseURL + actor.profile_path} alt={actor.name} />
              <GridListTileBar
                title={actor.name}
                subtitle={<span>Charecter : {actor.character}</span>}
              />
            </GridListTile>
 */
