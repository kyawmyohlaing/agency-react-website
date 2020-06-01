export const getPostBySlug = (slug, token) => {
    return dispatch => {
        API.getPostBySlug(slug, token, res => {
            dispatch({
                type: 'SET_FULL_POST_DATA',
                payload: res.data
            })
        })
    }
}