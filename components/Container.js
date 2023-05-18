import React from 'react'

import { Flex, Divider, Center, Spacer } from '@chakra-ui/react'

import NavBar from './NavBar'
import Footer from './Footer'

const Container = ({ children }) => {
    
    return (
        <>
            <Flex justify="center" m={4} >
                <NavBar/>
            </Flex>
            <Flex 
                justify="center"
            >
                { children }
            </Flex>
            <Center>
                <Divider py={[0, 2, 4]} w='50%' />
            </Center>
            <Footer />
        </>
  )
}

export default Container