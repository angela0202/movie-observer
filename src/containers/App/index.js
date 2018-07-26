import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import App from '../../components/App';
import { selectIsAuthenticated } from '../../selectors';

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectIsAuthenticated
});


export default connect(mapStateToProps)(App);