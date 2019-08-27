import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError
} from 'containers/App/selectors';
import { loadRepos } from '../App/actions';
import saga from './saga';
import RepoPage from './RepoPage';

const mapDispatchToProps = (dispatch) => ({
  onPageLoad: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadRepos());
  }
});

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSaga = injectSaga({ key: 'repo', saga });

export default compose(withSaga, withConnect)(RepoPage);
export { mapDispatchToProps };
