import { getImage } from "astro:assets";
import type { ImageMetadata } from "astro";

/**
 * Build responsive variants for a full-bleed hero image (displayed at 100vw).
 *
 * Phones download a small variant; large screens still get the full-size image
 * (capped at 2560px — sharp on every laptop and almost every desktop). The
 * source files are never modified: Astro/sharp generates the variants at build
 * time, so there is no quality loss anywhere.
 *
 * Returns a fallback `src` plus a ready-to-use `srcSet` string. Pair with
 * `sizes="100vw"` on the <img>.
 *
 * The width list goes up to 1280/1920 so even high-density (retina) phones,
 * which need CSS-width × pixel-ratio physical pixels, get a crisp variant —
 * the browser picks the right one automatically. QUALITY is kept high so there
 * are no visible compression artifacts.
 */
const HERO_WIDTHS = [640, 960, 1280, 1920, 2560];
const QUALITY = 88; // high — visually lossless for photos

export async function responsiveHero(img: ImageMetadata) {
    const widths = Array.from(
        new Set([
            ...HERO_WIDTHS.filter((w) => w < img.width),
            Math.min(img.width, 2560),
        ]),
    ).sort((a, b) => a - b);

    const result = await getImage({
        src: img,
        widths,
        format: "webp",
        quality: QUALITY,
    });

    return { src: result.src, srcSet: result.srcSet.attribute };
}
