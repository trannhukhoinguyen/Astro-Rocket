/**
 * The colour themes, single-sourced for the desktop swatch row and the
 * dropdown picker.
 *
 * All twelve palettes ship with the theme in `src/styles/themes/` and stay
 * imported in `src/styles/tokens/colors.css`, so every theme keeps working
 * even when it is hidden from the pickers (for example for a visitor who
 * saved it earlier). `showInSelector` only curates what the pickers offer:
 * the demo hides orange and magenta — flip them to `true` to offer the
 * full set on your own site.
 */
export interface ColourTheme {
  /** Matches the `html[data-theme="…"]` selector in src/styles/themes/. */
  id: string;
  /** Label shown in the pickers. */
  name: string;
  /** Swatch colour (the palette's brand-500). */
  color: string;
  /** Offer this theme in the pickers. The palette works either way. */
  showInSelector: boolean;
}

// All 12 themes in Tailwind color order.
export const colourThemes: ColourTheme[] = [
  { id: 'orange',  name: 'Orange',  color: 'oklch(62.5% 0.22  38)',  showInSelector: false },
  { id: 'amber',   name: 'Amber',   color: 'oklch(68.4% 0.155 64)',  showInSelector: true },
  { id: 'lime',    name: 'Lime',    color: 'oklch(64.8% 0.194 136)', showInSelector: true },
  { id: 'emerald', name: 'Emerald', color: 'oklch(65.2% 0.174 151)', showInSelector: true },
  { id: 'teal',    name: 'Teal',    color: 'oklch(67.2% 0.116 190)', showInSelector: true },
  { id: 'cyan',    name: 'Cyan',    color: 'oklch(67.2% 0.116 208)', showInSelector: true },
  { id: 'sky',     name: 'Sky',     color: 'oklch(66.5% 0.150 239)', showInSelector: true },
  { id: 'blue',    name: 'Blue',    color: 'oklch(62.1% 0.207 255)', showInSelector: true },
  { id: 'indigo',  name: 'Indigo',  color: 'oklch(58.9% 0.224 263)', showInSelector: true },
  { id: 'violet',  name: 'Violet',  color: 'oklch(59.9% 0.222 279)', showInSelector: true },
  { id: 'purple',  name: 'Purple',  color: 'oklch(59.7% 0.251 296)', showInSelector: true },
  { id: 'magenta', name: 'Magenta', color: 'oklch(58.8% 0.268 330)', showInSelector: false },
];

/** The themes the pickers actually offer. */
export const selectorThemes: ColourTheme[] = colourThemes.filter(
  (theme) => theme.showInSelector
);
