import React, { useState } from 'react'

import Container from '../components/Container'
import MultipleChoice from '../components/MultipleChoice'
import { supabase } from '../utils/supabaseClient'

import { 
    Flex, 
    Text, 
    Heading, 
    VStack, 
    Box,  
    FormControl, 
    FormLabel, 
    Input, 
    Button, 
    Spacer, 
    HStack,
    Center
} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'


import { useRouter } from 'next/router'

const Quiz = ({ questions }) => {
    console.log(questions)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const [id, setID] = useState('')
    const [active, setActive] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) => {
        const { data, error } = await supabase
            .from('questions')
            .upsert([{ question: question, answer: answer, name: name, email: email }])
        
        error ? console.log(error) : console.log(data)
        router.reload()
    }

    const handleDelete = async (quizId) => {
        const { data, error } = await supabase
            .from('questions')
            .delete().eq('id', quizId);
    
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
                                <Center>
                                    <Box key={question.id} p={3} m={5} borderWidth='1px' borderRadius='lg' overflow='hidden' width='100%'>
                                        <Text key={question.id} fontSize='xl' fontWeight="bold" as='ins'>Question {question.id}</Text>
                                        <Text key={question.id} fontSize='xl' fontWeight="bold">{question.question}</Text>
                                        <Flex key={question.id} m={5} direction="column" alignItems="start">
                                                <Button key={question.id} variant='ghost'>A: {question.choiceA}</Button>
                                                <Button key={question.id} variant='ghost'>B: {question.choiceB}</Button>
                                                <Button key={question.id} variant='ghost'>C: {question.choiceC}</Button>
                                                <Button key={question.id} variant='ghost'>D: {question.choiceD}</Button>
                                        </Flex>
                                        <HStack key={question.id}>
                                            <Spacer />
                                            <Button key={question.id} align="right" type="submit" onClick={() => handleDelete(question.id)} rightIcon={<CloseIcon />} >Delete</Button>
                                        </HStack>
                                    </Box>
                                </Center>
                            )
                        }
                    </Box>
                    </Flex>
                </VStack>
            </Flex>
        </Container>
    )
}

export const getServerSideProps = async () => {
    // Query all questions
    const { data: questions, error } = await supabase.from('questions').select('*');
  
    if (error) {
      // Return 404 response.
      // No questions found or something went wrong with the query
      return {
        notFound: true,
      }
    }
  
    return {
      props: {
        questions
      }
    }
}

export default Quiz
