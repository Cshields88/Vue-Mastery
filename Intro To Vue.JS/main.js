var app = new Vue({
  el: "#app",
  data: {
    brand: "Vue Mastery",
    product: "Socks",
    description: "100% Wool Blend, Moisture Wicking",
    link: "http://www.google.com",
    inventory: 20,
    selectedVariant: 0,
    onSale: true,
    cart: 0,
    details: ["80% Cotton", "20% Polyester", "Gender-neutral"],
    sizes: ["Small", "Medium", "Large", "X-Large", "XX-Large"],
    variants: [
      {
        variantId: 2234,
        variantColor: "Green",
        variantImage:
          "https://dl.dropboxusercontent.com/s/9zccs3f0pimj0wj/vmSocks-green-onWhite.jpg?dl=0",
        variantQuantity: 10
        // onSale: true
      },
      {
        variantId: 2235,
        variantColor: "Blue",
        variantImage:
          "https://dl.dropboxusercontent.com/s/t32hpz32y7snfna/vmSocks-blue-onWhite.jpg?dl=0",
        variantQuantity: 0
        // onSale: false
      }
    ]
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(index) {
      this.selectedVariant = index;
      console.log(index);
    },
    removeFromCart() {
      this.cart--;
    }
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    sale() {
      if (this.onSale) {
        return this.brand + " " + this.product + " are on sale!";
      }
      return this.brand + " " + this.product + " are not on sale";
    }
  }
});
