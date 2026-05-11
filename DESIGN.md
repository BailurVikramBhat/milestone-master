---
name: Milestone Master
colors:
  surface: '#faf9ff'
  surface-dim: '#ccdaff'
  surface-bright: '#faf9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8ff'
  surface-container-highest: '#d8e2ff'
  on-surface: '#051a3e'
  on-surface-variant: '#434654'
  inverse-surface: '#1d3054'
  inverse-on-surface: '#edf0ff'
  outline: '#737685'
  outline-variant: '#c3c6d6'
  surface-tint: '#0c56d0'
  primary: '#003d9b'
  on-primary: '#ffffff'
  primary-container: '#0052cc'
  on-primary-container: '#c4d2ff'
  inverse-primary: '#b2c5ff'
  secondary: '#4f5f7b'
  on-secondary: '#ffffff'
  secondary-container: '#cdddff'
  on-secondary-container: '#51617e'
  tertiary: '#004b59'
  on-tertiary: '#ffffff'
  tertiary-container: '#006477'
  on-tertiary-container: '#76e2ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b2c5ff'
  on-primary-fixed: '#001848'
  on-primary-fixed-variant: '#0040a2'
  secondary-fixed: '#d6e3ff'
  secondary-fixed-dim: '#b7c7e8'
  on-secondary-fixed: '#091c35'
  on-secondary-fixed-variant: '#374763'
  tertiary-fixed: '#afecff'
  tertiary-fixed-dim: '#48d7f9'
  on-tertiary-fixed: '#001f27'
  on-tertiary-fixed-variant: '#004e5d'
  background: '#faf9ff'
  on-background: '#051a3e'
  surface-variant: '#d8e2ff'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 42px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-lg:
    fontFamily: Playfair Display
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 24px
  body-lg:
    fontFamily: Playfair Display
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Playfair Display
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Playfair Display
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.5px
  label-sm:
    fontFamily: Playfair Display
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  sidebar-width: 240px
  max-content-width: 1440px
---

## Brand & Style

The design system is engineered for high-velocity enterprise productivity. It adopts a **Corporate / Modern** aesthetic, heavily influenced by established Material Design principles to ensure immediate user familiarity and zero learning curve for project managers and developers. 

The brand personality is authoritative, reliable, and systematic. It prioritizes functional density over decorative flair, utilizing a structured layout to manage complex data sets. The emotional response is one of "ordered calm"—users should feel that the application can handle massive scale without becoming cluttered. Visual clarity is achieved through a rigid adherence to a primary blue palette, signifying trust and professional rigor.

## Colors

The palette is anchored by a deep **Primary Blue (#0052CC)**, chosen for its high accessibility and association with enterprise software. This color is used for primary actions, active states, and focus indicators.

- **Secondary Grey (#42526E):** Used for navigation labels, icons, and metadata to provide contrast without competing with primary actions.
- **Surface & Backgrounds:** The system uses a multi-tier white and light grey approach. `background_default` is pure white for content areas like cards and tables, while `background_subtle` is used for sidebars and the main application background to create depth.
- **Status Colors:** Standardized semantic colors for task priorities and statuses (In Progress, Blocked, Done) follow industry conventions for immediate recognition.

## Typography

This design system utilizes **Playfair Display** for its mechanical precision and superior legibility at small sizes. The typographic hierarchy is strictly functional:

- **Body Text:** The standard size is `body-md` (14px), optimized for information-dense data tables and task descriptions.
- **Headlines:** Uses a medium weight (600) to stand out against high-density UI components without requiring excessive font size increases.
- **Labels:** Uppercase styles are reserved for column headers and small button text to differentiate actionable items from static content.
- **Scalability:** On mobile devices, `display-lg` and `headline-lg` should scale down by 20% to prevent horizontal overflow in compact views.

## Layout & Spacing

The layout utilizes a **Fluid Grid** approach within a fixed sidebar container. It is built on an 8px base unit to ensure consistent alignment and vertical rhythm.

- **The Sidebar:** A fixed 240px navigation drawer on the left provides the primary application hierarchy. On tablet devices, this collapses into an icon-only rail.
- **Content Area:** Uses a 12-column grid with 24px gutters. For data-heavy views (Backlogs, Sprint Boards), margins are reduced to 16px to maximize screen real estate.
- **Density:** The design system supports "Standard" and "Compact" spacing modes. Compact mode reduces padding in tables and lists by 50% for power users managing large backlogs.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and subtle ambient shadows, following the Material UI "z-index" philosophy.

- **Level 0 (Background):** `background_subtle` used for the canvas.
- **Level 1 (Card/Surface):** Pure white surfaces with a thin 1px border (`#DFE1E6`) and no shadow. This is the primary state for kanban cards and table rows.
- **Level 2 (Hover/Active):** A soft, diffused shadow (`0px 4px 8px rgba(9, 30, 66, 0.08)`) is applied when a task card is picked up or hovered, signaling interactivity.
- **Level 3 (Modals/Popovers):** Elevated with a more pronounced shadow (`0px 8px 16px rgba(9, 30, 66, 0.15)`) to focus user attention on top-level interactions.

## Shapes

The design system uses a **Soft (0.25rem)** roundedness approach. This maintains the professional, "engineered" look of the tool while avoiding the aggressive sharpness of older enterprise software.

- **Buttons & Inputs:** 4px (0.25rem) corner radius.
- **Cards & Modals:** 8px (0.5rem) corner radius (`rounded-lg`) to provide a clear container boundary.
- **Status Pills:** Fully rounded (pill-shaped) to distinguish them from actionable buttons and interactive cards.

## Components

### Buttons
- **Primary:** Solid blue fill with white text. High emphasis.
- **Secondary:** Light blue background with primary blue text. Used for secondary actions.
- **Tertiary:** Transparent background with secondary grey text. Used for "Cancel" or low-priority actions.

### Task Cards
Cards are the core of the task management experience. They feature a white background, 1px border, and 8px padding. Icons for priority and task type are placed in the bottom-left, while user avatars appear in the bottom-right.

### Data Tables
Tables are designed for high information density. Headers use `label-md` with a subtle grey background. Row height is fixed at 48px (Standard) or 36px (Compact). Alternate row striping is not used; instead, use a 1px bottom border.

### Input Fields
Inputs use a white background with a 1px border. On focus, the border thickens to 2px and changes to the Primary Blue, with a subtle 2px blue glow (ring).

### Chips & Statuses
Status indicators (e.g., "To Do", "In Progress") use capitalized text in a pill-shaped container with a low-saturation background color corresponding to the status (e.g., light green background for "Done").

### Navigation Sidebar
The sidebar uses `background_subtle`. Active items are indicated by a 4px vertical bar on the left edge and a subtle blue tint on the background of the list item.