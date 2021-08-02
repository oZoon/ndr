import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Content from '../containers/content';
import separateProps from '../lib/separateProps';
import mapStateToProps from '../lib/mapStateToProps';
import mapDispatchToProps from '../lib/mapDispatchToProps';

let App = props => {
    const newProps = separateProps(props);
    return <Content {...newProps.content} />;
};

App = connect(mapStateToProps, mapDispatchToProps)(App);
export default withRouter(props => <App {...props} />);
