import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios'

require('dotenv').config()


const styles = theme => ({
  container: {
    display: 'block',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  }
})

class AddMovies extends React.Component {
  state = {
    title: '',
    release_date: '',
    rate: '',
    poster_path: '',
    overview: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  submitMovie() {
    axios.post('https://hackeryou-marcos-api.herokuapp.com/movies', {
      title: this.state.title,
      release_date: Number(this.state.release_date),
      rate: Number(this.state.rate),
      poster_path: this.state.poster_path,
      overview: this.state.overview
    })
  }

  render() {
    const {classes} = this.props;

    return (
        <div>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
                required
                id="outlined-required"
                label="Title"
                className={classes.textField}
                value={this.state.title}
                onChange={this.handleChange('title')}
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="outlined-required"
                label="Year Released"
                className={classes.textField}
                value={this.state.release_date}
                onChange={this.handleChange('release_date')}
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="outlined-required"
                label="Rate"
                className={classes.textField}
                value={this.state.rate}
                onChange={this.handleChange('rate')}
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="outlined-name"
                label="Poster URL"
                className={classes.textField}
                value={this.state.poster_path}
                onChange={this.handleChange('poster_path')}
                margin="normal"
                variant="outlined"
            />
            <TextField
                required
                id="outlined-multiline-static"
                label="Overview"
                multiline
                rows="8"
                col
                className={classes.textField}
                value={this.state.overview}
                onChange={this.handleChange('overview')}
                margin="normal"
                variant="outlined"
            />
          </form>
          <Button variant="outlined" color="primary" className={classes.button} onClick={this.submitMovie}>
            Submit
          </Button>
        </div>
    )
  }
}

AddMovies.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddMovies);
