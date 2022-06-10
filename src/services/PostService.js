import { Api } from "helpers/Api";

const parseResponse = (response) => response.json();

const transformPost = (post) => {
  return {
    ...post,
    id: post._id,
    photo: post.photo,
    name: post.name,
    dateHour: post.dateHour,
    like: post.like
  }
}

const parseTransformList = (response) => parseResponse(response).then(posts => posts.map(transformPost))

const parseTransformItem = (response) => parseResponse(response).then(transformPost)

export const PostService = {
  getList: () => fetch(Api.postList(), { method: "GET" }).then(parseTransformList),
  getById: (id) =>
    fetch(Api.postById(id), { method: "GET" }).then(parseResponse),
  create: () => fetch(Api.createPost(), { method: "POST" }).then(parseTransformItem),
  updateById: (id) =>
    fetch(Api.updatePostById(id), { method: "PUT" }).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deletePostById(id), { method: "DELETE" }).then(parseResponse),
};
