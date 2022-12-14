import React from 'react'

import { useColorMode, IconButton, VStack } from '@chakra-ui/react'
import { Flex, Box, Link, Spacer, Button, Heading, HStack, Divider, Center } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { GoMarkGithub } from "react-icons/go"

import Head from 'next/head'


const Container = ({ children }) => {
    const { colorMode, toggleColorMode } = useColorMode()
    
    return (
        <>
            <Box>
                <Flex justifyContent="center" m={5}>
                    <HStack spacing={20}>
                        <Heading as='h4' size='md'>
                            Neuro*Discite
                        </Heading>
                        <HStack>
                            <Link href='/' style={{ textDecoration: 'none' }}>
                                <Button variant="ghost" size='md'>
                                    Home
                                </Button>
                            </Link>
                            <Link href='/course' style={{ textDecoration: 'none' }}>
                                <Button variant="ghost" size='md'>
                                    Course
                                </Button>
                            </Link> 
                            <Link href='/quiz' style={{ textDecoration: 'none' }}>
                                <Button variant="ghost" size='md'>
                                    Quiz
                                </Button>
                            </Link>
                            <Link href='/news' style={{ textDecoration: 'none' }}>
                                <Button variant="ghost" size='md'>
                                    News
                                </Button>
                            </Link>
                            <Link href='/jobs' style={{ textDecoration: 'none' }}>
                                <Button variant="ghost" size='md'>
                                    Jobs
                                </Button>
                            </Link>
                            <Link href='/contact' style={{ textDecoration: 'none' }}>
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
                </Flex>
            </Box>
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
                    <Link href='/course' style={{ textDecoration: 'none' }}>
                        <Button variant="ghost" size='md'>
                            Course
                        </Button>
                    </Link>
                    <Link href='/quiz' style={{ textDecoration: 'none' }}>
                        <Button variant="ghost" size='md'>
                            Quiz
                        </Button>
                    </Link>
                    <Link href='/news' style={{ textDecoration: 'none' }}>
                        <Button variant="ghost" size='md'>
                            News
                        </Button>
                    </Link>
                    <Link href='/jobs' style={{ textDecoration: 'none' }}>
                        <Button variant="ghost" size='md'>
                            Jobs
                        </Button>
                    </Link>
                    <Link href='/contact' style={{ textDecoration: 'none' }}>
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