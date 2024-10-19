export enum routes {
  home = "/",
  category = "/category/:id",
  product = "/product/:id",
  card = "/card",
  allProducts = "/products/",
  notFound = "/404",
}

export enum backendRoutes {
  categories = "categories/all",
  categoryById = "categories/:id",
  products = "products/all",
  productById = "products/:id",
  getCouponRequest = "/sale/send",
  sendOrder = "order/send",
}
