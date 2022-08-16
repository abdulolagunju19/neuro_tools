import React from 'react'

import Container from '../components/Container'
import { supabase } from '../utils/supabaseClient'
import { Flex, Text, Heading, VStack, Box } from '@chakra-ui/react'

const quiz = ({ questions }) => {
    return (
        <Container>
            <Flex maxW={700} m={5} flexDir="column" justifyContent="center">
                <VStack justifyContent="center">
                    <Heading pt={5} as='h3' size='lg'>
                        Questions
                    </Heading>
                    <Flex>
                    <Box>
                        {
                            (questions || []).map(question =>
                                <Box key={question.id} p={3} m={5} borderWidth='1px' borderRadius='lg' overflow='hidden'>
                                    <Text pb={3} fontWeight="bold">Question: {question.question}</Text>
                                    <Text pb={5}>Answer:  {question.answer}</Text>
                                </Box>
                            )
                        }
                    </Box>
                    </Flex>
                </VStack>
            </Flex>
        </Container>
    )
}

export const getServerSideProps = async (context) => {
    // Query all questions
    const { data: questions, error } = await supabase.from('questions').select();
  
    if (error) {
      // Return 404 response.
      // No questions found or something went wrong with the query
      return {
        notFound: true,
      }
    }
  
    return {
      props: {
        questions,
      }
    }
}

export default quiz