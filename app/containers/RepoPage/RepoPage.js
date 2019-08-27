/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ReposList from 'components/ReposList';
import './style.scss';

export default class RepoPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  componentDidMount() {
    const { onPageLoad } = this.props;
    onPageLoad();
  }

  render() {
    const {
      loading, error, repos
    } = this.props;
    const reposListProps = {
      loading,
      error,
      repos
    };

    return (
      <div className="repo-page">
        <Helmet>
          <title>Darian Tavana - Repositories</title>
          <meta
            name="description"
            content="Repository Page for Darian Tavana"
          />
        </Helmet>
        <h1>Repositories</h1>
        <ReposList {...reposListProps} />
      </div>
    );
  }
}

RepoPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onPageLoad: PropTypes.func
};
