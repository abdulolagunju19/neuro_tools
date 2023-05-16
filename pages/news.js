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

const News = ({ results }) => {

    return (
        <Container>
            <Flex maxW={700} m={5} flexDir="column" justifyContent="center">
                <Heading py={5} as='h3' size='lg'>Find Neuroscience News Here!</Heading>
                <Flex>
                    <div>
                        {results.map((result, index) => (
                                <Box key={index} p={3} m={5} borderWidth='1px' borderRadius='lg' overflow='hidden'>
                                    <Link href={result.link} isExternal>
                                        <Text p={1} fontSize='lg' fontWeight='bold'>{result.title}</Text>
                                    </Link>
                                    <Text p={3}>{result.description}</Text>
                                    <Center>
                                    <Image 
                                        src={result.image_url}
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
                                                {result.content}
                                                <br/>
                                                <Text>Published At: {result.pubDate}</Text>
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
    const res = await fetch(`https://newsdata.io/api/1/news?apikey=${process.env.NEXT_PUBLIC_NEWS_KEY}&q=neuroscience&language=en`);
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

export default News