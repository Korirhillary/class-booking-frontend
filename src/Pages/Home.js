import { Flex, SimpleGrid } from '@chakra-ui/react'
import React, { useState } from 'react'
import LectureHall from '../Components/LectureHall'

const Home = () => {
  const initialData = [
    {
      id: "1",
      Title: "Imperial Hall",
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGZvA95CQdEzYGEx7gb8x0D-z-pYr3_ZT0-Q&usqp=CAU',
      description: "Lecture hall with preparation rooms",
      Price: '40,000'
    },
    {
      id: "2",
      Title: "Extron Hall",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvNHzixVQ39TIUsfmtYWuGj57pMA17y59UgQ&usqp=CAU",
      description: 'General purpose classrooms',
      Price: '55,000'
    },
    {
      id: "3",
      Title: "Acentech Hall",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqR26837TE0phy2HH4yUwbAVUrp9K4kTMcSy03y56mzbMIPYQNNkENzEy-HHyTmj9A2I0&usqp=CAU",
      description: 'Equiped with special instrument for demonstrations',
      Price: '50,000'
    },
    {
      id: "4",
      Title: "London Hall",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBP0jIwjxMd4VrocQ4OqYGfejJQty8El99qA&usqp=CAU",
      description: 'Contain multimedia/telecommunications equipment.',
      Price: '45,000'
    },
    {
      id: "5",
      Title: "SAS Hall",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG7OrNvpDqV2vd7ik5dBbF-NjhRLLgzXKFQQ&usqp=CAU",
      description: 'Projection rooms available',
      Price: '70,000'
    },
    {
      id: "6",
      Title: "2000 squad Hall",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSetCoeAm0Tq05XAnsRmuFvbyf6MctAfBKvNg&usqp=CAU",
      description: 'Spacious  ',
      Price: '65,000'
    },
    {
      id: "7",
      Title: "Sidney Hall",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvQbm-CZ4CZKwNAQNvFgQkExdSJJ1ZZ3RPpw&usqp=CAU",
      description: '200 seats lecture hall ',
      Price: '63,000'
    },
    {
      id: "8",
      Title: "Perth sidney",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWv6MmNrh0L-J-2WabU9xoB_cEA4oxVMPNpA&usqp=CAU",
      description: 'Design for group activities and lectures ',
      Price: '75,000'
    },
  ];
  
  const [lectureHalls, setLectureHalls] = useState(initialData); // Define singular lectureHall state

  return (
    <Flex direction={'column'} p={4} gap={4}>
      <SimpleGrid columns={4} spacing={5}>
        {lectureHalls.map((lectureHall) => (
          <LectureHall key={lectureHall.id} lectureHall={lectureHall} />
        ))}
      </SimpleGrid>
    </Flex>
  )
}

export default Home