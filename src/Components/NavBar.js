import { Box, Flex, HStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <Box bg = "purple" py ={4}>
        <Flex justifyContent={'space-between'}>
            <HStack fontWeight={'bold'}>
                <Link to = '/'style={{ fontSize:"24px",fontStyle:"italic"}}> TAIFA HALLS </Link>
            </HStack>

        </Flex>
    </Box>
  )
}

export default NavBar