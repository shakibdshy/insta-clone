import { Avatar, Button, createStyles, Grid, Group, Image, Input, MediaQuery, Text, Tooltip, useMantineColorScheme } from '@mantine/core'
import { IconAlertCircle, IconAt, IconBookmark, IconDots, IconHeart, IconMessageCircle2, IconMessages, IconMoodSmile, IconSend, IconShare, IconThumbUp } from '@tabler/icons'
import React, { useState } from 'react'
import useFetch from '../hooks/useFetch';

const useStyles = createStyles((theme) => ({
  postItem: {
    background: theme.colorScheme === 'dark' ? "#000" : "#fff",
    border: theme.colorScheme === 'dark' ? "1px solid #363636" : "1px solid #dbdbdb",
    borderRadius: "8px",
    marginTop: "15px",
  }
}));

const Post = () => {
  const { classes, cx } = useStyles();
  const [counter, setCounter] = useState({ like: 10 });
  const [active, setActive] = useState({ like: false });
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const [userData] = useFetch();
  const { user, data } = userData;

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
          data?.map((item, index) => (
            <article key={index} className={classes.postItem}>
              <Group spacing="sm" className="post-header">
                <Avatar src={user?.profile_picture} radius="xl" size="md" />

                <div style={{ flex: 1 }}>
                  <Text size="sm" weight={500}>
                    {user?.username}
                  </Text>

                  <Text color="dimmed" size="xs">
                    Ordinal Studio
                  </Text>
                </div>

                {<IconDots size={30} stroke={2} />}
              </Group>
              <Image src={item?.user?.profile_picture} alt='Post' />
              <div className='post-footer'>
                <ul className='post-share-list'>
                  <li onClick={handleLike}>
                    <IconHeart size={24} style={{ color: active.like ? "red" : "" }} />
                  </li>
                  <li>
                    <IconMessageCircle2 size={24} />
                  </li>
                  <li>
                    <IconSend size={24} />
                  </li>
                  <li style={{ marginLeft: "auto" }}>
                    <IconBookmark size={24} />
                  </li>
                </ul>
                <div className='post-like'>
                  {counter.like} likes
                </div>
                <div className="post-content">
                  <Text color={dark ? "#fff" : "black"} size="sm" weight={500}>
                    {user?.username}
                  </Text>
                  <Text size="sm" weight={500}>
                    What do you want to see in our content ?
                  </Text>
                </div>
                <Text size="xs" weight={400} style={{ margin: "5px 0" }}>
                  View All 50 comments
                </Text>
                <div className="post-content">
                  <Text color={dark ? "#fff" : "black"} size="sm" weight={500}>
                    carinstagram
                  </Text>
                  <Text size="sm" weight={500}>
                    we want the output 🙏🏼
                  </Text>
                </div>
                <Text size={10} style={{ margin: "5px 0" }}>
                  1 DAY AGO
                </Text>
              </div>
              <div className="post-input">
                <Input
                  icon={<IconMoodSmile />}
                  variant="unstyled"
                  size="lg"
                  placeholder="Add a comment.."
                  rightSection={
                    <Button color="blue" variant="subtle" size="xs" style={{ right: "15px" }}>
                      Post
                    </Button>
                  }
                />
              </div>
            </article>
          ))
        }
      </div>
    </>
  )
}

export default Post