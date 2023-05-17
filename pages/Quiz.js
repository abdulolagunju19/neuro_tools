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
    Center,
    useToast
} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'


import { useRouter } from 'next/router'

const Quiz = ({ questions }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const [id, setID] = useState('')

    const router = useRouter();
    const toast = useToast();

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

    const handleMultipleChoice = async (choice, quizId) => {
        const { data, error } = await supabase
            .from('questions')
            .select('correct_answer')
            .eq('id', quizId)
        
        if(choice === data[0].correct_answer){
            toast({
                title: 'Correct!',
                status: 'success',
                duration: 1000,
                isClosable: true,
              })
        } else{
            toast({
                title: 'Incorrect!',
                status: 'success',
                duration: 1000,
                isClosable: true,
              })
        }
    }

    return (
        <Container>
            <Flex maxW={700} m={5} flexDir="column" justifyContent="center">
                <VStack justifyContent="center">       
                <Heading>Multiple Choice Test</Heading>             
                    <Box>
                        {
                            (questions).map((question) =>
                                <>
                                    <Center key={question.id}>
                                        <Box p={3} m={5} borderWidth='1px' borderRadius='lg' overflow='hidden' width='100%'>
                                            <Text fontSize='xl' fontWeight="bold" as='ins'>Question {question.id}</Text>
                                            <Text fontSize='xl' fontWeight="bold">{question.question}</Text>
                                            <Flex m={5} direction="column" alignItems="start">
                                                    <Button onClick={() => handleMultipleChoice(question.choiceA, question.id)} variant='ghost'>A: {question.choiceA}</Button>
                                                    <Button onClick={() => handleMultipleChoice(question.choiceB, question.id)} variant='ghost'>B: {question.choiceB}</Button>
                                                    <Button onClick={() => handleMultipleChoice(question.choiceC, question.id)} variant='ghost'>C: {question.choiceC}</Button>
                                                    <Button onClick={() => handleMultipleChoice(question.choiceD, question.id)} variant='ghost'>D: {question.choiceD}</Button>
                                            </Flex>
                                            <HStack>
                                                <Spacer />
                                                <Button align="right" type="submit" onClick={() => handleDelete(question.id)} rightIcon={<CloseIcon />} >Delete</Button>
                                            </HStack>
                                        </Box>
                                    </Center>
                                </>
                            )
                        }
                    </Box>
                    <Heading pt={5} pb={3} as='h3' size='lg'>
                        Add Questions to Help Other Students!
                    </Heading>
                    <Box p={3} m={5} borderWidth='1px' borderRadius='lg' overflow='hidden' w='100%'>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input 
                                placeholder="Name" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                variant='filled'
                            />
                            <FormLabel pt={3}>Email</FormLabel>
                            <Input 
                                placeholder="Email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                variant='filled'
                            />
                            <FormLabel pt={3}>Question</FormLabel>
                            <Input 
                                placeholder="Question"
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                variant='filled'
                            />
                            <FormLabel pt={3}>Answer</FormLabel>
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
