import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next"; //from the file astro-i18next.config.mjs
import react from "@astrojs/react";
import CompressionPlugin from "vite-plugin-compression";
import sitemap from "@astrojs/sitemap";

// Set siteUrl dynamically based on environment variables:
const isProduction = process.env.NODE_ENV === 'production';
const siteUrl = isProduction ? 'https://tinghsiehpiano.com' : process.env.URL || 'http://localhost:4321';

console.log('siteUrl:', siteUrl);

export { siteUrl };

const date = new Date().toISOString();
// https://astro.build/config
export default defineConfig({
    site: 'https://tinghsiehpiano.com', //siteUrl, //+ "/", // the URL of my website
    trailingSlash: 'never',  // This ensures all URLs don't have a trailing slash

    // added integrations:
    integrations: [
        astroI18next(), // automatically pick up astro-i18next.config.mjs
        react(), // React integration
        sitemap({
            serialize(item) {
                // Default values for pages
                item.priority = siteUrl === item.url ? 1.0 : 0.9; // + "/"
                item.changefreq = "weekly";
                item.lastmod = date;

                // Exclude error pages from the sitemap
                if (/\/404$/.test(item.url)) {
                    return undefined;
                }

                // if any page needs a different priority, changefreq, or lastmod, uncomment the following lines and adjust as needed
                // if (/test-sitemap/.test(item.url)) {
                //     item.changefreq = "daily";
                //     item.lastmod = date;
                //     item.priority = 0.9;
                // }

                // if you want to change priority of all subpages like "/posts/*", you can use:
                // if (/\/posts\//.test(item.url)) {
                //     item.priority = 0.7;
                // }
                return item;
            },
        }), // Sitemap integration
    ],
    vite: {
        plugins: [CompressionPlugin()],
    },
});
