# Jujuy Adentro — Design System

## Design Direction

Jujuy Adentro is a premium boutique travel brand offering private
experiences and tailor-made journeys in Jujuy, Argentina.

The visual identity combines:

- Editorial travel design
- Documentary photography
- Warm earth tones
- Generous negative space
- Minimal interface
- Geographic information
- Subtle cinematic motion
- Human storytelling

The website should feel:

- Quiet
- Refined
- Authentic
- Spacious
- Territorial
- Human
- Premium

The interface should feel like an editorial travel publication rather
than a conventional tourism agency or booking platform.

### Core principle

**The interface supports the landscape. It does not compete with it.**

Photography, typography and space should carry most of the visual weight.
UI elements should remain quiet and functional.

---

## Design Principles

### 1. Photography First

Photography and video are the primary visual assets.

Prefer:

- Large-scale landscape photography
- Documentary imagery
- Natural light
- Human presence
- Sense of scale
- Authentic moments
- Strong compositions

Avoid:

- Generic tourism stock photography
- Over-saturated imagery
- Heavy filters
- Excessive overlays
- Small repetitive thumbnails

When choosing between a decorative UI element and a strong photograph,
prefer the photograph.

---

### 2. Editorial Over Interface

The website should feel composed like a travel publication.

Prefer:

- Large typography
- Generous whitespace
- Full-bleed photography
- Asymmetric compositions
- Editorial text blocks
- Visual pauses
- Chapter-like sections

Avoid:

- Repetitive card grids
- Dense dashboards
- Excessive badges
- UI-heavy layouts
- SaaS-style section patterns

If typography, spacing and photography can solve a composition,
do not introduce another component.

---

### 3. Quiet Interface

The interface should not compete with the landscape.

UI elements should use:

- Minimal borders
- Minimal shadows
- Restrained color
- Small corner radii
- Clear hierarchy
- Simple interactions

Avoid making every section look like a conversion block.

---

### 4. Territory

Jujuy should be represented through geographic information.

Use:

- Maps
- Routes
- Coordinates
- Altitude
- Distances
- Duration
- Locations
- Geographic labels

Maps should feel editorial and branded rather than like conventional
mapping software.

---

### 5. Human Over Polished

The brand should communicate expertise, proximity and authenticity.

The experience should feel personal and hosted by someone who knows
the territory deeply.

Avoid making the experience feel:

- Mass-market
- Corporate
- Automated
- Generic
- Like an online booking marketplace

---

### 6. Motion Is Subtle

Motion should enhance storytelling rather than attract attention.

Prefer:

- Image reveals
- Fade transitions
- Subtle parallax
- Slow image movement
- Route drawing
- Gentle text transitions

Avoid:

- Bouncing elements
- Excessive scaling
- Constant floating animations
- Animation on every component
- Large or distracting transitions

The default motion intensity is subtle.

---

### 7. Space Over Decoration

When in doubt, leave more space.

Negative space is part of the brand identity.

Do not fill empty areas simply because they are available.

---

# Visual Hierarchy

When multiple elements compete for attention, prioritize them in this
order:

1. Photography / video
2. Primary headline
3. Experience / destination
4. Editorial content
5. CTA
6. Supporting information
7. Decorative elements

Never make a UI element more visually prominent than the primary image
or message.

---

# Color

The UI uses a deliberately restricted palette.

The landscape and photography provide most of the visual color.

## UI Palette

| Token | Hex | Usage |
|---|---|---|
| `text-primary` | `#292621` | Main text |
| `surface-primary` | `#F5F0E7` | Main background |
| `surface-secondary` | `#EDE0CE` | Secondary sections |
| `surface-tertiary` | `#E4D9C8` | Surfaces, dividers |
| `brand-primary` | `#4A382D` | Primary brand color, CTA |
| `accent-primary` | `#B68A4A` | Accent and interaction |

### Color hierarchy

Neutral colors should dominate the interface.

Use approximately:

- 70–80% warm neutrals
- 10–15% text
- 5–10% brand color
- Less than 5% accent

The accent color should remain visually rare.

### Brand Communication Palette

These colors are available for PDFs, Instagram, email,
presentations and other brand communications.

They should NOT be introduced freely into the website UI.

| Color | Hex |
|---|---|
| Earth | `#4A382D` |
| Terracotta | `#7B4A34` |
| Earth Rose | `#A8664F` |
| Ochre | `#B68A4A` |
| Stone Beige | `#C8B69A` |
| Warm Terracotta | `#C2643D` |

The extended brand palette should remain warm, earthy and relatively
desaturated.

---

# Typography

## Font Families

### Display

**Lora**

Used for:

- Hero headlines
- Major section headings
- Editorial statements
- Large destination titles

### Body

**Source Sans 3**

Used for:

- Body copy
- Navigation
- Labels
- Forms
- Metadata
- Buttons
- Supporting information

Typography should create hierarchy before additional UI decoration
is introduced.

---

## Type Scale

| Token | Size | Line Height | Weight |
|---|---:|---:|---:|
| `display-xl` | 80px | 88px | 400 |
| `display-lg` | 64px | 72px | 400 |
| `display-md` | 48px | 56px | 400 |
| `display-sm` | 32px | 40px | 400 |
| `body-lg` | 20px | 32px | 400 |
| `body-md` | 16px | 24px | 400 |
| `body-sm` | 14px | 20px | 400 |
| `label` | 12px | 16px | 600 |

Use Lora selectively.

Do not use Lora for all interface elements.

---

# Layout

## Containers

| Token | Maximum Width |
|---|---:|
| `container` | 1280px |
| `editorial` | 1120px |
| `reading` | 680px |
| `wide-reading` | 820px |

### Rules

- General content uses the 1280px container.
- Editorial layouts use the 1120px container.
- Long-form text should normally remain within 680px.
- Wider editorial text may use 820px.
- Photography may break the container.
- Key photographs and videos may use full-bleed layouts.
- Avoid making every section use the same grid.

---

## Grid

Desktop:

- 12 columns

Tablet:

- 8 columns

Mobile:

- 4 columns

Use the grid as a compositional tool rather than forcing every section
into identical card structures.

---

# Spacing

Use the spacing scale defined in `tokens.css`.

Primary spacing values:

- 4px
- 8px
- 12px
- 16px
- 24px
- 32px
- 48px
- 64px
- 80px
- 96px
- 120px
- 144px
- 160px
- 192px

Large spacing values are encouraged between editorial chapters.

Do not use arbitrary spacing values unless there is a clear
compositional reason.

---

# Radius & Borders

The visual language is architectural and editorial.

Default radius:

**0px**

Available radii:

- `0px` — editorial media and major surfaces
- `4px` — UI elements
- `9999px` — pills only

Avoid:

- 12px+ rounded cards
- Excessive pill shapes
- Rounded containers everywhere

Borders should be subtle and used primarily as editorial dividers.

Avoid heavy borders around every component.

---

# Photography & Media

Photography is the dominant visual element of the website.

## Preferred image ratios

- 16:9 — video and cinematic media
- 3:2 — editorial landscape photography
- 4:5 — portraits and human stories
- 1:1 — limited supporting content
- Cinematic wide ratio — major visual transitions

Prefer fewer, larger images over many small images.

### Full-bleed imagery

Use full-bleed photography for:

- Hero sections
- Major destination moments
- Chapter transitions
- Emotional storytelling

Images should not always be constrained inside cards.

---

# Editorial Language

The website should be structured as a sequence of visual chapters.

A section may use:

- Eyebrow
- Large heading
- Short editorial introduction
- Large image
- Supporting information
- Geographic data
- CTA

Avoid turning every section into a card grid.

## Eyebrows

Use Source Sans 3.

Typical:

- 12px
- 600 weight
- Uppercase
- Approximately 1.5px letter spacing

Use sparingly.

---

# Geographic Information

Geographic information is part of the visual identity.

Use a consistent hierarchy:

### Label

Source Sans 3  
12px  
600  
Uppercase

### Value

Source Sans 3  
20px  
400

Examples:

- ALTITUDE
- DISTANCE
- DURATION
- COORDINATES
- GROUP SIZE

Do not visually overcomplicate geographic information.

---

# Maps

Maps should feel like editorial illustrations.

Prefer:

- Minimal lines
- Restrained labels
- Simple route paths
- Small markers
- Neutral backgrounds
- Brand-colored route lines

Avoid:

- Google Maps visual language
- Excessive POIs
- Dense geographic information
- Bright colors

Maps may use subtle route-drawing animation.

---

# Components

Only introduce components when they solve a repeated design problem.

## Navigation

Minimal and quiet.

Prefer transparent or low-contrast navigation when placed over
photography.

---

## Buttons

Use three levels.

### Primary

Filled with `brand-primary`.

Used for the main conversion action.

Example:

**Diseña tu viaje**

### Secondary

Transparent with subtle border.

Example:

**Conocer la experiencia**

### Editorial Link

No filled background.

Example:

**Explorar Salinas →**

Use editorial links frequently to keep the interface light.

---

## Cards

Cards should be used sparingly.

Prefer editorial image-led compositions over conventional
rounded cards.

Do not create cards simply to organize information that could be
presented editorially.

---

## Forms

Forms should be:

- Spacious
- Simple
- Highly readable
- Low visual noise
- Easy to complete

The form should feel like the beginning of a conversation,
not an administrative process.

---

## CTA

CTAs should be visually clear but restrained.

Primary conversion:

**Diseña tu viaje**

Secondary conversion:

**Consultar disponibilidad**

Editorial exploration:

**Explorar →**

Avoid aggressive sales language.

---

## Experience Blocks

Experience sections should prioritize:

1. Destination
2. Image
3. Narrative
4. Key information
5. CTA

Do not default to price-first layouts.

---

## Itineraries

Use an editorial timeline or structured journey.

Prioritize:

- Place
- Time
- Experience
- Narrative
- Geographic context

Avoid conventional travel-agency feature lists.

---

# Motion

Motion should support the editorial narrative.

## Duration

| Token | Duration |
|---|---:|
| `fast` | 200ms |
| `standard` | 400ms |
| `editorial` | 1000ms |
| `slow` | 1400ms |
| `cinematic` | 2000ms |

## Easing

Use:

`cubic-bezier(0.22, 1, 0.36, 1)`

## Parallax

Default movement should remain subtle.

Preferred range:

**4–8%**

Use stronger movement only for exceptional visual moments.

---

# Visual Rest

Not every section should animate.

A page should alternate between:

- Movement
- Photography
- Text
- Information
- Visual rest

Static sections are intentional.

Do not animate elements simply because animation is technically possible.

---

# Responsive Design

## Desktop

Prioritize:

- Large typography
- Generous spacing
- Full-bleed imagery
- Asymmetric layouts
- Editorial compositions

## Mobile

Do not simply shrink the desktop layout.

Instead:

- Simplify compositions
- Reduce typography proportionally
- Preserve whitespace
- Maintain image impact
- Prioritize readability
- Stack complex layouts
- Keep touch targets comfortable

---

# Accessibility

Accessibility takes precedence over visual styling.

Ensure:

- Sufficient text contrast
- Readable body text
- Clear focus states
- Comfortable touch targets
- Form labels
- Keyboard navigation
- Alternative text for meaningful imagery
- Reduced-motion support

Do not sacrifice readability to preserve the visual aesthetic.

---

# Anti-Slop Rules

Do not introduce:

- Generic SaaS layouts
- Excessive glassmorphism
- Gradient backgrounds
- Large shadows
- Rounded cards everywhere
- Excessive badges
- Decorative icons without meaning
- Repetitive 3-column grids
- Random accent colors
- Arbitrary spacing
- Excessive animations
- Generic tourism stock aesthetics
- Excessive floating UI
- AI-generated decorative elements without purpose

### Decision rule

If an element does not improve:

- understanding
- navigation
- storytelling
- trust
- conversion
- or visual rhythm

remove it.

---

# Page Patterns

## Home

The Home should communicate the two ways of traveling:

1. Curated private experiences
2. Tailor-made journeys

Tailor-made journeys should receive strong visibility because they are
a strategic differentiation of the brand.

Suggested rhythm:

Hero → two ways to travel → featured experiences →
why travel privately → territory → host → planning CTA

---

## Salinas Grandes

The Salinas page is a commercial landing page.

Suggested rhythm:

Hero → experience → why Salinas → landscape →
route/map → itinerary → private experience →
trip details → dossier → enquiry → related experiences

The dossier is a contextual lead magnet.

---

## Viajes a Medida

The page should explain the service rather than simply displaying
a contact form.

Suggested rhythm:

Hero → what a tailor-made journey means →
how it works → what can be customized →
examples → expertise → planning process →
lead capture → CTA

---

## Nosotros

The page should prioritize the human host and his relationship
with the territory.

Suggested rhythm:

Human introduction → story → experience →
knowledge of Jujuy → philosophy of travel →
how guests are accompanied → CTA

---

## Contacto

The Contact page should not feel like an administrative endpoint.

It should reassure visitors, explain what happens after contacting
the brand and provide clear ways to start a conversation.

---

# CRO & Interface

The website is primarily designed to:

1. Generate qualified enquiries
2. Capture leads
3. Build trust
4. Explain the private travel proposition
5. Support organic discovery

The interface should not behave like an ecommerce checkout.

Conversion actions should feel like the beginning of a personalized
travel consultation.

Primary CTA:

**Diseña tu viaje**

Secondary CTA:

**Consultar disponibilidad**

Contextual lead capture may include:

- Experience dossier
- Planning form
- Availability enquiry
- Tailor-made trip consultation

Lead capture should always be contextual to the visitor's intent.

---

# Implementation Rules

All visual values must come from `tokens.css`.

Do not introduce arbitrary:

- Colors
- Font sizes
- Spacing
- Border radii
- Shadows
- Animation durations

unless there is a documented design reason.

Prefer existing components and patterns over creating new variants.

Prefer composition through:

**photography + typography + spacing**

before introducing additional UI.

---

# Design Decision Priority

When two design decisions conflict, prioritize:

1. Photography
2. Editorial composition
3. Readability
4. Negative space
5. Typography
6. Brand identity
7. Conversion
8. Interaction
9. Animation
10. Decoration

**Consistency over novelty.**

**Photography over decoration.**

**Typography over UI complexity.**

**Space over unnecessary elements.**

**Meaningful interaction over animation.**