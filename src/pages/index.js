import { Container, Grid, Group } from '@mantine/core'
import Header from '../components/Header'
import Post from '../components/Post'
import PrimarySidebar from '../components/PrimarySidebar'
import Story from '../components/Story'

export default function Home() {
  return (
    <>
      <Header />
      <Container size={856}>
        <main>
          <Group spacing="xl" align='flex-start' position="center">
            <div style={{ maxWidth: '470px' }}>
              <Story />
              <Post />
            </div>
            <PrimarySidebar />
          </Group>
        </main>
      </Container>
    </>
  )
}
