import React from 'react'

import { IconButton, Link, HStack, VStack, Text } from '@chakra-ui/react'

import { FiLinkedin, FiMail, FiGithub, FiFacebook, FiTwitter } from "react-icons/fi"

import { InlineWidget } from "react-calendly";

import Container from '../components/Container'

const Contact = () => {
    return (
        <Container>
            <VStack>
                <Text as='b' fontSize='2xl' p={5}>Thanks for visiting my site! Contact me at this email: olagunju(at)ualberta.ca</Text>
                <HStack pb={1}>
                <Link href="https://github.com/abdulolagunju19" isExternal>
                    <IconButton
                        variant="ghost"
                        icon={ <FiLinkedin/> }
                        size='lg'
                    />
                </Link>
                <Link href="https://github.com/abdulolagunju19" isExternal>
                    <IconButton
                        variant="ghost"
                        icon={ <FiMail/> }
                        size='lg'
                    />
                </Link>
                <Link href="https://github.com/abdulolagunju19" isExternal>
                    <IconButton
                        variant="ghost"
                        icon={ <FiGithub/> }
                        size='lg'
                    />
                </Link>
                <Link href="https://github.com/abdulolagunju19" isExternal>
                    <IconButton
                        variant="ghost"
                        icon={ <FiFacebook/> }
                        size='lg'
                    />
                </Link>
                <Link href="https://github.com/abdulolagunju19" isExternal>
                    <IconButton
                        variant="ghost"
                        icon={ <FiTwitter/> }
                        size='lg'
                    />
                </Link>
                </HStack>
                <InlineWidget styles={{height:"50em", width: "70em"}} url="https://calendly.com/blandsentence/phone-screen" />
            </VStack>
        </Container>
    )
}

export default Contact
