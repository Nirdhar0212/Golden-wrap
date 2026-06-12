import CategoryPage from '../components/CategoryPage'

const items = [
  { id: 1, name: 'Classic Golden Rakhi',   image: '/images/product1.jpeg' },
  { id: 2, name: 'Floral Thread Rakhi',    image: '/images/product2.jpeg' },
  { id: 3, name: 'Pearl & Zari Rakhi',     image: '/images/product3.jpeg' },
]

export default function Rakhi() {
  return <CategoryPage title="Rakhi" icon="🪢" items={items} />
}
