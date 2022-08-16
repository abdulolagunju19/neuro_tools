import React from 'react'

import { Text, Heading, Flex, Link, Image, Box, Center } from '@chakra-ui/react'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'

import Container from '../components/Container'

const news = ({ results }) => {

    return (
        <Container>
            <Flex maxW={700} m={5} flexDir="column" justifyContent="center">
                <Heading py={5} as='h3' size='lg'>Find Neuroscience News Here!</Heading>
                <Flex>
                    <div>
                        {results.map((results, index) => (
                                <Box key={index} p={3} m={5} borderWidth='1px' borderRadius='lg' overflow='hidden'>
                                    <Link href={results.link} isExternal>
                                        <Text p={1} fontSize='lg' fontWeight='bold'>{results.title}</Text>
                                    </Link>
                                    <Text p={3}>{results.description}</Text>
                                    <Center>
                                    <Image 
                                        src={results.image_url}
                                        alt='Neuroscience Image' 
                                        boxSize='300px'
                                        objectFit='cover'
                                        fallbackSrc='/brain.gif'
                                     />
                                     </Center>
                                     <Accordion allowToggle mt={3}>
                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <Box flex='1' textAlign='left'>
                                                        Content
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                {results.content}
                                                <br/>
                                                <Text>Published At: {results.pubDate}</Text>
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </Box>
                        ))}
                    </div>
                </Flex>
            </Flex>
        </Container>
    )
}

export async function getServerSideProps () {
    const res = await fetch("https://newsdata.io/api/1/news?apikey=pub_100593ce8fd2dcd7978c6f3a7ca41b79576ac&q=neuroscience");
    const data = await res.json();


    if (!data) {
        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        }
    }

    const { results } = data;

    return{
        props:{
            results
        }
    }
}

export default news