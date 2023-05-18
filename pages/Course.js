import React from 'react'

import { Flex, Heading, VStack, Text, Box, Link } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
  import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
  } from '@chakra-ui/react'

import Container from '../components/Container'

import { PDFObject } from 'react-pdfobject'

const Course = () => {
    return (
        <Container>
            <VStack maxW={700} m={5} justifyContent="center" >
                <Heading py={5} as='h3' size='lg'>
                Get Started
                </Heading>
                <Text pb={5}>I have collected open-source resources that simulate an undergraduate neuroscience education. Over here, find resources to support your learning.</Text>
                <Accordion allowToggle minW={700}>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    Chapter 1: Neuron Structure and Function
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        <Box id="pdf1" borderWidth='5px' borderRadius={5} mt={5}>
                            <embed src="/Foundations-of-Neuroscience-1-96.pdf" width="700" height="800"></embed> 
                        </Box>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    Chapter 2: Neuronal Communication
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        <Box id="pdf2" borderWidth='5px' borderRadius={5} mt={5} > 
                            <embed src="/Foundations-of-Neuroscience-97-176.pdf" width="700" height="800"></embed> 
                        </Box>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    Chapter 3: Nervous System Organization
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        <Box id="pdf3" borderWidth='5px' borderRadius={5} mt={5}>
                            <embed src="/Foundations-of-Neuroscience-177-192.pdf" width="700" height="800"></embed>
                        </Box>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    Chapter 4: Sensory Systems
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        <Box id="pdf4" borderWidth='5px' borderRadius={5} mt={5}>
                            <embed src="/Foundations-of-Neuroscience-193-272.pdf" width="700" height="800"></embed>
                        </Box>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    Chapter 5: Motor System
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        <Box id="pdf5" borderWidth='5px' borderRadius={5} mt={5}>
                            <embed src="/Foundations-of-Neuroscience-273-324.pdf" width="700" height="800"></embed>
                        </Box>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    Part 6: Behaviour
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        <Box id="pdf6" borderWidth='5px' borderRadius={5} mt={5}>
                            <embed src="/Foundations-of-Neuroscience-325-372.pdf" width="700" height="800"></embed>
                        </Box>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    Part 7: Additional Materials
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        <Box id="pdf7" borderWidth='5px' borderRadius={5} mt={5}>
                            <embed src="/Foundations-of-Neuroscience-373-449.pdf" width="700" height="800"></embed>
                        </Box>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                <OrderedList p={3}>
                    <Link href='https://chakra-ui.com' isExternal>
                        <ListItem p={3}>
                            https://neurowiki.case.edu/wiki/Course_syllabus
                        </ListItem>
                    </Link>
                    <Link href='https://chakra-ui.com' isExternal>
                        <ListItem p={3}>
                            https://brushingupscience.com/
                        </ListItem>
                    </Link>
                    <Link href='https://chakra-ui.com' isExternal>
                        <ListItem p={3}>
                            https://aaltoscicomp.github.io/python-for-scicomp/
                        </ListItem>
                    </Link>
                    <Link href='https://chakra-ui.com' isExternal>
                        <ListItem p={3}>
                            https://michaeldmann.net/The%20Nervous%20System%20In%20Action.html
                        </ListItem>
                    </Link>
                    <Link href='https://chakra-ui.com' isExternal>
                        <ListItem p={3}>
                            https://neurowiki.case.edu/wiki/Course_syllabus
                        </ListItem>
                    </Link>
                    <Link href='https://chakra-ui.com' isExternal>
                        <ListItem p={3}>
                            https://brushingupscience.com/
                        </ListItem>
                    </Link>
                    <Link href='https://chakra-ui.com' isExternal>
                        <ListItem p={3}>
                            https://aaltoscicomp.github.io/python-for-scicomp/
                        </ListItem>
                    </Link>
                    <Link href='https://chakra-ui.com' isExternal>
                        <ListItem p={3}>
                            https://michaeldmann.net/The%20Nervous%20System%20In%20Action.html
                        </ListItem>
                    </Link>
                    <Link href='https://chakra-ui.com' isExternal>
                        <ListItem p={3}>
                            https://neurowiki.case.edu/wiki/Course_syllabus
                        </ListItem>
                    </Link>
                    <Link href='https://chakra-ui.com' isExternal>
                        <ListItem p={3}>
                            https://brushingupscience.com/
                        </ListItem>
                    </Link>
                    <Link href='https://chakra-ui.com' isExternal>
                        <ListItem p={3}>
                            https://aaltoscicomp.github.io/python-for-scicomp/
                        </ListItem>
                    </Link>
                    <Link href='https://chakra-ui.com' isExternal>
                        <ListItem p={3}>
                            https://michaeldmann.net/The%20Nervous%20System%20In%20Action.html
                        </ListItem>
                    </Link>
                    <Link href='https://chakra-ui.com' isExternal>
                        <ListItem p={3}>
                            https://neurowiki.case.edu/wiki/Course_syllabus
                        </ListItem>
                    </Link>
                    <Link href='https://chakra-ui.com' isExternal>
                        <ListItem p={3}>
                            https://brushingupscience.com/
                        </ListItem>
                    </Link>
                    <Link href='https://chakra-ui.com' isExternal>
                        <ListItem p={3}>
                            https://aaltoscicomp.github.io/python-for-scicomp/
                        </ListItem>
                    </Link>
                    <Link href='https://chakra-ui.com' isExternal>
                        <ListItem p={3}>
                            https://michaeldmann.net/The%20Nervous%20System%20In%20Action.html
                        </ListItem>
                    </Link>
                    <Link href='https://chakra-ui.com' isExternal>
                        <ListItem p={3}>
                            https://neurowiki.case.edu/wiki/Course_syllabus
                        </ListItem>
                    </Link>
                    <Link href='https://chakra-ui.com' isExternal>
                        <ListItem p={3}>
                            https://brushingupscience.com/
                        </ListItem>
                    </Link>
                    <Link href='https://chakra-ui.com' isExternal>
                        <ListItem p={3}>
                            https://aaltoscicomp.github.io/python-for-scicomp/
                        </ListItem>
                    </Link>
                    <Link href='https://chakra-ui.com' isExternal>
                        <ListItem p={3}>
                            https://michaeldmann.net/The%20Nervous%20System%20In%20Action.html
                        </ListItem>
                    </Link>
                    <Link href='https://chakra-ui.com' isExternal>
                        <ListItem p={3}>
                            https://neurowiki.case.edu/wiki/Course_syllabus
                        </ListItem>
                    </Link>
                    <Link href='https://chakra-ui.com' isExternal>
                        <ListItem p={3}>
                            https://brushingupscience.com/
                        </ListItem>
                    </Link>
                    <Link href='https://chakra-ui.com' isExternal>
                        <ListItem p={3}>
                            https://aaltoscicomp.github.io/python-for-scicomp/
                        </ListItem>
                    </Link>
                    <Link href='https://chakra-ui.com' isExternal>
                        <ListItem p={3}>
                            https://michaeldmann.net/The%20Nervous%20System%20In%20Action.html
                        </ListItem>
                    </Link>
                </OrderedList>
            </VStack>
        </Container>
    )
}

export default Course
