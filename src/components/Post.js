import { Avatar, Button, Grid, Group, Image, Input, MediaQuery, Text } from '@mantine/core'
import { IconDots, IconMessages, IconShare, IconThumbUp } from '@tabler/icons'
import React, { useState } from 'react'
import useFetch from '../hooks/useFetch';

const Post = () => {
  const [counter, setCounter] = useState({ like: 10 });
  const [active, setActive] = useState({ like: false });
  const [userData] = useFetch();
  const { user, posts } = userData;

  const handleLike = () => { 
    if (active.like) {
      setCounter({ like: counter.like - 1 });
      setActive({ like: false });
    } else {
      setCounter({ like: counter.like + 1 });
      setActive({ like: true });
    }
  }

  return (
    <>
      <div>
        {
          posts?.map((post, index) => (
            <article key={index} className="post-item">
              <Group spacing="sm" className="post-header">
                <Avatar src={post?.user?.profile_picture} radius="xl" size="lg" />

                <div style={{ flex: 1 }}>
                  <Text size="sm" weight={500}>
                    {post?.user?.name}
                  </Text>

                  <Text color="dimmed" size="xs">
                    Yesterday at 11:51 AM
                  </Text>
                </div>

                {<IconDots size={30} stroke={2} />}
              </Group>
              <Text className='post-content' size="md">
                life settlement stable earning with app development ?
              </Text>
              <Image src={post?.user?.profile_picture} alt='Post' />
              <div className='post-footer'>
                <div className='post-like'>
                  {counter.like} Likes
                </div>
                <div className='post-share-list'>
                  <Grid>
                    <Grid.Col span={4}>
                      <Button
                        fullWidth
                        variant="subtle"
                        color="gray"
                        radius="md"
                        size="sm"
                        leftIcon={<IconThumbUp />}
                        styles={(theme) => ({
                          root: {
                            color: active.like ? theme.colors.blue[6] : theme.colors.gray[6],
                            '&:hover': {
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            },
                          },
                        })}
                        onClick={handleLike}
                      >
                        <MediaQuery query="(max-width: 425px)" styles={{ display: "none" }}>
                          <Text>
                            Like
                          </Text>
                        </MediaQuery>
                      </Button>
                    </Grid.Col>
                    <Grid.Col span={4}>
                      <Button
                        fullWidth
                        variant="subtle"
                        color="gray"
                        radius="md"
                        size="sm"
                        leftIcon={<IconMessages />}
                        styles={(theme) => ({
                          root: {
                            '&:hover': {
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            },
                          },
                        })}
                      >
                        <MediaQuery query="(max-width: 425px)" styles={{ display: "none" }}>
                          <Text>
                            Comment
                          </Text>
                        </MediaQuery>
                      </Button>
                    </Grid.Col>
                    <Grid.Col span={4}>
                      <Button
                        fullWidth
                        variant="subtle"
                        color="gray"
                        radius="md"
                        size="sm"
                        leftIcon={<IconShare />}
                        styles={(theme) => ({
                          root: {
                            '&:hover': {
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            },
                          },
                        })}
                      >
                        <MediaQuery query="(max-width: 425px)" styles={{ display: "none" }}>
                          <Text>
                            Share
                          </Text>
                        </MediaQuery>
                      </Button>
                    </Grid.Col>
                  </Grid>
                </div>
                <div className="comment-input">
                  <Group spacing='sm'>
                    <Avatar component='a' href="/" radius="xl" size={40} src={user?.profile_picture} />
                    <Input
                      variant="filled"
                      placeholder="Write a comment..."
                      radius="xl"
                      size="md"
                      style={{ flexGrow: '1' }}
                    />
                  </Group>
                </div>
                <div className='comment'>
                  {
                    post?.comments?.map((comment, index) => (
                      <div key={index} className='comment-item'>
                        <Group spacing='sm'>
                          <Avatar radius="xl" size={40} src={comment?.user?.profile_picture} />
                          <div className="comment-text">
                            <Text color='#fff' weight={500}>
                              {comment?.user?.name}
                            </Text>
                            <Text>
                              {comment?.text}
                            </Text>
                          </div>
                        </Group>
                      </div>
                    ))
                  }
                </div>
              </div>
            </article>
          ))
        }
      </div>
    </>
  )
}

export default Post