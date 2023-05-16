import React from 'react'

import { Text, Box, Flex, Heading, Link, Image } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'

import Container from '../components/Container'

const Jobs = ({ albertaJobCenter }) => {
    const { data } = albertaJobCenter

    return (
    <Container>
            <Flex maxW={700} m={5} flexDir="column" justifyContent="center">
                <Heading py={5} as='h3' size='lg'>Find Neuroscience and Tech Jobs Here!</Heading>
                <Flex>
                <div>
                    {data.map((datum, index) => (
                            <Box key={index} p={3} m={5} borderWidth='1px' borderRadius='lg' overflow='hidden' width='100%'>
                                <Link href={`https://albertajobcentre.ca/${datum.url}`} isExternal><Text fontWeight="bold" p={3}>{datum.title}</Text></Link>
                                <Text fontWeight="bold" p={3}>Company: {datum.employer.name}</Text>
                                <Image 
                                    src='/Profile-data-bro.png'
                                    alt='Neuroscience Image' 
                                    boxSize='300px'
                                    objectFit='cover'
                                    fallbackSrc='/brain.gif'
                                />
                                <Text p={3}>Published At: {datum.publishDate}</Text>
                            </Box>
                    ))}
                </div>
                </Flex>
            </Flex>
        </Container>
    )
}

export async function getServerSideProps () {
    const [ albertaJobCenterRes ] = await Promise.all([
        fetch("https://www.albertajobcentre.ca/api/v1.1/public/jobs?page=1&q=student")
    ]);
    const [ albertaJobCenter ] = await Promise.all([
    albertaJobCenterRes.json()
    ]);

    return { props: { albertaJobCenter } };
}

export default Jobs
