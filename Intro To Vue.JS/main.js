var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    description: "100% Wool Blend, Moisture Wicking",
    image:
      "https://dl.dropboxusercontent.com/s/9zccs3f0pimj0wj/vmSocks-green-onWhite.jpg?dl=0",
    link: "http://www.google.com",
    inventory: 20,
    onSale: true,
    details: ["80% Cotton", "20% Polyester", "Gender-neutral"],
    sizes: ["Small", "Medium", "Large", "X-Large", "XX-Large"],
    variants: [
      {
        variantId: 2234,
        variantColor: "Green"
      },
      {
        variantId: 2235,
        variantColor: "Blue"
      }
    ]
  }
});
