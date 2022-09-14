import { Avatar, Button, createStyles, Group, Indicator, MediaQuery, Navbar, ScrollArea, Text, useMantineColorScheme } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react'
import useFetch from '../hooks/useFetch';
import { useToggle } from '@mantine/hooks';


const useStyles = createStyles((theme) => {
    return {
        primarySidebar: {
            maxWidth: '318px',
            marginTop: "90px",
        },

        sidebarHeader: {
            padding: "20px 0 10px",
        },

        userList: {
            padding: "0",
            margin: "0",
            display: "flex",
            flexDirection: "column",
            gap: "15px"
        }
    }
});

const PrimarySidebar = () => {
    const { classes, cx } = useStyles();
    const [value, toggle] = useToggle(['Follow', 'Following']);
    const [userData] = useFetch();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";

    const { user, data } = userData;

    console.log(data?.user?.profile_picture)

    return (
        <>
            <MediaQuery smallerThan={900} styles={{ display: 'none' }}>
                <aside className={classes.primarySidebar}>
                    <Navbar height={850} width={{ base: 360 }} style={{ borderRight: 'none' }}>
                        <Navbar.Section>
                            <Group spacing="sm" className={classes.sidebarHeader}>
                                <Avatar src={user?.profile_picture} radius="xl" size="lg" />

                                <div style={{ flex: 1 }}>
                                    <Text size="sm" weight={500}>
                                        {user?.username}
                                    </Text>

                                    <Text color={dark ? "#fff" : "black"} size="xs">
                                        {user?.full_name}
                                    </Text>
                                </div>

                                <Text color="blue" weight={700} size="sm">
                                    Switch
                                </Text>
                            </Group>
                        </Navbar.Section>
                        <Navbar.Section>
                            <Group position="apart" style={{ padding: "5px 0 10px" }}>
                                <Text size="sm" weight={500}>
                                    Suggestions for you
                                </Text>

                                <Link href='/'>
                                    <a style={{ fontSize: '12px', color: dark ? "#fff" : "black" }}>See All</a>
                                </Link>
                            </Group>
                        </Navbar.Section>
                        <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
                            <ul className={classes.userList}>
                                {data?.map((item, index) => (
                                    <li key={index} style={{ listStyle: "none" }}>
                                        <Group position='apart'>
                                            <Group spacing="sm">
                                                <Link href="/">
                                                    <a>
                                                        <Avatar size={40} src={item?.user?.profile_picture} radius={30} />
                                                    </a>
                                                </Link>

                                                <div>
                                                    <Link href="/">
                                                        <a>
                                                            <Text size="sm" weight={500}>
                                                                {item?.user?.username}
                                                            </Text>
                                                        </a>
                                                    </Link>
                                                    <Text size="sm" weight={400}>
                                                        {item?.user?.full_name}
                                                    </Text>
                                                </div>
                                            </Group>
                                            <Button color={value} variant="subtle" size="xs" onClick={() => toggle()}>
                                                {value}
                                            </Button>
                                        </Group>
                                    </li>
                                ))}
                            </ul>
                        </Navbar.Section>
                    </Navbar>
                </aside>
            </MediaQuery>
        </>
    )
}

export default PrimarySidebar