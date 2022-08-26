import React from 'react'
import { Text, Box, Flex, Heading, Link, Image } from '@chakra-ui/react'

import Container from '../components/Container'
const jobs = ({ data, jobs }) => {
  return (
    <Container>
            <Flex maxW={700} m={5} flexDir="column" justifyContent="center">
                <Heading py={5} as='h3' size='lg'>Find Neuroscience and Tech Jobs Here!</Heading>
                <Flex>
                <div>
                    {data.map((data, index) => (
                            <Box key={index} p={3} m={5} borderWidth='1px' borderRadius='lg' overflow='hidden'>
                                <Link href={`https://albertajobcentre.ca/${data.url}`} isExternal><Text fontWeight="bold" p={3}>{data.title}</Text></Link>
                                <Text fontWeight="bold" p={3}>Company: {data.employer.name}</Text>
                                <Image 
                                    src='/Profile-data-bro.png'
                                    alt='Neuroscience Image' 
                                    boxSize='300px'
                                    objectFit='cover'
                                    fallbackSrc='/brain.gif'
                                />
                                <Text p={3}>Published At: {data.publishDate}</Text>
                            </Box>
                    ))}
                    {jobs.map((jobs, index) => (
                            <Box key={index} p={3} m={5} borderWidth='1px' borderRadius='lg' overflow='hidden'>
                                <Link href={jobs.link} isExternal><Text fontWeight="bold" p={3}>{jobs.jobtitle}</Text></Link>
                                <Text fontWeight="bold" p={3}>Company: {jobs.company}</Text>
                                <Image 
                                    src='/Profile-data-bro.png'
                                    alt='Neuroscience Image' 
                                    boxSize='300px'
                                    objectFit='cover'
                                    fallbackSrc='/brain.gif'
                                />
                                <Text p={3}>Published At: {jobs.created_at}</Text>
                                <Text p={3}>City: {jobs.city}</Text>
                                <Text p={3}>Number of Applicants: {jobs.applicants}</Text>
                                <Text p={3}>Description: {jobs.fulldescription}</Text>
                            </Box>
                    ))}
                </div>
                </Flex>
            </Flex>
        </Container>
  )
}

export async function getServerSideProps () {

    const res = await fetch("https://www.albertajobcentre.ca/api/v1.1/public/jobs?page=1&q=scientist&_=1660949950541")
    const results = await res.json();
    
    const res_2 = await fetch("https://careers.joboffer.ca/api/search?page=0&subsystem_code=eco&city=alberta")
    const results_2 = await res_2.json()
    
    if (!results) {
        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        }
    }

    const { data } = results; 

    const { jobs } = results_2;
    


    return{
        props:{
            data, 
            jobs
        }
    }
}

export default jobs
