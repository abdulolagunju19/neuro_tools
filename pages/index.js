import Image from 'next/image';

import { Flex, Text, Heading, Box, useToast } from '@chakra-ui/react';

import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';

import Container from '../components/Container';
import TechStack from '../components/TechStack';

export default function Home() {
  const toast = useToast();
  const id = 'test-toast';

  return (
    <>
      <Container>
        <Flex as="main" maxW={700} m={4} flexDir="column" justifyContent="center">
          <Heading py={[0, 2, 4]}>Learn Neuroscience!</Heading>
          <Text fontSize="md" pt={3} pb={8}>Greetings and welcome to Neuro*Discite! This platform serves as a comprehensive repository for the wealth of knowledge I have acquired in the field of Neuroscience. Within this site, you will find a diverse range of resources, including educational articles, employment opportunities, interactive quizzes, and instructive tutorials. Here is to a fulfilling and enlightening learning experience!</Text>
          <Image width="300px" height="400px" src="/brain.gif"/>
          <Heading pt={5} pb={5} as='h3' size='md'>
            Start Here: Beat the Jigsaw Puzzle!
          </Heading>
          <Box borderWidth='1px' borderRadius='lg' overflow='hidden' p={3} m={3}>
          <JigsawPuzzle
              imageSrc='/puzzle.jpg'
              rows={3}
              columns={3}
              onSolved={() => {
                if (!toast.isActive(id)) {
                  toast({
                    id,
                    title: 'Congratulations! You Solved the Puzzle!',
                    status: 'success',
                    duration: 1000,
                    isClosable: true,
                  })
                }
            }}
            />
          </Box>
          <Heading as="h3" size="lg" pt="8" pb="8">
            Neuroscience Tools
          </Heading>
          <Text pb="5"> Great Neuroscience Resources.</Text>
          <TechStack
              title="Connected Papers"
              href="https://www.connectedpapers.com/"
              src="/images/connected.png"
              alt='Connected Papers'
          >
              Find and explore academic papers.
          </TechStack>
          <TechStack
              title="Allen Brain Map"
              href="https://portal.brain-map.org/"
              src="/images/allen.png"
              alt='Allen Brain Map'
          >
              Access to high quality data and web-based applications for studying the brain.
          </TechStack>
          <TechStack
              title="Brain Info"
              href="http://braininfo.rprc.washington.edu/Default.aspx"
              src="/images/braininfo.gif"
              alt='Brain Info'
          >
              Locating structures of the brain.
          </TechStack>
          <Heading as="h3" size="lg" pt="8" pb="8">
            My Tech Stack
          </Heading>
          <Text pb="5"> The technology I use to develop my applications.</Text>
          <TechStack
              title="Vercel"
              href="https://vercel.com/"
              src="/images/vercel_icon.jpeg"
              alt='Vercel Logo'
          >
              Vercel is what I use to deploy my websites.
          </TechStack>
          <TechStack
              title="Next.js"
              href="https://nextjs.org/"
              src="/images/nextjs_icon.png"
              alt='Next.js Logo'
          >
              Next.js is a react framework I use to build my websites.
          </TechStack>
          <TechStack
              title="React"
              href="https://reactjs.org/"
              src="/images/react_icon.png"
              alt='React Logo'
          >
              React is a powerful javascript framework I use to build my websites.
          </TechStack>
          <TechStack
              title="VS Code"
              href="https://code.visualstudio.com/"
              src="/images/vscode.png"
              alt='VS Code Logo'
          >
              My Code Editor that allows me to build my applications.
          </TechStack>
          <TechStack
              title="Chakra UI"
              href="https://chakra-ui.com/"
              src="/images/chakra_icon.png"
              alt='React Logo'
          >
              A simple component library that makes my styling easy.
          </TechStack>
        </Flex>
      </Container>
    </>
  )
}
