/**
 * GREAT ZONE - WOMEN'S CLOTHING
 * Interactive E-Commerce & Lookbook Engine
 */

// Product Catalog Data
const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Royal Zari Woven Banarasi Silk Saree",
    category: "festive",
    categoryLabel: "Festive Glam",
    price: 6499,
    originalPrice: 9999,
    discount: "35% OFF",
    rating: 4.9,
    reviewsCount: 142,
    badge: "Bestseller",
    badgeType: "exclusive",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    description: "Woven with intricate pure zari floral vines on rich royal blue mulberry silk. Paired with an unstitched contrast brocade blouse piece.",
    fabric: "100% Pure Mulberry Silk with Metallic Gold Weave",
    sizes: ["Free Size"]
  },
  {
    id: 2,
    name: "Midnight Velvet Haute Couture Gown",
    category: "western",
    categoryLabel: "Western Chic",
    price: 8999,
    originalPrice: 12499,
    discount: "28% OFF",
    rating: 5.0,
    reviewsCount: 98,
    badge: "Trending",
    badgeType: "exclusive",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
    description: "Flawlessly tailored sculpted corset evening gown in deep midnight navy velvet, adorned with subtle champagne crystal highlights.",
    fabric: "Plush Micro-Velvet & Satin Lining",
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 3,
    name: "Imperial Handcrafted Anarkali & Dupatta Set",
    category: "festive",
    categoryLabel: "Festive Glam",
    price: 7899,
    originalPrice: 10999,
    discount: "30% OFF",
    rating: 4.8,
    reviewsCount: 115,
    badge: "New Arrival",
    badgeType: "exclusive",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
    description: "Floor-length royal silhouette featuring handcrafted gota patti, dabka and resham threadwork with sheer scalloped organza dupatta.",
    fabric: "Chanderi Silk & Organza Dupatta",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 4,
    name: "Luxe Gold Embroidered Blazer & Trousers Co-ord",
    category: "western",
    categoryLabel: "Western Chic",
    price: 5499,
    originalPrice: 7999,
    discount: "31% OFF",
    rating: 4.9,
    reviewsCount: 84,
    badge: "Trending",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    description: "Power dressing redefined. Sharp royal navy tailored double-breasted blazer with signature gold crest buttons and straight-leg cigarette trousers.",
    fabric: "Premium Italian Viscose Blend",
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 5,
    name: "Heritage Royal Navy & Gold Chikan Kurta Set",
    category: "trending",
    categoryLabel: "Trending Now",
    price: 4299,
    originalPrice: 5999,
    discount: "28% OFF",
    rating: 4.7,
    reviewsCount: 76,
    badge: "Hot",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80",
    description: "Fine Lucknowi Chikankari embroidery adorned with subtle mukaish gold sequins. Paired with embroidered palazzo pants and silk dupatta.",
    fabric: "Pure Modal Cotton & Silk",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 6,
    name: "Celestial Gold Sequin Flared Cocktail Dress",
    category: "western",
    categoryLabel: "Western Chic",
    price: 6899,
    originalPrice: 9499,
    discount: "27% OFF",
    rating: 4.9,
    reviewsCount: 63,
    badge: "Party Edit",
    badgeType: "exclusive",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
    description: "Enchant the ballroom with an ethereal flowing A-line silhouette adorned with intricate hand-stitched ombre gold sequin gradation.",
    fabric: "French Tulle with Shimmer Sequins",
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 7,
    name: "Regal Kundan Embellished Velvet Lehenga Set",
    category: "festive",
    categoryLabel: "Festive Glam",
    price: 14999,
    originalPrice: 21999,
    discount: "32% OFF",
    rating: 5.0,
    reviewsCount: 189,
    badge: "Masterpiece",
    badgeType: "exclusive",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    description: "The crown jewel of festive royalty. Flared 16-kali velvet lehenga heavily hand-embroidered with kundan, zardozi and antique gold bullion wire.",
    fabric: "Royal Micro-Velvet & Tissue Silk Dupatta",
    sizes: ["Custom Stitched", "S", "M", "L", "XL"]
  },
  {
    id: 8,
    name: "Modern Drape Pleated Satin Evening Saree",
    category: "trending",
    categoryLabel: "Trending Now",
    price: 5299,
    originalPrice: 7499,
    discount: "29% OFF",
    rating: 4.8,
    reviewsCount: 112,
    badge: "Bestseller",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
    description: "Pre-stitched ready-to-wear pleated satin saree with a modern metallic waist belt and designer halter-neck embroidered blouse.",
    fabric: "Heavy Korean Liquid Satin",
    sizes: ["S", "M", "L", "XL"]
  }
];

// State Management
let cart = JSON.parse(localStorage.getItem('gz_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('gz_wishlist')) || [];
let activeDiscount = 0;
let appliedCouponCode = "";

// Currency Formatter (INR)
const formatINR = (amt) => {
  return "₹" + amt.toLocaleString("en-IN");
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
  renderProducts('all');
  updateCartUI();
  updateWishlistUI();
  initHeaderScroll();
  initMobileMenu();
  setupFilterTabs();
});

// Render Products Grid
function renderProducts(filter = 'all') {
  const container = document.getElementById('productsContainer');
  if (!container) return;

  const filtered = filter === 'all' 
    ? PRODUCTS_DATA 
    : PRODUCTS_DATA.filter(item => item.category === filter);

  container.innerHTML = filtered.map(item => {
    const isWishlisted = wishlist.includes(item.id);
    return `
      <div class="product-card" data-id="${item.id}">
        <div class="product-thumb">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
          <div class="product-badges">
            <span class="tag-badge ${item.badgeType}">${item.badge}</span>
          </div>
          <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" 
                  onclick="toggleWishlist(${item.id})" 
                  title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}">
            <i class="${isWishlisted ? 'fas fa-heart' : 'far fa-heart'}"></i>
          </button>
          <div class="product-quick-actions">
            <button class="btn-quick-view" onclick="openQuickView(${item.id})">
              <i class="far fa-eye"></i> Quick View
            </button>
            <button class="btn-card-cart" onclick="addToCart(${item.id})">
              <i class="fas fa-shopping-bag"></i> Add
            </button>
          </div>
        </div>
        <div class="product-details">
          <div class="product-cat">${item.categoryLabel}</div>
          <h3 class="product-name" onclick="openQuickView(${item.id})">${item.name}</h3>
          <div class="product-rating">
            <i class="fas fa-star"></i>
            <strong>${item.rating}</strong>
            <span>(${item.reviewsCount} reviews)</span>
          </div>
          <div class="product-pricing">
            <span class="current-price">${formatINR(item.price)}</span>
            <span class="original-price">${formatINR(item.originalPrice)}</span>
            <span class="discount-perc">${item.discount}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Filter Tab Setup
function setupFilterTabs() {
  const tabs = document.querySelectorAll('.filter-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.getAttribute('data-filter');
      renderProducts(filter);
    });
  });
}

// Cart Drawer Handlers
function toggleCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  drawer.classList.toggle('active');
  overlay.classList.toggle('active');
}

function addToCart(productId, selectedSize = null) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const size = selectedSize || product.sizes[0];
  const existingIndex = cart.findIndex(i => i.id === productId && i.size === size);

  if (existingIndex > -1) {
    cart[existingIndex].qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: size,
      qty: 1
    });
  }

  saveCart();
  updateCartUI();
  showToast(`Added "${product.name}" to your shopping bag!`);
  
  // Optionally open cart drawer
  const drawer = document.getElementById('cartDrawer');
  if (!drawer.classList.contains('active')) {
    toggleCart();
  }
}

function updateCartQty(index, change) {
  if (!cart[index]) return;
  cart[index].qty += change;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  updateCartUI();
}

function removeCartItem(index) {
  if (!cart[index]) return;
  const removedName = cart[index].name;
  cart.splice(index, 1);
  saveCart();
  updateCartUI();
  showToast(`Removed "${removedName}" from cart`);
}

function saveCart() {
  localStorage.setItem('gz_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const cartBody = document.getElementById('cartItemsList');
  const cartBadge = document.getElementById('cartBadgeCount');
  const subtotalEl = document.getElementById('cartSubtotalAmount');
  const shippingBar = document.getElementById('freeShippingBar');
  const shippingMsg = document.getElementById('shippingProgressText');

  const totalCount = cart.reduce((sum, i) => sum + i.qty, 0);
  if (cartBadge) cartBadge.textContent = totalCount;

  if (!cartBody) return;

  if (cart.length === 0) {
    cartBody.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <i class="fas fa-shopping-bag" style="font-size: 3.5rem; color: var(--gold-primary); margin-bottom: 16px; opacity: 0.6;"></i>
        <h4 style="color: #fff; font-size: 1.2rem; margin-bottom: 8px;">Your Bag is Empty</h4>
        <p style="font-size: 0.9rem; margin-bottom: 20px;">Explore our royal collection and discover true elegance.</p>
        <button class="btn-gold" onclick="toggleCart(); document.getElementById('collectionSection').scrollIntoView({behavior: 'smooth'});">
          Start Shopping
        </button>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = formatINR(0);
    if (shippingBar) shippingBar.style.width = '0%';
    if (shippingMsg) shippingMsg.innerHTML = 'Add items worth <strong>₹1,999</strong> for <strong>FREE EXPRESS SHIPPING</strong>';
    return;
  }

  cartBody.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.name}</h4>
        <div class="cart-item-variant">Size: <strong>${item.size}</strong></div>
        <div class="cart-item-price">${formatINR(item.price)}</div>
      </div>
      <div class="cart-qty-ctrl">
        <button class="qty-btn" onclick="updateCartQty(${index}, -1)">-</button>
        <span class="cart-qty-val">${item.qty}</span>
        <button class="qty-btn" onclick="updateCartQty(${index}, 1)">+</button>
      </div>
      <button class="cart-item-remove" onclick="removeCartItem(${index})" title="Remove Item">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  `).join('');

  // Calculations
  const rawSubtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
  const discountAmt = Math.round(rawSubtotal * activeDiscount);
  const finalSubtotal = rawSubtotal - discountAmt;

  if (subtotalEl) subtotalEl.textContent = formatINR(finalSubtotal);

  // Free shipping progress (target ₹1999)
  const freeShipThreshold = 1999;
  const progressPerc = Math.min(100, Math.round((rawSubtotal / freeShipThreshold) * 100));
  if (shippingBar) shippingBar.style.width = `${progressPerc}%`;

  if (shippingMsg) {
    if (rawSubtotal >= freeShipThreshold) {
      shippingMsg.innerHTML = `<span style="color: #4ade80;"><i class="fas fa-check-circle"></i> Congratulations! You've unlocked FREE EXPRESS SHIPPING!</span>`;
    } else {
      const remaining = freeShipThreshold - rawSubtotal;
      shippingMsg.innerHTML = `Add <strong>${formatINR(remaining)}</strong> more to get <strong>FREE SHIPPING</strong>`;
    }
  }
}

// Coupon Code Logic
function applyCoupon() {
  const input = document.getElementById('couponCodeInput');
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (code === 'GREATZONE10' || code === 'ROYALGOLD') {
    activeDiscount = 0.10;
    appliedCouponCode = code;
    showToast(`Coupon "${code}" applied! 10% Royal Discount activated.`);
    updateCartUI();
  } else if (code === '') {
    showToast('Please enter a coupon code.');
  } else {
    showToast('Invalid Coupon Code. Try "GREATZONE10".');
  }
}

// WhatsApp Direct Checkout
function checkoutViaWhatsApp() {
  if (cart.length === 0) {
    showToast('Your cart is empty!');
    return;
  }

  const itemsList = cart.map((i, idx) => `${idx + 1}. ${i.name} (Size: ${i.size}) x ${i.qty} = ${formatINR(i.price * i.qty)}`).join('%0A');
  const subtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
  
  let msg = `*Namaste Great Zone Fashion!* 🛍️%0A%0AI would like to place an order from your website:%0A%0A${itemsList}%0A%0A*Total Amount:* ${formatINR(subtotal)}`;
  if (appliedCouponCode) {
    msg += `%0A*Coupon Applied:* ${appliedCouponCode} (10% OFF)`;
  }
  msg += `%0A%0APlease let me know the payment details and delivery timeline. Thank you!`;

  const phone = "919876543210"; // Placeholder business WhatsApp number
  const waUrl = `https://wa.me/${phone}?text=${msg}`;
  window.open(waUrl, '_blank');
}

// Quick View Modal
let currentModalProductId = null;
let currentModalSelectedSize = null;

function openQuickView(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  currentModalProductId = productId;
  currentModalSelectedSize = product.sizes[0];

  const modal = document.getElementById('quickViewModal');
  const content = document.getElementById('quickViewContent');

  content.innerHTML = `
    <div class="quickview-grid">
      <img src="${product.image}" alt="${product.name}" class="quickview-img">
      <div class="quickview-details">
        <span class="section-tag">${product.categoryLabel}</span>
        <h2 style="font-family: var(--font-serif); font-size: 1.8rem; color: #fff; margin-bottom: 12px;">${product.name}</h2>
        <div class="product-rating" style="margin-bottom: 18px;">
          <i class="fas fa-star"></i>
          <strong>${product.rating}</strong>
          <span>(${product.reviewsCount} customer reviews)</span>
        </div>
        <div class="product-pricing" style="margin-bottom: 20px;">
          <span class="current-price" style="font-size: 1.6rem;">${formatINR(product.price)}</span>
          <span class="original-price" style="font-size: 1.1rem;">${formatINR(product.originalPrice)}</span>
          <span class="discount-perc">${product.discount}</span>
        </div>
        <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.7; margin-bottom: 20px;">
          ${product.description}
        </p>
        <div style="font-size: 0.88rem; color: var(--gold-light); margin-bottom: 18px;">
          <i class="fas fa-feather-alt"></i> <strong>Fabric & Work:</strong> ${product.fabric}
        </div>
        <div style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-muted); margin-bottom: 8px;">
          Select Size:
        </div>
        <div class="size-selector">
          ${product.sizes.map((s, idx) => `
            <button class="size-pill ${idx === 0 ? 'active' : ''}" onclick="selectModalSize(this, '${s}')">
              ${s}
            </button>
          `).join('')}
        </div>
        <div style="display: flex; gap: 14px; margin-top: auto; flex-wrap: wrap;">
          <button class="btn-gold" style="flex: 1;" onclick="addModalItemToCart()">
            <i class="fas fa-shopping-bag"></i> Add to Bag
          </button>
          <button class="btn-outline-gold" onclick="orderItemDirectWhatsApp(${product.id})">
            <i class="fab fa-whatsapp"></i> Order on WhatsApp
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function selectModalSize(btn, size) {
  document.querySelectorAll('.size-pill').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentModalSelectedSize = size;
}

function addModalItemToCart() {
  if (currentModalProductId) {
    addToCart(currentModalProductId, currentModalSelectedSize);
    closeQuickView();
  }
}

function orderItemDirectWhatsApp(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;
  const size = currentModalSelectedSize || product.sizes[0];
  const msg = `*Namaste Great Zone!* 🛍️%0A%0AI want to order:%0A*Product:* ${product.name}%0A*Size:* ${size}%0A*Price:* ${formatINR(product.price)}%0A%0APlease confirm availability and payment details.`;
  const phone = "919876543210";
  window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
}

function closeQuickView() {
  const modal = document.getElementById('quickViewModal');
  modal.classList.remove('active');
}

// Wishlist Functionality
function toggleWishlist(productId) {
  const index = wishlist.indexOf(productId);
  const product = PRODUCTS_DATA.find(p => p.id === productId);

  if (index > -1) {
    wishlist.splice(index, 1);
    showToast(`Removed from Wishlist`);
  } else {
    wishlist.push(productId);
    showToast(`Added "${product ? product.name : 'Item'}" to Wishlist! ❤️`);
  }

  localStorage.setItem('gz_wishlist', JSON.stringify(wishlist));
  updateWishlistUI();
  // Re-render to update heart buttons
  const activeTab = document.querySelector('.filter-btn.active');
  const currentFilter = activeTab ? activeTab.getAttribute('data-filter') : 'all';
  renderProducts(currentFilter);
}

function updateWishlistUI() {
  const wishlistBadge = document.getElementById('wishlistBadgeCount');
  if (wishlistBadge) {
    wishlistBadge.textContent = wishlist.length;
  }
}

// Toast Notifications
function showToast(message) {
  let toast = document.getElementById('appToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fas fa-sparkles" style="color: var(--gold-light);"></i> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// Sticky Header & Scroll Effects
function initHeaderScroll() {
  const header = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Mobile Menu
function initMobileMenu() {
  const hamburger = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.querySelector('i').classList.toggle('fa-bars');
      hamburger.querySelector('i').classList.toggle('fa-times');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = hamburger.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        }
      });
    });
  }
}

// Newsletter Subscription Handler
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('newsletterEmail');
  if (!input || !input.value.trim()) return;

  showToast(`Welcome to Great Zone Royal Circle! Coupon code "GREATZONE10" sent.`);
  input.value = "";
}
