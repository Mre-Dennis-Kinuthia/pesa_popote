import HomeTextContainer from '@/app/components/Home-text-container'
import Layout from '@/app/LandingPageLayout'
import LogRocket from 'logrocket';
LogRocket.init('bcbftq/pesa-popote');

export default function Home() {
  return (
    <Layout>
      <main className="container">
        <HomeTextContainer />
      </main>
    </Layout>
  )
}
