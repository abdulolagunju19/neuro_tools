import Head from 'next/head'
import Image from 'next/image'

import { Flex, Text, Heading, Box, useToast } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'

import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib'
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'

import Container from '../components/Container'
import TechStack from '../components/TechStack'

export default function Home() {
  const toast = useToast();
  const id = 'test-toast'
  const iconColor = {
    light: 'gray.600',
    dark: 'gray.300'
  }
  const { colorMode } = useColorMode()

  return (
    <>
      <Container>
        <Flex as="main" maxW={700} m={4} flexDir="column" justifyContent="center">
          <Heading py={[0, 2, 4]}>Welcome to my Site!</Heading>
          <Text fontSize="md" pt={3} pb={8}>Hello, welcome to Neuro*Discite. This website is a repository of the different things
            I have learned in Neuroscience. In addition, job postings, quizzes, and tutorials will
            be on the site. Other resources such as youtube videos and github repositories will also
            by present. Happy Learning!
          </Text>
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
              My Tech Stack
            </Heading>
            <Text pb="5"> The technology I use to develop my applications.</Text>
            <TechStack
                title="Vercel"
                href="https://vercel.com/"
                src="/images/vercel_icon.jpeg"
                alt='Vercel Logo'
                color={iconColor[colorMode]}
            >
                Vercel is what I use to deploy my websites.
            </TechStack>
            <TechStack
                title="Next.js"
                href="https://nextjs.org/"
                src="/images/nextjs_icon.png"
                alt='Next.js Logo'
                color={iconColor[colorMode]}
            >
                Next.js is a react framework I use to build my websites.
            </TechStack>
            <TechStack
                title="React"
                href="https://reactjs.org/"
                src="/images/react_icon.png"
                alt='React Logo'
                color={iconColor[colorMode]}
            >
                React is a powerful javascript framework I use to build my websites.
            </TechStack>
            <TechStack
                title="VS Code"
                href="https://code.visualstudio.com/"
                src="/images/vscode.png"
                alt='VS Code Logo'
                color={iconColor[colorMode]}
            >
                My Code Editor that allows me to build my applications.
            </TechStack>
            <TechStack
                title="Chakra UI"
                href="https://chakra-ui.com/"
                src="/images/chakra_icon.png"
                alt='React Logo'
                color={iconColor[colorMode]}
            >
                A simple component library that makes my styling easy.
            </TechStack>
        </Flex>
      </Container>
    </>
  )
}
