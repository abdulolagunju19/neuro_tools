import React from 'react'
import { Text, Box, Flex, Heading, Link } from '@chakra-ui/react'

import Container from '../components/Container'
const jobs = ({ job }) => {
    return (
        <Container>
            <Flex maxW={700} m={5} flexDir="column" justifyContent="center">
                <Heading py={5} as='h3' size='lg'>Find Neuroscience and Tech Jobs Here!</Heading>
                <Flex>
                <div>
                    {job.map((job, index) => (
                            <Box key={index} p={3} m={5} borderWidth='1px' borderRadius='lg' overflow='hidden'>
                                <Text fontWeight="bold" p={3}>{job.title}</Text>
                                {!!job.location && <Text p={3}>{job.location}</Text>}
                                <Link href={job.link} isExternal><Text p={3}>Link</Text></Link>
                            </Box>
                    ))}
                </div>
                </Flex>
            </Flex>
        </Container>
    )
}

export async function getServerSideProps () {
    const res = await fetch("https://www.remotefrontendjobs.com/api/jobs?offset=20&limit=10&query=&onlyWithSalary=false")
    const data = await res.json();
    
    if (!data) {
        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        }
    }

    var job = data.pageProps.jobs;

    console.log(job)
    return{
        props:{
            job
        }
    }
}

export default jobs
