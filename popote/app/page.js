import Nav from '@/app/components/Navbar'
import HomeTextContainer from '@/app/components/Home-text-container'

import Layout from './layout'
export default function Home() {
  return (
    <Layout>
    <main className="container">
      <HomeTextContainer />
    </main>
    </Layout>
  )
}
