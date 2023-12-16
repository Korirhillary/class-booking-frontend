import { Box, Button, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function LectureHall( {lectureHall} ) {
   
  return (
    <Box maxW='sm' rounded={'md'} bg={'white'}p={3}>
        <Box h={'200px'} mb={8} position={'relative'}>
           {<Image h={230} src= {lectureHall.image}
            alt={lectureHall.Title} objectFit='cover'
            />}

        </Box>
        <Stack mt={6}>
            <Heading>
                {lectureHall.Title}
            </Heading>
            <Stack fontSize={'sm'} direction={'column'}>
            <Text> {lectureHall.description} </Text>
            <Text>
                Ksh: {lectureHall.Price}
            </Text>
            </Stack>
        </Stack>
            <Link to= {'/book-hall'}>
            <Button variant='solid' colorScheme='blue'> Book </Button>
            </Link>
        

    </Box>
  )
}

export default LectureHall