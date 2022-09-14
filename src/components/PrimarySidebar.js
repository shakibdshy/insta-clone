import { Avatar, createStyles, Group, Indicator, MediaQuery, Navbar, ScrollArea, Text } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react'
import useFetch from '../hooks/useFetch';


const useStyles = createStyles((theme) => {
    return {
        primarySidebar: {
            maxWidth: '318px',
            marginTop: "90px",

            // '@media (max-width: 1200px)': {
            //     display: 'none',
            // }
        }
    }
});

const SecondarySidebar = () => {
    const { classes, cx } = useStyles();
    const [active, setActive] = useState('Billing');
    const [userData] = useFetch();

    const { users } = userData;

    return (
        <>
            <MediaQuery smallerThan={1200} styles={{ display: 'none' }}>
                <aside className={classes.primarySidebar}>
                    <Navbar height={850} width={{ base: 360 }} style={{ borderRight: 'none' }}>
                        <Navbar.Section>
                            <Text size="lg" weight={600}>
                                Contact
                            </Text>
                        </Navbar.Section>
                        <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
                            {users?.map((user, index) => (
                                <Link href='/' key={index}>
                                    <a
                                        className={cx(classes.link, { [classes.linkActive]: user?.name === active })}
                                        onClick={(event) => {
                                            event.preventDefault();
                                            setActive(user?.name);
                                        }}
                                    >
                                        <Group spacing="sm" position="center">
                                            <Indicator dot inline size={12} offset={5} position="bottom-end" color="green" withBorder>
                                                <Avatar size={40} src={user.profile_picture} radius={30} />
                                            </Indicator>
                                            <Text size="sm" weight={500}>
                                                {user?.name}
                                            </Text>
                                        </Group>
                                    </a>
                                </Link>
                            ))}
                        </Navbar.Section>
                    </Navbar>
                </aside>
            </MediaQuery>
        </>
    )
}

export default SecondarySidebar