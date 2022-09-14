import { ActionIcon, Avatar, Container, createStyles, Group, Input, MediaQuery, Tooltip, useMantineColorScheme } from '@mantine/core'
import Link from 'next/link';
import React from 'react'
import { IconBrandMessenger, IconBrandSafari, IconBrightnessDown, IconHeart, IconHome, IconMoon, IconSearch, IconSquarePlus } from '@tabler/icons';
import useFetch from '../hooks/useFetch';
import DarkLogo from '../assets/Instagram_logo.svg.png';
import WhiteLogo from '../assets/instagram-w.png';
import Image from 'next/image';

const useStyles = createStyles((theme) => ({
    header: {
        background: theme.colorScheme === 'dark' ? theme.colors.dark[9] : "#fff",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 99,
        borderBottom: "1px solid #38393a",
        padding: '10px 0',
    },

    menu: {
        display: 'flex',
        alignItems: 'center',
        gap: "16px",
        listStyle: 'none',
        margin: 0,
        padding: 0,
    },

    menuList: {
        lineHeight: 1,
    },

    menuLink: {
        fontSize: "24px",
    },

    none: {
        display: 'none',
    },
}))

const links = [
    {
        "icon": IconHome,
        "title": "Home",
    },
    {
        "icon": IconBrandMessenger,
        "title": "Messenger",
    },
    {
        "icon": IconSquarePlus,
        "title": "Create Post",
    },
    {
        "icon": IconBrandSafari,
        "title": "Explore",
    },
    {
        "icon": IconHeart,
        "title": "Notifications",
    },
]

function Header() {
    const { classes, cx } = useStyles();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";
    const [userData] = useFetch();

    const { user } = userData;

    console.log(user);

    return (
        <header className={classes.header}>
            <Container size={975}>
                <Group align="center" position='apart'>
                    <div style={{ height: '30px'}}>
                        <Link href="/">
                            <a style={{ lineHight: '1' }}>
                                <Image src={dark ? WhiteLogo : DarkLogo } alt="Instagram" width={110} height={35} />
                            </a>
                        </Link>
                    </div>
                    <div>
                        <Input
                            icon={<IconSearch />}
                            variant="filled"
                            placeholder="Search"
                            radius="sm"
                            size="md"
                        />
                    </div>
                    <ul className={classes.menu}>
                        {links.map((link, index) => (
                            <li key={index} className={classes.menuList}>
                                <Tooltip label={link.title} position="bottom">
                                    <Link href="/">
                                        <a className={classes.menuLink}>
                                            <link.icon size="30" />
                                        </a>
                                    </Link>
                                </Tooltip>
                            </li>
                        ))}
                        <li>
                            <Tooltip label="Dark/Light" position="bottom">
                                <ActionIcon
                                    variant="outline"
                                    color={dark ? 'yellow' : 'blue'}
                                    onClick={() => toggleColorScheme()}
                                    title="Toggle color scheme"
                                >
                                    {dark ? <IconBrightnessDown size={24} /> : <IconMoon size={24} />}
                                </ActionIcon>
                            </Tooltip>

                        </li>
                        <li>
                            <Avatar component='a' href="/" src={user?.profile_picture} color='gray[5]' radius="xl" size={40} />
                        </li>
                    </ul>
                </Group>
            </Container>
        </header>
    )
}

export default Header