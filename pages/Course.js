import React from 'react';

import { 
    Heading, 
    VStack, 
    Text, 
    Box, 
    Link,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    ListItem,
    OrderedList
  } from '@chakra-ui/react'

import Container from '../components/Container';

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
                    <Link href='https://neurowiki.case.edu/wiki/Course_syllabus' isExternal>
                        <ListItem p={3}>
                            Neuro Course: https://neurowiki.case.edu/wiki/Course_syllabus
                        </ListItem>
                    </Link>
                    <Link href='https://brushingupscience.com/' isExternal>
                        <ListItem p={3}>
                            Science Blog: https://brushingupscience.com/
                        </ListItem>
                    </Link>
                    <Link href='https://aaltoscicomp.github.io/python-for-scicomp/' isExternal>
                        <ListItem p={3}>
                            Python for Science: https://aaltoscicomp.github.io/python-for-scicomp/
                        </ListItem>
                    </Link>
                    <Link href='https://michaeldmann.net/The%20Nervous%20System%20In%20Action.html' isExternal>
                        <ListItem p={3}>
                            https://michaeldmann.net/The%20Nervous%20System%20In%20Action.html
                        </ListItem>
                    </Link>
                    <Link href='https://www.youtube.com/watch?v=dSHnGO9qGsE' isExternal>
                        <ListItem p={3}>
                            The Vestibular System: https://www.youtube.com/watch?v=dSHnGO9qGsE
                        </ListItem>
                    </Link>
                    <Link href='https://www.atlasmeditech.com/3d-models' isExternal>
                        <ListItem p={3}>
                            Atlas MediTech: https://www.atlasmeditech.com/3d-models
                        </ListItem>
                    </Link>
                    <Link href='https://www.youtube.com/watch?v=GAoUc5ZgWrw' isExternal>
                        <ListItem p={3}>
                            Basal Ganglia: https://www.youtube.com/watch?v=GAoUc5ZgWrw
                        </ListItem>
                    </Link>
                    <Link href='https://nba.uth.tmc.edu/neuroscience/m/s3/chapter05.html' isExternal>
                        <ListItem p={3}>
                            Cerebellum: https://nba.uth.tmc.edu/neuroscience/m/s3/chapter05.html
                        </ListItem>
                    </Link>
                    <Link href='https://nba.uth.tmc.edu/neuroscience/s1/chapter09.html' isExternal>
                        <ListItem p={3}>
                            Synapses: https://nba.uth.tmc.edu/neuroscience/s1/chapter09.html
                        </ListItem>
                    </Link>
                    <Link href='https://highered.mheducation.com/sites/0072507470/student_view0/chapter12/multiple_choice_quiz_1.html' isExternal>
                        <ListItem p={3}>
                            Spinal Cord: https://highered.mheducation.com/sites/0072507470/student_view0/chapter12/multiple_choice_quiz_1.html
                        </ListItem>
                    </Link>
                    <Link href='http://databoys.github.io/Feedforward/' isExternal>
                        <ListItem p={3}>
                            Neural Network Numpy: http://databoys.github.io/Feedforward/
                        </ListItem>
                    </Link>
                    <Link href='https://github.com/eselkin/awesome-computational-neuroscience/blob/master/README.md' isExternal>
                        <ListItem p={3}>
                           Computational Neuro Repository: https://github.com/eselkin/awesome-computational-neuroscience/blob/master/README.md
                        </ListItem>
                    </Link>
                    <Link href='https://github.com/BlueBrain/BioExplorer' isExternal>
                        <ListItem p={3}>
                            BioExplorer: https://github.com/BlueBrain/BioExplorer
                        </ListItem>
                    </Link>
                    <Link href='https://subclassy.github.io/bio-vision' isExternal>
                        <ListItem p={3}>
                            Bio Vision: https://subclassy.github.io/bio-vision
                        </ListItem>
                    </Link>
                    <Link href='https://mark-kramer.github.io/Case-Studies-Python/01.html' isExternal>
                        <ListItem p={3}>
                            Python for Neuro: https://mark-kramer.github.io/Case-Studies-Python/01.html
                        </ListItem>
                    </Link>
                    <Link href='https://mrgreene09.github.io/computational-neuroscience-textbook/' isExternal>
                        <ListItem p={3}>
                            Computational Neuro: https://mrgreene09.github.io/computational-neuroscience-textbook/
                        </ListItem>
                    </Link>
                    <Link href='https://neuraldatascience.io/intro.html' isExternal>
                        <ListItem p={3}>
                            Neuro Data Science: https://neuraldatascience.io/intro.html
                        </ListItem>
                    </Link>
                    <Link href='http://karpathy.github.io/2016/09/07/phd/' isExternal>
                        <ListItem p={3}>
                            PHD: http://karpathy.github.io/2016/09/07/phd/
                        </ListItem>
                    </Link>
                    <Link href='https://www.microbehunter.com/microscopy-forum/viewforum.php?f=3&sid=7addb7a55596cc105745bc046dd68d38' isExternal>
                        <ListItem p={3}>
                            Microscope Forum: https://www.microbehunter.com/microscopy-forum/viewforum.php?f=3&sid=7addb7a55596cc105745bc046dd68d38
                        </ListItem>
                    </Link>
                    <Link href='https://github.com/ajuavinett/FUN_2023' isExternal>
                        <ListItem p={3}>
                            Neuro Workshop: https://github.com/ajuavinett/FUN_2023
                        </ListItem>
                    </Link>
                    <Link href='https://sites.google.com/ucsd.edu/neuroedu/' isExternal>
                        <ListItem p={3}>
                            Open Neuroscience: https://sites.google.com/ucsd.edu/neuroedu/
                        </ListItem>
                    </Link>
                    <Link href='https://sites.google.com/ucsd.edu/bipn145/electrophysiology/human-eeg' isExternal>
                        <ListItem p={3}>
                            Human EEG: https://sites.google.com/ucsd.edu/bipn145/electrophysiology/human-eeg
                        </ListItem>
                    </Link>
                    <Link href='https://www.fiercebiotech.com/' isExternal>
                        <ListItem p={3}>
                            Fierce Biotech: https://www.fiercebiotech.com/
                        </ListItem>
                    </Link>
                    <Link href='https://www.youtube.com/watch?v=fDP-UmfxXlA' isExternal>
                        <ListItem p={3}>
                            Neurulation: https://www.youtube.com/watch?v=fDP-UmfxXlA
                        </ListItem>
                    </Link>
                </OrderedList>
            </VStack>
        </Container>
    )
}

export default Course;
