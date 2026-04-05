export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags: string[];
  isSignature?: boolean;
  isNew?: boolean;
  pairing?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const categories: Category[] = [
  { id: 'all', name: 'All Items', icon: '✦', description: 'Our complete menu' },
  { id: 'cakes', name: 'Cakes', icon: '🎂', description: 'Handcrafted layer cakes' },
  { id: 'cheesecakes', name: 'Cheesecakes', icon: '🍰', description: 'Velvety smooth cheesecakes' },
  { id: 'brownies', name: 'Brownies & Slices', icon: '🍫', description: 'Fudgy, rich indulgence' },
  { id: 'pies', name: 'Pies & Pancakes', icon: '🥞', description: 'Artisan pies & fluffy stacks' },
  { id: 'shakes', name: 'Shakes', icon: '🥤', description: 'Thick, creamy milkshakes' },
  { id: 'coffee', name: 'Coffee', icon: '☕', description: 'Specialty brewed coffees' },
];

export const menuItems: MenuItem[] = [
  // CAKES
  {
    id: 'choc-cake',
    name: 'Chocolate Indulgence Cake',
    description: 'Triple-layered dark chocolate sponge with ganache frosting and cocoa dust.',
    price: 5500,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&fm=webp&fit=crop',
    category: 'cakes',
    tags: ['Signature', 'Bestseller'],
    isSignature: true,
    pairing: 'Pairs beautifully with Americano',
  },
  {
    id: 'strawberry-cake',
    name: 'Strawberry Dream Cake',
    description: 'Light vanilla sponge layered with fresh strawberry compote and cream.',
    price: 4800,
    image: 'https://images.unsplash.com/photo-1495474472201-4966e3fbff1c?q=80&w=600&fm=webp&fit=crop',
    category: 'cakes',
    tags: ['Seasonal'],
    pairing: 'Perfect with Cold Brew',
  },
  {
    id: 'walnut-cake',
    name: 'Walnut Espresso Cake',
    description: 'Dense walnut sponge with espresso buttercream and candied walnuts.',
    price: 5200,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&fm=webp&fit=crop',
    category: 'cakes',
    tags: ['Signature'],
    isSignature: true,
    pairing: 'Pairs with Latte',
  },
  {
    id: 'redvelvet-cake',
    name: 'Red Velvet Royale',
    description: 'Classic red velvet with cream cheese frosting and velvet crumble.',
    price: 5000,
    image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=600&fm=webp&fit=crop',
    category: 'cakes',
    tags: ['Popular'],
    pairing: 'Pairs with Mocha',
  },
  {
    id: 'double-milk',
    name: 'Double Milk Cake',
    description: 'Soaked in two milks, topped with caramel glaze and toasted coconut.',
    price: 3800,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&fm=webp&fit=crop',
    category: 'cakes',
    tags: ['New'],
    isNew: true,
  },
  {
    id: 'triple-milk',
    name: 'Triple Milk Cake',
    description: 'The ultimate tres leches — three milks, whipped cream, cinnamon finish.',
    price: 4200,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&fm=webp&fit=crop',
    category: 'cakes',
    tags: ['New', 'Popular'],
    isNew: true,
  },
  // CHEESECAKES
  {
    id: 'classic-cheese',
    name: 'Classic New York Cheesecake',
    description: 'Dense, creamy, baked cheesecake on a buttery graham cracker base.',
    price: 950,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&fm=webp&fit=crop',
    category: 'cheesecakes',
    tags: ['Signature'],
    isSignature: true,
    pairing: 'Pairs with Cappuccino',
  },
  {
    id: 'blueberry-cheese',
    name: 'Blueberry Cloud Cheesecake',
    description: 'Silky cheesecake crowned with fresh blueberry coulis and vanilla bean.',
    price: 1100,
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600&fm=webp&fit=crop',
    category: 'cheesecakes',
    tags: ['Bestseller'],
    pairing: 'Pairs with Cold Brew',
  },
  {
    id: 'strawberry-cheese',
    name: 'Strawberry Swirl Cheesecake',
    description: 'Swirled with fresh strawberry jam, finished with a glaze and fresh berries.',
    price: 1050,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600&fm=webp&fit=crop',
    category: 'cheesecakes',
    tags: ['Popular'],
  },
  {
    id: 'choc-cheese',
    name: 'Dark Chocolate Cheesecake',
    description: 'Bittersweet chocolate cheesecake on an Oreo crust with ganache drizzle.',
    price: 1150,
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=600&fm=webp&fit=crop',
    category: 'cheesecakes',
    tags: ['Signature'],
    isSignature: true,
    pairing: 'Pairs with Espresso',
  },
  // BROWNIES & SLICES
  {
    id: 'choc-brownie',
    name: 'Fudge Chocolate Brownie',
    description: 'Ultra-dense, crinkle-top brownie with dark chocolate chips and sea salt.',
    price: 550,
    image: 'https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?q=80&w=600&fm=webp&fit=crop',
    category: 'brownies',
    tags: ['Bestseller'],
    pairing: 'Pairs with Americano',
  },
  {
    id: 'fudge-slice',
    name: 'Caramel Fudge Slice',
    description: 'Buttery shortbread base, thick caramel fudge, dark chocolate top layer.',
    price: 650,
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=600&fm=webp&fit=crop',
    category: 'brownies',
    tags: ['Popular'],
  },
  {
    id: 'cake-slice',
    name: 'Signature Cake Slice',
    description: 'A rotating selection of our finest whole cakes, served by the slice.',
    price: 750,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&fm=webp&fit=crop',
    category: 'brownies',
    tags: ['Daily Special'],
  },
  // PIES & PANCAKES
  {
    id: 'signature-pie',
    name: 'Signature Blueberry Pie',
    description: 'Buttery flaky crust filled with wild blueberry compote, dusted with sugar.',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1495474472201-4966e3fbff1c?q=80&w=600&fm=webp&fit=crop',
    category: 'pies',
    tags: ['Signature'],
    isSignature: true,
    pairing: 'Pairs with Vanilla Latte',
  },
  {
    id: 'fruit-pie',
    name: 'Mixed Berry Tart',
    description: 'Crisp pastry shell with vanilla custard and seasonal berry arrangement.',
    price: 1100,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&fm=webp&fit=crop',
    category: 'pies',
    tags: ['Seasonal'],
  },
  {
    id: 'choc-pancakes',
    name: 'Chocolate Stack Pancakes',
    description: 'Fluffy cocoa pancakes stacked high with Nutella drizzle and banana.',
    price: 850,
    image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=600&fm=webp&fit=crop',
    category: 'pies',
    tags: ['Popular'],
    pairing: 'Pairs with Mocha',
  },
  {
    id: 'berry-pancakes',
    name: 'Berry Bliss Pancakes',
    description: 'Buttermilk pancakes topped with mixed berry compote and whipped cream.',
    price: 800,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&fm=webp&fit=crop',
    category: 'pies',
    tags: ['Bestseller'],
  },
  // SHAKES
  {
    id: 'blueberry-shake',
    name: 'Blueberry Velvet Shake',
    description: 'Thick blueberry milkshake with vanilla ice cream and berry foam crown.',
    price: 950,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&fm=webp&fit=crop',
    category: 'shakes',
    tags: ['Signature'],
    isSignature: true,
  },
  {
    id: 'choc-shake',
    name: 'Dark Chocolate Shake',
    description: 'Intense dark chocolate shake blended with espresso and cream.',
    price: 1000,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&fm=webp&fit=crop',
    category: 'shakes',
    tags: ['Popular'],
  },
  {
    id: 'strawberry-shake',
    name: 'Strawberry Fields Shake',
    description: 'Fresh strawberry shake with rose water and vanilla bean swirl.',
    price: 900,
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600&fm=webp&fit=crop',
    category: 'shakes',
    tags: ['New'],
    isNew: true,
  },
  // COFFEE
  {
    id: 'espresso',
    name: 'Single Origin Espresso',
    description: 'A ristretto pull of our house-blend single origin beans. Bold and clean.',
    price: 380,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600&fm=webp&fit=crop',
    category: 'coffee',
    tags: ['Classic'],
  },
  {
    id: 'americano',
    name: 'Americano',
    description: 'Double espresso over hot water — smooth, rich, and full-bodied.',
    price: 420,
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=600&fm=webp&fit=crop',
    category: 'coffee',
    tags: ['Classic'],
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    description: 'Equal parts espresso, steamed milk, and velvety microfoam.',
    price: 520,
    image: 'https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?q=80&w=600&fm=webp&fit=crop',
    category: 'coffee',
    tags: ['Popular'],
  },
  {
    id: 'latte',
    name: 'Caramel Latte',
    description: 'Smooth espresso with steamed milk and house caramel drizzle.',
    price: 580,
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=600&fm=webp&fit=crop',
    category: 'coffee',
    tags: ['Bestseller'],
  },
  {
    id: 'mocha',
    name: 'Dark Mocha',
    description: 'Espresso with dark chocolate sauce and silky steamed milk.',
    price: 620,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&fm=webp&fit=crop',
    category: 'coffee',
    tags: ['Signature'],
    isSignature: true,
  },
  {
    id: 'cold-coffee',
    name: 'Cold Brew Reserve',
    description: '18-hour cold brew steeped in-house, served over crystal ice.',
    price: 750,
    image: 'https://images.unsplash.com/photo-1495474472201-4966e3fbff1c?q=80&w=600&fm=webp&fit=crop',
    category: 'coffee',
    tags: ['New'],
    isNew: true,
  },
];

export const pairings = [
  {
    dessert: 'Blueberry Cheesecake',
    coffee: 'Cappuccino',
    note: 'The berry acidity cuts through the rich cream perfectly.',
    dessertImage: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&fm=webp&fit=crop',
    coffeeImage: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600&fm=webp&fit=crop',
  },
  {
    dessert: 'Walnut Espresso Cake',
    coffee: 'Caramel Latte',
    note: 'Nutty warmth meets sweet caramel in a perfect harmony.',
    dessertImage: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&fm=webp&fit=crop',
    coffeeImage: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=600&fm=webp&fit=crop',
  },
  {
    dessert: 'Fudge Brownie',
    coffee: 'Americano',
    note: 'Bold bitterness amplifies the deep chocolate richness.',
    dessertImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&fm=webp&fit=crop',
    coffeeImage: 'https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?q=80&w=600&fm=webp&fit=crop',
  },
  {
    dessert: 'Red Velvet Royale',
    coffee: 'Dark Mocha',
    note: 'Chocolate undertones weave through velvety cream cheese.',
    dessertImage: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600&fm=webp&fit=crop',
    coffeeImage: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=600&fm=webp&fit=crop',
  },
];

export const special = {
  title: 'Signature Chocolate Indulgence Cake',
  subtitle: 'This Week\'s Special',
  description: 'Our most celebrated creation — three layers of dark Belgian chocolate sponge, soaked in espresso syrup, filled with bittersweet ganache, and crowned with hand-piped chocolate rosettes. Available in full, half, and slice.',
  price: 5500,
  badge: 'Limited This Week',
  image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&fm=webp&fit=crop',
};
