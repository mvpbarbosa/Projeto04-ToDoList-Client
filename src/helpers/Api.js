const PostContext = {
  postEndpoint: () => `${Api.baseUrl}/posts`,
  postList: () => `${PostContext.postEndpoint()}/all-posts`,
  postById: (id) =>  `${PostContext.postEndpoint()}/one-post/${id}`,
  createPost: () => `${PostContext.postEndpoint()}/create-post`,
  updatePostById: (id) => `${PostContext.postEndpoint()}/update-post/${id}`,
  deletePostById: (id) => `${PostContext.postEndpoint()}/delete-post/${id}`
};

export const Api = {
  baseUrl: process.env.REACT_APP_API_URL,
  ...PostContext,
};
