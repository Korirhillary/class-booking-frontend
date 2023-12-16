import { Box, Flex, HStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <Box>
        <Flex justifyContent={'space-between'}>
            <HStack fontWeight={'bold'}>
                <Link to = {'/'}> Home </Link>
            </HStack>

        </Flex>
    </Box>
  )
}

export default NavBar