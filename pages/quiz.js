import React from 'react'
import { useState } from 'react'

import Container from '../components/Container'
import { supabase } from '../utils/supabaseClient'
import { Flex, Text, Heading, VStack, Box } from '@chakra-ui/react'
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react'

import { useRouter } from 'next/router'

const quiz = ({ questions }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const [id, setID] = useState('')

    const router = useRouter();

    const handleSubmit = async (e) => {
        const { data, error } = await supabase
            .from('questions')
            .upsert([{ question: question, answer: answer, name: name, email: email }])
        
        error ? console.log(error) : console.log(data)
        router.reload()
    }
    const handleDelete = async (e) => {
        const { data, error } = await supabase
            .from('questions')
            .delete().eq('id', id);
    
        error ? console.log(error) : console.log(data)
        router.reload()
    }

    return (
        <Container>
            <Flex maxW={700} m={5} flexDir="column" justifyContent="center">
                <VStack justifyContent="center">
                    <Heading pt={5} pb={3} as='h3' size='lg'>
                        Add Questions to Help Other Students!
                    </Heading>
                    <Box p={3} m={5} borderWidth='1px' borderRadius='lg' overflow='hidden' w='100%'>
                        <FormControl>
                            <FormLabel>Add a Question!</FormLabel>
                            <FormLabel>Your Name</FormLabel>
                            <Input 
                                placeholder="Name" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                variant='filled'
                            />
                            <FormLabel pt={3}>Your Email</FormLabel>
                            <Input 
                                placeholder="Email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                variant='filled'
                            />
                            <FormLabel pt={3}>Your Question</FormLabel>
                            <Input 
                                placeholder="Question"
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                variant='filled'
                            />
                            <FormLabel pt={3}>Your Answer</FormLabel>
                            <Input 
                                placeholder="Answer"
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                                variant='filled'
                            />
                            <Button 
                                mt={3} 
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Submit
                            </Button>
                        </FormControl>
                    </Box>
                    <Box p={3} m={5} borderWidth='1px' borderRadius='lg' overflow='hidden' w='100%'>
                        <FormControl pt={3}>
                            <FormLabel>Remove a Question!</FormLabel>
                            <FormLabel>The Question ID: </FormLabel>
                            <Input
                                placeholder="ID" 
                                value={id}
                                onChange={(e) => setID(e.target.value)}
                                variant='filled'
                            />
                            <Button 
                                mt={3} 
                                type="submit"
                                onClick={handleDelete}
                            >
                                Delete
                            </Button>
                        </FormControl>
                    </Box>
                    <Heading pt={5} pb={3} as='h3' size='lg'>
                        Questions:
                    </Heading>
                    <Flex>
                    <Box>
                        {
                            (questions).map((question) =>
                                <Box key={question.id} p={3} m={5} borderWidth='1px' borderRadius='lg' overflow='hidden'>
                                    <Text key={question.id} pb={3} fontWeight="bold">Question: {question.question}</Text>
                                    <Text key={question.id} pb={5}>Answer:  {question.answer}</Text>
                                    <Text key={question.id} pb={5}>ID Number:  {question.id}</Text>
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