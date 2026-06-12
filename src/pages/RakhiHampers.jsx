import CategoryPage from '../components/CategoryPage'

const items = [
  { id: 4, name: 'Premium Rakhi Hamper',   image: '/images/product4.jpeg' },
  { id: 5, name: 'Sweet & Dry Fruit Box',  image: '/images/product5.jpeg' },
  { id: 6, name: 'Luxury Gift Hamper',     image: '/images/product6.jpeg' },
  { id: 7, name: 'Family Rakhi Bundle',    image: '/images/product7.jpeg' },
]

export default function RakhiHampers() {
  return <CategoryPage title="Rakhi Hampers" icon="🧺" items={items} />
}
