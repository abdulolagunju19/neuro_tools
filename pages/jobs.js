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

const Jobs = ({ albertaJobCenter, jobOffers }) => {
    const { data } = albertaJobCenter
    const { jobs } = jobOffers

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
                    {jobs.map((job, index) => (
                            <Box key={index} p={3} m={5} borderWidth='1px' borderRadius='lg' overflow='hidden' width='100%'>
                                <Text fontWeight="bold" p={3}>{job.jobtitle}</Text>
                                <Text fontWeight="bold" p={3}>Company: {job.company}</Text>
                                <Image 
                                    src='/Profile-data-bro.png'
                                    alt='Neuroscience Image' 
                                    boxSize='300px'
                                    objectFit='cover'
                                    fallbackSrc='/brain.gif'
                                />
                                <Text p={3}>Published At: {job.created_at}</Text>
                                <Text p={3}>City: {job.city}</Text>
                                <Text p={3}>Number of Applicants: {job.applicants}</Text>
                                <Accordion allowToggle mt={3}>
                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <Box flex='1' textAlign='left'>
                                                        Description
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                {job.fulldescription}
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

    try{
        const [albertaJobCenterRes, jobOffersRes] = await Promise.all([
        fetch("https://www.albertajobcentre.ca/api/v1.1/public/jobs?page=1&q=scientist"), 
        fetch("https://careers.joboffer.ca/api/search?page=0&subsystem_code=eco&city=alberta")
      ]);
      const [albertaJobCenter, jobOffers] = await Promise.all([
        albertaJobCenterRes.json(), 
        jobOffersRes.json()
      ]);
    } catch (error){
        console.error('Error fetching data:', error);
    }
    

      return { props: { albertaJobCenter, jobOffers } };
}

export default Jobs
