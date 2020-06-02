import React, {Component} from 'react';
import * as SiteActions from '../../store/actions/siteActions';
import {connect} from 'react-redux';

class CommentBuilder extends Component {
    render(){
        return(
            <h1>Comments</h1>
        )
    }
}
const mapStateToProps = state => {
   auth: state.auth
}
const mapDispatchToProps = dispatch => ({
    postComment: (comment, token) => {
        dispatch(SiteActions.postComment(comment, token));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentBuilder);