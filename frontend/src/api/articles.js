import api from "./api";

export async function fetchArticles() {
  const res = await api.get("/articles");
  return res.data;
}

export async function fetchArticle(slug) {
  const res = await api.get(`/articles/${slug}`);
  return res.data;
}

export default async function createArticle(title, content, description, src) {
  const res = await api.post("/articles", {title, content, description, src});
  return res.data
}

export async function updateArticle(id, article) {
  const res = await api.put(`/articles/${id}`, ...article);
  return res.data;
}

export async function deleteArticle(id) {
  const res = await api.delete(`/articles/${id}`);
  return res.data;
}
