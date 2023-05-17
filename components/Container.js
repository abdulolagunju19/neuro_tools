import React from 'react'

import { Flex, Divider, Center } from '@chakra-ui/react'

import NavBar from './NavBar'
import Footer from './Footer'

const Container = ({ children }) => {
    
    return (
        <>
            <Flex justifyContent="center" m={5}>
                <NavBar/>
            </Flex>
            <Flex justifyContent="center">
                { children }
            </Flex>
            <Center>
                <Divider py={3} w='50%' />
            </Center>
            <Footer />
        </>
  )
}

export default Container