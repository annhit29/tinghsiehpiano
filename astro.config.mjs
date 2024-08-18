import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// Define the site URL
// export const siteUrl = 'https://wtinghsiehpiano.com'; 

// Set siteUrl dynamically based on environment
const isProduction = process.env.NODE_ENV === 'production';
const siteUrl = isProduction ? 'https://wtinghsiehpiano.com' : process.env.URL || 'http://localhost:4321/';

export { siteUrl };

// https://astro.build/config
export default defineConfig({
  integrations: [react()]
});