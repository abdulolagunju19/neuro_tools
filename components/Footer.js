import React from 'react';

import { IconButton, Link, Spacer, Button, HStack } from '@chakra-ui/react';
import { GoMarkGithub } from 'react-icons/go';
import { FaHome, FaNewspaper } from 'react-icons/fa';
import { GrScorecard } from 'react-icons/gr'; 
import { GiReceiveMoney, GiArchiveResearch } from 'react-icons/gi'; 
import { FiPhoneCall } from 'react-icons/fi';

const Footer = () => {
  return (
    <HStack spacing={20} py={[0, 2, 4]} justify="center">
        <HStack>
            <Link href='/' style={{ textDecoration: 'none' }}>
                <IconButton
                    variant="ghost"
                    icon={ <FaHome/> }
                />
            </Link> 
            <Link href='/Course' style={{ textDecoration: 'none' }}>
                <IconButton
                    variant="ghost"
                    icon={ <GiArchiveResearch/> }
                />
            </Link>
            <Link href='/Quiz' style={{ textDecoration: 'none' }}>
                <IconButton
                    variant="ghost"
                    icon={ <GrScorecard/> }
                />
            </Link>
            <Link href='/News' style={{ textDecoration: 'none' }}>
                <IconButton
                    variant="ghost"
                    icon={ <FaNewspaper/> }
                />
            </Link>
            <Link href='/Jobs' style={{ textDecoration: 'none' }}>
                <IconButton
                    variant="ghost"
                    icon={ <GiReceiveMoney/> }
                />
            </Link>
            <Link href='/Contact' style={{ textDecoration: 'none' }}>
                <IconButton
                    variant="ghost"
                    icon={ <FiPhoneCall/> }
                />
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

export default Footer;