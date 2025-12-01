<template>
  <div class="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
    <!-- Product Image -->
    <div class="relative h-64 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center overflow-hidden">
      <img 
        v-if="product.image"
        :src="product.image" 
        :alt="product.name"
        class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
      />
      <div v-else class="text-8xl">{{ product.emoji || '🐾' }}</div>
      
      <!-- Favorite Button -->
      <button
        @click.stop="$emit('toggle-favorite', product.id)"
        class="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-200"
      >
        <svg 
          class="w-5 h-5" 
          :class="isFavorite ? 'fill-pink-500 text-pink-500' : 'text-gray-600'"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </button>

      <!-- Stock Badge -->
      <div 
        v-if="!product.inStock"
        class="absolute top-4 left-4 px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full"
      >
        Out of Stock
      </div>
      
      <!-- Discount Badge -->
      <div 
        v-if="product.discount"
        class="absolute top-4 left-4 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full"
      >
        -{{ product.discount }}%
      </div>
    </div>

    <!-- Product Info -->
    <div class="p-6">
      <h4 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
        {{ product.name }}
      </h4>
      
      <p v-if="product.description" class="text-sm text-gray-600 mb-4 line-clamp-2">
        {{ product.description }}
      </p>
      
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-baseline gap-2">
          <span class="text-2xl font-bold text-purple-600">
            ${{ finalPrice }}
          </span>
          <span v-if="product.discount" class="text-sm text-gray-400 line-through">
            ${{ product.price }}
          </span>
        </div>
        <span class="text-xs uppercase tracking-wider text-gray-500 font-semibold">
          {{ product.category }}
        </span>
      </div>
      
      <!-- Rating -->
      <div v-if="product.rating" class="flex items-center gap-1 mb-4">
        <div class="flex">
          <svg 
            v-for="star in 5" 
            :key="star"
            class="w-4 h-4"
            :class="star <= product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        <span class="text-sm text-gray-600">({{ product.reviewCount || 0 }})</span>
      </div>
      
      <!-- Action Button -->
      <button
        @click="$emit('add-to-cart', product)"
        :disabled="!product.inStock"
        class="w-full py-3 rounded-xl font-semibold transition-all duration-200"
        :class="product.inStock
          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg transform hover:scale-105'
          : 'bg-gray-200 text-gray-500 cursor-not-allowed'"
      >
        {{ product.inStock ? 'Add to Cart' : 'Out of Stock' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true
  },
  isFavorite: {
    type: Boolean,
    default: false
  }
});

defineEmits(['add-to-cart', 'toggle-favorite']);

const finalPrice = computed(() => {
  if (props.product.discount) {
    return (props.product.price * (1 - props.product.discount / 100)).toFixed(2);
  }
  return props.product.price;
});
</script>
