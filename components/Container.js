import React from 'react'

import { Flex, IconButton, Link, Spacer, Button, HStack, Divider, Center } from '@chakra-ui/react'
import { GoMarkGithub } from "react-icons/go"

import NavBar from './NavBar'


const Container = ({ children }) => {
    
    return (
        <>
            <Flex justifyContent="center" m={5}>
                <NavBar/>
            </Flex>
            <Flex
                justifyContent="center"
            >
                    { children }
            </Flex>
            <Center>
                <Divider py={3} w='50%' />
            </Center>
            <HStack spacing={20} py={5} justifyContent="center">
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
                    <Link href="https://github.com/abdulolagunju19" isExternal>
                        <IconButton
                            variant="ghost"
                            icon={ <GoMarkGithub/> }
                        />
                    </Link>
                </HStack>
            </HStack>
        </>
  )
}

export default Container