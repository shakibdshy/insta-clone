import Header from '../components/Header'
import Post from '../components/Post'
import PrimarySidebar from '../components/PrimarySidebar'
import Story from '../components/Story'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div>
          <Story />
          <Post />
        </div>
        {/* <PrimarySidebar /> */}
      </main>
    </>
  )
}
