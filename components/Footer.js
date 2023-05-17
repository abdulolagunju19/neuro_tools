import React from 'react'

import { IconButton, Link, Spacer, Button, HStack } from '@chakra-ui/react'
import { GoMarkGithub } from "react-icons/go"

const Footer = () => {
  return (
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
  )
}

export default Footer