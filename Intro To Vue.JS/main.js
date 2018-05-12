var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    description: "100% Wool Blend, Moisture Wicking",
    link: "http://www.google.com",
    inventory: 20,
    inStock: true,
    image:
      "https://dl.dropboxusercontent.com/s/9zccs3f0pimj0wj/vmSocks-green-onWhite.jpg?dl=0",
    onSale: true,
    cart: 0,
    details: ["80% Cotton", "20% Polyester", "Gender-neutral"],
    sizes: ["Small", "Medium", "Large", "X-Large", "XX-Large"],
    variants: [
      {
        variantId: 2234,
        variantColor: "Green",
        variantImage:
          "https://dl.dropboxusercontent.com/s/9zccs3f0pimj0wj/vmSocks-green-onWhite.jpg?dl=0"
      },
      {
        variantId: 2235,
        variantColor: "Blue",
        variantImage:
          "https://dl.dropboxusercontent.com/s/t32hpz32y7snfna/vmSocks-blue-onWhite.jpg?dl=0"
      }
    ]
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    },
    removeFromCart() {
      this.cart--;
    }
  }
});
