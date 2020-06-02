import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../Common/Header';
import API from '../../utils/api';
import siteActions from '../../store/actions/siteActions';
import {Link} from 'react-router-dom';
import CommentBuilder from '../components/CommentBuilder';

class Single extends Component{

    componentDidMount(){
        this.props.getSinglePost(this.props.match.params.slug, this.props.auth.token)
    }
    render(){
        return(
            <div>
                <Header
                    title="Blog"
                    subtitle={this.props.site.post.title}
                    showButton={false}
                    image= {
                        this.props.site.post.PostImage.length > 0 ?
                            API.makeFileURL(this.props.site.post.PostImage[0].url, this.props.auth.token)
                        : ''
                    }
                        />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="post-content" dangerouslySetInnerHTML={{__html: this.props.site.post.content}}>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <h3>comment</h3>
                            {this.props.auth.token ?
                            <CommentBuilder />
                            :
                            <p>Need an account? <Link to="/signup">Signup</Link></p>    
                        }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    site: state.site,
})
const mapDispatchToProps = dispatch => ({
    getSinglePost: (slug, token) => {
        dispatch(SiteActions.getPostBySlug(slug, token));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Single);