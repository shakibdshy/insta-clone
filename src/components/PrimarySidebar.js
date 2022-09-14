import { Avatar, createStyles, Group, Indicator, Navbar, ScrollArea, Text } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react'
import useFetch from '../hooks/useFetch';


const useStyles = createStyles((theme) => {
    return {
        secondarySidebar: {
            paddingTop: '15px',
            display: 'none',

            '@media (min-width: 992px)': {
                display: 'block',
            },
        },
        listItem: {
            padding: '8px',
            borderRadius: '6px',
            transitions: 'all 0.3s ease',
            display: 'block',

            '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
            }
        },
        link: {
            ...theme.fn.focusStyles(),
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            textDecoration: 'none',
            fontSize: theme.fontSizes.sm,
            color: "#fff",
            padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
            borderRadius: '6px',
            fontWeight: 500,

            '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
            },
        },

        linkIcon: {
            marginRight: theme.spacing.sm,
        },

        linkActive: {
            '&, &:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
            },
        },
    }
});

const SecondarySidebar = () => {
    const { classes, cx } = useStyles();
    const [active, setActive] = useState('Billing');
    const [userData] = useFetch();

    const { users } = userData;

    return (
        <>
            <aside className={classes.secondarySidebar}>
                <Navbar height={850} width={{ base: 360 }} style={{ position: 'fixed', top: '65px', left: 'auto', right: '0', borderRight: 'none' }}>
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
        </>
    )
}

export default SecondarySidebar