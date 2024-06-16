import http from "@config/http";

export default function getProducts() {
  return http.get("/products").then((res) => res.data);
}
