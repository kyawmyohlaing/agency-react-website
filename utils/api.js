import { getPostBySlug } from "../store/actions/siteActions";

getPostBySlug: (slug, token, success) => {
    axios.get(`${host}/api/Posts/findOne?access_token=${token}`, {
        params: {
            filter: {
                where: {
                    slug: slug
                }
            }
        }
    }).then(res => {
        success(res);
    })
}