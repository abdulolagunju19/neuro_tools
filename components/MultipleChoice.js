import { Button, Flex } from '@chakra-ui/react'
import React from 'react'

const MultipleChoice = () => {
  return (
    <Flex p={3} m={5} alignItems="start" direction="column">
            <Button variant='ghost'>A </Button>
            <Button variant='ghost'>B </Button>
            <Button variant='ghost'>C </Button>
            <Button variant='ghost'>D </Button>
    </Flex>
  )
}

export default MultipleChoice