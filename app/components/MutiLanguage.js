import PropTypes from 'prop-types';
import React, { Component } from 'react';
//import noop from 'lodash/noop';
import flow from 'lodash.flow';

import { connect } from 'react-redux';

import translate from 'app/utils/i18n/Translate.js';



const stateToProps = state => ({
    currentLanguage: state.language.language
});

class MutiLanguage extends Component {
  constructor(props) {
    super(props);

  }

 selectChangeHandler(event){
    var that =this
     console.log(event.target.value);
  }
  render() {
    return (
      <div style={{textAlign:"center",padding:"20px" }}>

           {this.props.strings.login}
      </div>
    );
  }
}



MutiLanguage.propTypes = {

  strings: PropTypes.object
};

MutiLanguage.defaultProps = {

  strings: {
    login: 'Login'

    }


};

const decorators = flow([
  connect(stateToProps),
  translate('MutiLanguage')
]);

export default decorators(MutiLanguage);
