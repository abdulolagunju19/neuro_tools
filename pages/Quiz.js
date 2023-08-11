import React, { useState } from 'react';

import { useRouter } from 'next/router';

import { 
    Flex, 
    Text, 
    Heading, 
    VStack, 
    Box,  
    FormControl, 
    Input, 
    Button, 
    Spacer, 
    HStack,
    Center,
    useToast,
    SimpleGrid, 
    OrderedList,
    ListItem, 
    Link
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

import { supabase } from '../utils/supabaseClient';

import Container from '../components/Container';

const Quiz = ({ questions }) => {

    //quiz functionality
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    //form to input question
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [question, setQuestion] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [choiceA, setChoiceA] = useState('');
    const [choiceB, setChoiceB] = useState('');
    const [choiceC, setChoiceC] = useState('');
    const [choiceD, setChoiceD] = useState('');

    const router = useRouter();
    const toast = useToast();

    const handleSubmit = async () => {
        const { data, error } = await supabase
            .from('questions')
            .upsert({ 
                first_name: firstName, 
                last_name: lastName, 
                question: question, 
                correct_answer: correctAnswer, 
                email: email, 
                choiceA: choiceA, 
                choiceB: choiceB, 
                choiceC: choiceC, 
                choiceD: choiceD 
            });
        
        error ? console.log(error) : console.log(data);
        router.reload();
    }

    const handleDelete = async (quizId) => {
        const { data, error } = await supabase
            .from('questions')
            .delete().eq('id', quizId);
    
        error ? console.log(error) : console.log(data);
        router.reload();
    }

    const handleMultipleChoice = async (choice, quizId) => {
        //fetch correct answer
        const { data, error } = await supabase
            .from('questions')
            .select('correct_answer')
            .eq('id', quizId);
        
        //if answer is correct, increase score by 1
        if(choice === data[0].correct_answer){
            toast({
                title: 'Correct!',
                status: 'success',
                duration: 650,
                isClosable: true,
              });
              setScore(score +1);
        } else{
            toast({
                title: 'Incorrect!',
                status: 'error',
                duration: 650,
                isClosable: true,
              });
        }

        //if there are still questions left, move to next question, otherwise show the score
        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    }

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
    }

    return (
        <Container>
            <Flex maxW={700} m={5} flexDir="column" justifyContent="center">
                <VStack justifyContent="center">       
                <Heading>Multiple Choice Test</Heading>             
                    <Box width='100%'>
                        <Center>
                            {showScore ? (
                                <Box p={3} m={5} overflow='hidden' width='100%'>
                                    <Heading mb={5}>
                                        Results: You scored {score} out of {questions.length}!
                                    </Heading>
                                    
                                    <Button onClick={resetQuiz}>Reset Quiz</Button>
                                </Box>
                                ) : (
                                    <Box p={3} m={5} borderWidth='1px' borderRadius='lg' overflow='hidden' width='100%'>
                                        <Text fontSize='xl' fontWeight="bold" as='ins'>Question {currentQuestion + 1}</Text>
                                        <Text fontSize='xl' fontWeight="bold">{questions[currentQuestion].question}</Text>
                                        <Flex m={5} direction="column" alignItems="start">
                                                <Button onClick={() => handleMultipleChoice(questions[currentQuestion].choiceA, questions[currentQuestion].id)} variant='ghost'>A: {questions[currentQuestion].choiceA}</Button>
                                                <Button onClick={() => handleMultipleChoice(questions[currentQuestion].choiceB, questions[currentQuestion].id)} variant='ghost'>B: {questions[currentQuestion].choiceB}</Button>
                                                <Button onClick={() => handleMultipleChoice(questions[currentQuestion].choiceC, questions[currentQuestion].id)} variant='ghost'>C: {questions[currentQuestion].choiceC}</Button>
                                                <Button onClick={() => handleMultipleChoice(questions[currentQuestion].choiceD, questions[currentQuestion].id)} variant='ghost'>D: {questions[currentQuestion].choiceD}</Button>
                                        </Flex>
                                        <HStack>
                                            <Spacer />
                                            <Button align="right" type="submit" onClick={() => handleDelete(questions[currentQuestion].id)} rightIcon={<CloseIcon />} >Delete</Button>
                                        </HStack>
                                    </Box>
                                )
                            }
                        </Center>
                    </Box>
                    <Box p={3} m={5} borderWidth='1px' borderRadius='lg' overflow='hidden' w='100%'>
                        <Heading p={5} as='h3' size='lg'>
                            Add Questions to Help Other Students!
                        </Heading>
                        <FormControl>
                            <SimpleGrid columns={2} spacing={10}>
                                <Input 
                                    placeholder="First Name" 
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    variant='filled'
                                    width="100%"
                                />
                                <Input 
                                    placeholder="Last Name" 
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    variant='filled'
                                />
                                <Input 
                                    placeholder="Email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    variant='filled'
                                />
                                <Input 
                                    placeholder="Question"
                                    value={question}
                                    onChange={(e) => setQuestion(e.target.value)}
                                    variant='filled'
                                />
                                <Input 
                                    placeholder="Choice A"
                                    value={choiceA}
                                    onChange={(e) => setChoiceA(e.target.value)}
                                    variant='filled'
                                />
                                <Input 
                                    placeholder="Choice B"
                                    value={choiceB}
                                    onChange={(e) => setChoiceB(e.target.value)}
                                    variant='filled'
                                />
                                <Input 
                                    placeholder="Choice C"
                                    value={choiceC}
                                    onChange={(e) => setChoiceC(e.target.value)}
                                    variant='filled'
                                />
                                <Input 
                                    placeholder="Choice D"
                                    value={choiceD}
                                    onChange={(e) => setChoiceD(e.target.value)}
                                    variant='filled'
                                />
                                <Input 
                                    placeholder="Correct Answer"
                                    value={correctAnswer}
                                    onChange={(e) => setCorrectAnswer(e.target.value)}
                                    variant='filled'
                                />
                                <Button 
                                    type="submit"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </Button>
                            </SimpleGrid>
                        </FormControl>
                    </Box>
                </VStack>
                <OrderedList p={3}>
                    <Heading p={3} size="md">For more questions:</Heading>
                    <Link href='https://global.oup.com/uk/orc/pharmacy/ifp_therapeutics/student/mcqs/ch05/' isExternal>
                        <ListItem p={3}>
                            Neuroscience and Drugs
                        </ListItem>
                    </Link>
                    <Link href='https://www.proprofs.com/quiz-school/story.php?title=neuroscience-behavior-practice-multiple-choice' isExternal>
                        <ListItem p={3}>
                            Brain and Behaviour
                        </ListItem>
                    </Link>
                    <Link href='https://michaeldmann.net/The%20Nervous%20System%20In%20Action.html' isExternal>
                        <ListItem p={3}>
                            The Nervous System V1
                        </ListItem>
                    </Link>
                    <Link href='https://study.sagepub.com/banyard3e/student-resources/chapter-10/multiple-choice-questions' isExternal>
                        <ListItem p={3}>
                            The Nervous System V2
                        </ListItem>
                    </Link>
                    <Link href='https://highered.mheducation.com/sites/0072421975/student_view0/chapter17/multiple_choice_quiz.html' isExternal>
                        <ListItem p={3}>
                            Basic Neuroscience
                        </ListItem>
                    </Link>
                    <Link href='https://www.sanfoundry.com/biology-online-quiz-aiims-exam/' isExternal>
                        <ListItem p={3}>
                            The Visual System
                        </ListItem>
                    </Link>
                </OrderedList>
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

export default Quiz;
