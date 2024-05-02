import {Container, FormControl, Input, Text, Button,Box, FormErrorMessage, HStack, Image, Select, useToast, Divider, VStack} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import mario from '../../assets/images/mario&adrian.jpg';

function BookingSection() {

  const availableTimes = ['19:00','20:00','21:00','22:00','23:00','00:00'];

  const toast = useToast();

  const [times, setTimes] = useState(availableTimes);

  const openHours = [
    {
      day:'Mon',
      hours:'7am to 11pm',
    },
    {
      day:'Tue',
      hours:'7am to 11pm',
    },
    {
      day:'Wed',
      hours:'7am to 11pm',
    },
    {
      day:'Thur',
      hours:'7am to 11pm',
    },
    {
      day:'Fri',
      hours:'7am to 11pm',
    },
    {
      day:'Sat',
      hours:'7am to 11pm',
    },
    {
      day:'Sun',
      hours:'12pm to 00am',
    },
  ]

  const inputStyle = {
    bg:'secondary_grey',
    height:'3rem',
    borderRadius: 0,
    _placeholder : {
      color: 'black',
    }
  }
  const formik = useFormik({
    initialValues : {
      date:'',
      time:'19:00',
      guests:'',
      occassion:'birthday',
    },
    validationSchema : Yup.object({
      date: Yup.date().required('Required'),
      guests: Yup.number('number required').min(3).max(8).required('Required'),
      occassion: Yup.string().required('Required'),
      }),
    onSubmit : values => {
      alert(JSON.stringify(values,null,2))
      toast({
        title: 'Successfully booked table',
        description: "We've booked your table",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    },
  })

  fetch("")
  return (
    <Container maxW='max-content' my={8}>
      <Text textAlign='center' color='secondary_grey' fontSize={32}>Book a table for your occassion</Text>
      <Text mb='20px' color='secondary_grey' fontSize={20}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis, ipsum nec laoreet tempor, mi quam maximus purus, id tincidunt</Text>
      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <HStack spacing={6} mb={5}>
          <FormControl
            isInvalid={formik.errors.guests}
          >
            <Input
              id='guests'
              name='guests'
              type='number'
              {...formik.getFieldProps('guests')}
              placeholder='Number of guests'
              sx={inputStyle}
            />
            <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
          </FormControl>
          <FormControl>
            <Select
              id='time'
              name='time'
              {...formik.getFieldProps('time')}
              sx={inputStyle}
            >
              {times.map(time => <option value={time}>{time}</option> )}
            </Select>
          </FormControl>
        </HStack>
        <HStack spacing={6}>
        <FormControl>
            <Select
              id='occassion'
              name='occassion'
              {...formik.getFieldProps('occassion')}
              sx={inputStyle}
            >
              <option value='birthday'>Birthday</option>
              <option value='anniversary'>Anniversary</option>
              <option value='marriage'>Marriage</option>
            </Select>
          </FormControl>
            <FormControl
              isInvalid={formik.errors.date}
            >
              <Input
                id='date'
                type='date'
                {...formik.getFieldProps('date')}
                sx={inputStyle}
              />
              <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
            </FormControl>
        </HStack>
        <Button type='submit' w='100%' colorScheme='yellow' my={5}>submit</Button>
      </form>
        <HStack spacing={0} my={10} mx={'auto'} justify={'center'}>
          <Image src={mario} boxSize='400px'/>        
          <VStack bg='#2F2F2F' boxSize='350px' py={10}>
              <Text color='primary_yellow' fontSize={24}>Open Hours</Text>
              { openHours && openHours.map( days => {
                 return (
                  <HStack spacing={6}>
                    <Text color='secondary_grey'>{days.day}</Text>
                    <Divider w={20}/>
                    <Text color='secondary_grey'>{days.hours}</Text>
                 </HStack>
                 )
              })}
          </VStack>
        </HStack>
    </Container>
    
  )
}

export default BookingSection;
 
