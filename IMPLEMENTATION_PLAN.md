# React + Tailwind LP Implementation Plan

## Goal
`public/assets/ui-reference.png` の生成UI画像を基準に、日本向けLP制作サービスのWebサイトを React + Tailwind CSS で再現する。見た目は「都会的ラグジュアリー」「ピンクゴールド」「上品で女性的」「かわいすぎない」を優先する。

## Fidelity Target
- Desktop reference: 1536 x 1024 mock image.
- First viewport composition: top nav, left hero copy, right desk/laptop visual, lower service matrix, CTA strip.
- Recreate proportions, colors, border weights, spacing, card rhythm, typography hierarchy, and UI density as closely as possible.
- Use generated assets:
  - `public/assets/ui-reference.png` as the visual reference.
  - `public/assets/hero-urban-rose-gold.png` for hero visual.
  - `public/assets/cta-rose-tray.png` for lower CTA photo.
  - `public/assets/icons-transparent.png` as transparent icon sheet source.

## Technical Shape
- Build a Vite React app with Tailwind CSS.
- Use componentized React sections:
  - `Header`
  - `Hero`
  - `FeaturePanel`
  - `ProcessPanel`
  - `PricingPanel`
  - `FaqPanel`
  - `ContactStrip`
  - `BenefitFooter`
- Tailwind tokens should map to the palette:
  - warm white `#FAF7F4`
  - charcoal `#1F1B1C`
  - rose gold `#B76E79`
  - champagne rose `#E8C4BE`
  - metallic gold `#C9A46A`
  - wine rose `#6F263D`
  - border `#E7DAD4`

## Asset Handling
- Do not reference generated images from `.codex/generated_images` directly.
- All project images must live under `public/assets`.
- Generated icon sheet has already been chroma-key processed into `icons-transparent.png`.
- Use CSS object positioning on the transparent icon sheet to display four icon crops without green background.
- If additional image assets are needed, generate with `imagegen`, copy into `public/assets`, and for icon-like assets run chroma-key removal before using them.

## Animation
- Add scroll fade-in for major sections using `IntersectionObserver`.
- Add subtle hero load choreography: nav fade, hero copy slide-up, hero visual reveal, metric stagger.
- Add restrained hover states for buttons, pricing cards, FAQ rows, and feature icons.
- Keep animation elegant and not playful; avoid bouncing, sparkles, or excessive motion.

## Verification
- Browser Use should be used for screen checks where local URL access is available.
- If Browser Use blocks local URL access, use an equivalent local/headless/static verification and document the limitation.
- Check:
  - desktop 1536 x 1024 resemblance to `ui-reference.png`
  - mobile 390 x 844 readability
  - no horizontal overflow
  - image assets load
  - transparent icons have alpha
  - no console/runtime errors

## Constraints and Known Environment Notes
- Current workspace started as static HTML/CSS and has no package setup.
- Global `npm` is not available in the observed shell; create project files anyway and prefer commands through available package managers only if discovered.
- Do not delete the existing static implementation unless a later todo explicitly marks it obsolete.
