import React from 'react'
import { Link, Spacer, Button, Heading, HStack, IconButton, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
    <HStack spacing={20}>
        <Link href='/' style={{ textDecoration: 'none' }}>
            <Button variant="ghost">
                <Heading as='h4' size='md'>
                    Neuro*Discite
                </Heading>
            </Button>
        </Link>
        <HStack>
            <Link href='/' style={{ textDecoration: 'none' }}>
                <Button variant="ghost" size='md'>
                    Home
                </Button>
            </Link>
            <Link href='/Course' style={{ textDecoration: 'none' }}>
                <Button variant="ghost" size='md'>
                    Course
                </Button>
            </Link> 
            <Link href='/Quiz' style={{ textDecoration: 'none' }}>
                <Button variant="ghost" size='md'>
                    Quiz
                </Button>
            </Link>
            <Link href='/News' style={{ textDecoration: 'none' }}>
                <Button variant="ghost" size='md'>
                    News
                </Button>
            </Link>
            <Link href='/Jobs' style={{ textDecoration: 'none' }}>
                <Button variant="ghost" size='md'>
                    Jobs
                </Button>
            </Link>
            <Link href='/Contact' style={{ textDecoration: 'none' }}>
                <Button variant="ghost" size='md'>
                    Contact
                </Button>
            </Link>
            <Spacer/>
            <IconButton
                variant="ghost"
                onClick={toggleColorMode}
                icon={colorMode === 'light' ? <MoonIcon/> : <SunIcon />}
            />
        </HStack>
    </HStack>
    )
}

export default NavBar