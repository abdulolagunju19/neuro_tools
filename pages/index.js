import Head from 'next/head'
import Image from 'next/image'

import { Flex, Text, Heading, Box, useToast} from '@chakra-ui/react'

import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib'
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'

import Container from '../components/Container'

export default function Home() {
  const toast = useToast();
  const id = 'test-toast'
  return (
    <>
      <Container>
        <Flex maxW={700} m={5} flexDir="column" justifyContent="center">
          <Heading py={3}>Welcome to my Site!</Heading>
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
        </Flex>
      </Container>
    </>
  )
}
