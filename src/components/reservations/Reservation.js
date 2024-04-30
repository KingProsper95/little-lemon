import { Flex, Box } from "@chakra-ui/react";
import Landing from "./Landing";
import BookingSection from "./BookingSection";


export default function Reservation() {
  return (
    <Flex direction='column'>
      <Box>
        <Landing />
      </Box>
      <Box bg='primary_green'>
        <BookingSection />
      </Box>    
    </Flex>
  )
}
