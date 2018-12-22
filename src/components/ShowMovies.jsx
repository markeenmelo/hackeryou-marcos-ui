import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import axios from "axios"

const styles = theme => ({
  card: {
    maxWidth: 310,
  },
  media: {
    height: 0,
    paddingTop: '150%',
  },
  actions: {
    display: 'flex',
  },
  button: {
    margin: theme.spacing.unit,
  }
})

class ShowMovies extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    axios
        .get('https://hackeryou-marcos-api.herokuapp.com/movies')
        .then(res => this.setState({movies: res.data}))
        .catch(err => err)
  }

  static removeMovie = (movieId) => {
    console.log(`https://hackeryou-marcos-api.herokuapp.com/movies/${movieId}`)
    axios.delete(`https://hackeryou-marcos-api.herokuapp.com/movies/${movieId}`)
    ShowMovies.forceUpdate()
    // window.location.reload()
  }

  render() {
    const {classes} = this.props;

    let listMovies = this.state.movies.map(movie => {
      return (
          <Card className={classes.card} key={movie._id}>
            <CardHeader
                title={movie.title}
            />
            <CardMedia
                className={classes.media}
                image={movie.poster_path}
            />
            <CardContent>
              <Typography component="p"><strong>Year Released: </strong>{movie.release_date}</Typography>
              <Typography component="p"><strong>Rate: {movie.rate}</strong></Typography>
              <Typography component="p"><strong>Synopses:</strong> {movie.overview}</Typography>
            </CardContent>
            <Button variant="outlined" color="secondary" className={classes.button}
                    onClick={ShowMovies.removeMovie.bind(null, movie._id)}>
              Remove Movie
            </Button>
          </Card>
      )
    })

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="stretch"
        >
          {listMovies}
        </Grid>
    )
  }
}

ShowMovies.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ShowMovies);
