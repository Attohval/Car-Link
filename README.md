# Vtech Motors Luxury Car Dealership

A fully responsive, frontend-only landing page for a premium automobile dealership. The site uses HTML5, CSS3, and Vanilla JavaScript only. It includes a luxury dark interface, gold accents, sticky navigation, a mobile drawer, featured inventory, brand strip, service cards, animated counters, testimonial carousel, financing CTA, contact form, footer, and back-to-top control.

## Folder Structure

car-dealer/
|-- index.html
|-- css/
|   |-- style.css
|   |-- responsive.css
|   `-- animations.css
|-- js/
|   |-- app.js
|   |-- navigation.js
|   |-- slider.js
|   `-- scroll-effects.js
|-- images/
|-- icons/
`-- README.md

## Features

- Fixed glassmorphism header with shrink-on-scroll behavior.
- Accessible mobile navigation with overlay, ESC close, outside click close, and scroll lock.
- Fullscreen luxury hero with real car photography, animated copy, CTA buttons, and floating statistics.
- Featured vehicle inventory cards with realistic names, pricing, specifications, mileage, transmission, fuel type, horsepower, and ratings.
- Luxury brand strip for BMW, Mercedes, Audi, Porsche, Ferrari, Lamborghini, Lexus, and Tesla.
- Why Choose Us, Luxury Collection, Services, Financing, CTA, Contact, and Footer sections.
- Intersection Observer reveal animations and animated counters.
- Vanilla JavaScript testimonial carousel with autoplay and manual controls.
- Ripple button feedback, smooth scrolling, active navigation state, image loading enhancement, and back-to-top button.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript ES6

## Image Credits

Images are loaded from royalty-free photography services using optimized remote URLs:

- Unsplash car and interior photography for hero, inventory, collection, CTA, and testimonials.
- Photos are used as live remote assets to keep the project lightweight and frontend-only.

## Browser Support

Designed for the latest versions of:

- Chrome
- Edge
- Firefox
- Safari
- Mobile Safari
- Chrome for Android

## Performance Notes

- Most images use `loading="lazy"`.
- CSS is split by responsibility for easier caching and maintenance.
- JavaScript is modular and loaded with `defer`.
- Intersection Observer avoids heavy scroll polling for animations and counters.
- No framework or large dependency payload is included.

## Accessibility Features

- Semantic sections, headings, navigation, forms, and footer.
- Skip link for keyboard users.
- ARIA labels on menus, carousel controls, icon buttons, and forms.
- Keyboard-accessible mobile menu with ESC close.
- Visible focus states.
- High-contrast dark theme with readable typography.
- Descriptive alt text for imagery.