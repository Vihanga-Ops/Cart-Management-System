# 🛍️ Maison — E-Commerce Cart Management System

A fully interactive **E-Commerce Cart Management System** built with **ReactJS**. Users can browse a furniture collection, add items to their cart, adjust quantities, view a real-time total, remove individual items, or clear the entire cart — all within a sleek, editorial-style interface.

---

## 📬 Submission Links

| | Link |
|---|---|
| 🌐 **Hosted Link** | [Click here](https://calm-profiterole-1b55c2.netlify.app/)|
| 🐙 **GitHub Repository** | [Click here](https://github.com/Vihanga-Ops/Cart-Management-System.git)|

---

## 📸 Preview

> A warm cream-toned furniture store with a bold dark editorial hero banner, a 4-column product grid, and a smooth slide-in cart drawer.

| Section | Description |
|---|---|
| **Header** | Sticky dark navbar with brand logo, nav links, and animated cart badge |
| **Hero Banner** | Full-width dark editorial panel with ghost watermark text, stacked product images, and live stats |
| **Product Grid** | 4-column responsive grid with badges (Bestseller / New / Sale), hover zoom, and "Added ✓" feedback |
| **Cart Drawer** | Fixed right-side slide-in panel with quantity controls, subtotal, and checkout button |

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **ReactJS** | UI component library — all UI built as reusable components |
| **useState Hook** | Manages cart items, quantity adjustments, and UI state (drawer open/close, "Added" flash) |
| **JavaScript** | Cart logic — add, increment, decrement, remove, clear, real-time total calculation |
| **CSS3** | Custom properties, Flexbox, Grid, keyframe animations, responsive media queries |
| **Google Fonts** | `Playfair Display` (headings) + `DM Sans` (body) |
| **Unsplash** | Free furniture product images |

---

## 📂 Project Structure

```
ecommerce-cart/
├── public/
│   └── index.html
├── src/
│   ├── data/
│   │   └── products.js              # 20 furniture products — name, price, category, image, badge
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx           # Sticky navbar with cart icon + animated item count badge
│   │   │   └── Header.css
│   │   ├── ProductGrid/
│   │   │   ├── ProductGrid.jsx      # Hero banner + 4-column product grid
│   │   │   └── ProductGrid.css      # Grid layout, hero styles, card hover effects
│   │   ├── Cart/
│   │   │   ├── Cart.jsx             # Slide-in drawer — items list, summary, checkout, clear
│   │   │   └── Cart.css             # Fixed right drawer, slide animation, footer layout
│   │   └── CartItem/
│   │       ├── CartItem.jsx         # Single cart row — image, name, qty stepper, remove
│   │       └── CartItem.css
│   ├── App.js                       # Root — all state & handlers, overlay backdrop
│   ├── App.css                      # Global design tokens, layout, animations
│   └── index.js                     # React entry point
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14 or above
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/ecommerce-cart.git
   cd ecommerce-cart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Build for Production

```bash
npm run build
```

Outputs an optimized production build to the `build/` folder.

---

## ☁️ Deployment (Netlify)

1. Push your project to GitHub
2. Go to [netlify.com](https://netlify.com) → **Add new site → Import from Git**
3. Select your repository
4. Set **build command** to `npm run build` and **publish directory** to `build`
5. Click **Deploy site**

Or via CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

## 🧩 Components Breakdown

### `App.js` — State & Logic Hub
All cart state lives here and is passed down as props:

```jsx
const [cartItems, setCartItems] = useState([]);
const [cartOpen, setCartOpen]   = useState(false);
```

| Handler | What it does |
|---|---|
| `handleAddToCart(product)` | Adds product or increments quantity if already in cart |
| `handleIncrement(id)` | Increases quantity of a specific item by 1 |
| `handleDecrement(id)` | Decreases quantity by 1; removes item if it reaches 0 |
| `handleRemove(id)` | Removes a specific item entirely from the cart |
| `handleClearCart()` | Empties the entire cart array |

Real-time totals are derived directly from state — no separate state needed:
```js
const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
const totalCost  = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
```

### `Header`
Sticky dark navbar with the **Maison** brand, three nav links, and a cart trigger button. The cart badge animates in with `popIn` when `totalItems > 0`.

### `ProductGrid`
Two parts in one component:

**Hero Banner** — A full-width dark panel (`var(--bark)`) featuring:
- A giant ghost watermark (`MAISON`) in the background
- Editorial typographic title with thin/bold contrast
- Live stats (total pieces, categories, avg rating)
- Two stacked, rotated product image cards on the right

**Product Grid** — A responsive 4-column CSS grid where each card has:
- Square image with zoom-on-hover and a colored badge pill
- Category label, product name, price in Playfair Display serif
- Dark rounded "+ Add" button that briefly shows "✓ Added" after clicking
- An "X in cart" pill overlay when the item is already in the cart

### `Cart`
A fixed right-side drawer (`position: fixed; right: 0; width: 380px`) that slides in via `transform: translateX(100%) → translateX(0)`. An overlay backdrop darkens the page behind it; clicking the overlay closes the drawer.

Contains:
- Scrollable items list
- Subtotal + free shipping row + total
- **Proceed to Checkout** button
- **Clear Cart** button

### `CartItem`
A single row inside the cart. Displays the product thumbnail, name, line total (price × quantity), a pill-style quantity stepper (− / qty / +), and an underlined "Remove" link.

---

## 🛒 Cart Features

| Feature | Implementation |
|---|---|
| Add to cart | Button on each product card; increments if already present |
| Increase quantity | `+` button in CartItem calls `handleIncrement` |
| Decrease quantity | `−` button calls `handleDecrement`; item auto-removes at 0 |
| Remove single item | "Remove" link calls `handleRemove(id)` |
| Clear entire cart | "Clear Cart" button calls `handleClearCart()` |
| Real-time total | Derived from state on every render — always in sync |
| Cart item count badge | Shows in Header; animates in when count > 0 |
| "In cart" indicator | Pill on product image shows qty already in cart |

---

## 🎨 Design Tokens

| Token | Value | Used For |
|---|---|---|
| `--cream` | `#faf7f2` | Page background |
| `--warm-white` | `#f5f0e8` | Card image background |
| `--parchment` | `#ede8de` | Subtle highlight areas |
| `--bark` | `#2c2416` | Primary dark — navbar, buttons, hero bg |
| `--clay` | `#a0714f` | "Our" title accent, price color |
| `--terracotta` | `#c4714a` | Bestseller badge, hover states, hero tag |
| `--sage` | `#7a9e7e` | New badge, free shipping label, added state |
| `--dust` | `#9e9589` | Secondary text, icons |
| `--border` | `#e0d9ce` | Card and panel borders |

---

## 📝 Assignment Notes

- Built with **ReactJS only** — no external UI libraries (no Bootstrap, Tailwind, MUI)
- All icons are **inline SVGs** — no icon library dependency
- **No localStorage** used — cart state is managed purely in React `useState` as per the assignment scope
- **No React Router** — single-page application
- **Fully responsive** — 4 columns → 3 → 2 → 1 via CSS Grid media queries
- Real-time total cost uses `.reduce()` derived directly from `cartItems` state — no redundant state

---

## 👨‍💻 Author

Vihanga Disal Pathirana

---

## 📄 License

This project was created for educational purposes as part of a frontend development assignment.