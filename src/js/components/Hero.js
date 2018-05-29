import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BEMHelper from 'react-bem-helper';
import { setHeroDirection } from '../actions/heroActions';

const bem = new BEMHelper({ name: 'hero' });

class Hero extends Component {
  constructor() {
    super();
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.setHeroDirection = this.setHeroDirection.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  setHeroDirection(direction) {
    this.props.setHeroDirection(direction);
  }

  handleKeyDown(e) {
    const key = e.keyCode || e.charCode;
    let direction = '';
    switch (key) {
      case 37:
        if (this.props.hero.direction !== 'left') direction = 'left';
        break;
      case 39:
        if (this.props.hero.direction !== 'right') direction = 'right';
        break;
      default:
        direction = false;
    }
    if (direction) this.setHeroDirection(direction);
  }

  render() {
    return (
      <div {...bem()} onKeyDown={this.handleKeyDown} role="presentation" />
    );
  }
}

Hero.propTypes = {
  hero: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  setHeroDirection: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  hero: state.hero,
});

export default connect(mapStateToProps, { setHeroDirection })(Hero);
