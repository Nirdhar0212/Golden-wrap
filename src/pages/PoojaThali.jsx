import CategoryPage from '../components/CategoryPage'

const items = [
  { id: 8,  name: 'Decorated Pooja Thali', image: '/images/product8.jpeg' },
  { id: 9,  name: 'Floral Aarti Thali',    image: '/images/product9.jpeg' },
  { id: 10, name: 'Golden Festival Thali', image: '/images/product10.jpeg' },
]

export default function PoojaThali() {
  return <CategoryPage title="Pooja Thali" icon="🪔" items={items} />
}
