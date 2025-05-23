// src/utils/images.js
export const images = import.meta.glob('../assets/img/**/*.{jpg,png,jpeg,gif}', { eager: true, as: 'url' })
