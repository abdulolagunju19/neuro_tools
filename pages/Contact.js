import React from 'react';

import Image from 'next/image';

import { IconButton, Link, HStack, VStack, Text } from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons'

import { FiLinkedin, FiMail, FiGithub, FiFacebook, FiTwitter } from "react-icons/fi";

import { InlineWidget } from "react-calendly";

import Container from '../components/Container';

const Contact = () => {
    return (
        <Container>
            <VStack>
                <Text as='b' fontSize='xl' p={4}>Thanks for visiting my site! Contact me at this email: olagunju(at)ualberta.ca</Text>
                <Image width="400px" height="400px" src="/images/coolbrain.gif"/>
                <Text as='b' fontSize='xl' p={4}>Follow Me!</Text>
                <ArrowDownIcon boxSize={10} />
                <HStack py={1}>
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
                <Text as='b' fontSize='xl' p={4}>Set up a meeting!</Text>
                <ArrowDownIcon boxSize={10} />
                <InlineWidget styles={{height:"50em"}} url="https://calendly.com/blandsentence/phone-screen" />
            </VStack>
        </Container>
    )
}

export default Contact;
