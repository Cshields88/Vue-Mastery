Vue.component("product", {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },

  template: `
      <div class="product">

            <div class="product-image">
                <img :src="image" />
            </div>

            <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-if="inStock">In Stock</p>
                <p v-else>Out of Stock</p>
                <p>Shipping: {{shipping}}</p>

                <br>
                <!-- <a :href="link" :alt="description">Click Here!</a> -->
                <h3>Details</h3>
                <ul>
                    <li v-for="detail in details">{{detail}}</li>
                </ul>
                <!-- display variants -->
                <h3>Colors</h3>
                <div v-for="(variant, index) in variants" :key="variant.variantId" class="color-box" :style="{backgroundColor: variant.variantColor}"
                    @mouseover="updateProduct(index)">

                </div>

                <h3>Sizes</h3>
                <ul>
                    <li v-for="size in sizes">{{size}}</li>
                </ul>
                <button @click="addToCart" :disabled="!inStock" :class="{disabledButton: !inStock}">Add To Cart</button>
                <button class="remove" @click="removeFromCart">Delete Item</button>
                <div class="cart">
                    <p>Cart ({{cart}})</p>
                </div>
            </div>
        </div>
  `,
  data() {
    return {
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
    };
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
    },
    shipping() {
      if (this.premium) {
        return "Free";
      } else {
        return "$2.99";
      }
    }
  }
});

var app = new Vue({
  el: "#app",
  data: {
    premium: true
  }
});
