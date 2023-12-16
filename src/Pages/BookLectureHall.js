import { useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Button,
} from "@chakra-ui/react";

function BookLectureHall() {
    const initialData = {
        first_name:'',
        last_name:'',
        phone_number:'',
        date:'',
    }
    const [formData, setFormData] = useState(initialData);
    const handleChange =(e) => {
        setFormData({...formData, [e.target.name]: e.target.value,});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`$(BASE_URL) /LectureHalls`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(formData)
        } ).then ((res) => res.json()).then((data) => {
            setFormData(initialData)
        }).catch ((error) => {
            console.log(error)
        });
    }
  return (
    <Flex align={"center"} justify={"center"}>
      <Stack>
        <Heading fontSize={"4xl"} fontFamily={"Gotham"}>
          Book LectureHall
        </Heading>
        <Box as="form" rotate={"lg"} bg={"white"} p={8} onSubmit={handleSubmit}>
          <Stack>
            <FormControl isRequired>
              <FormLabel>first name </FormLabel>
              <Input
                name="first_name"
                placeholder="first_name"
                required
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>last name </FormLabel>
              <Input
                name="last_name"
                placeholder="last_name"
                required
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>phone number </FormLabel>
              <Input
                name="phone number"
                placeholder = '0112345678'
                type = 'number'
                required
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel> date </FormLabel>
              <Input
                name="date"
                type = 'datetime-local'
                required
                onChange={handleChange}
              />
            </FormControl>
            <Stack>
                <Button type = 'submit' colorScheme="blue"> Book </Button>
            </Stack>
            </Stack>
            </Box>
            </Stack>
            </Flex>
  )
}

export default BookLectureHall