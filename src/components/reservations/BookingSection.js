import {Container, FormControl, Input, Text, Button, FormErrorMessage, HStack, Icon, Select} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function BookingSection() {

  const availableTimes = ['19:00','20:00','21:00','22:00','23:00','00:00'];

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
    },
  })
  return (
    <Container minW='max-content' my={8}>
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
              {availableTimes.map(time => <option value={time}>{time}</option> )}
            </Select>
          </FormControl>
        </HStack>
        <HStack spacing={6}>
        <FormControl>
            <Select
              id='occasion'
              name='occasion'
              {...formik.getFieldProps('occasion')}
              sx={inputStyle}
            >
              <option value='birthday'>Bithday</option>
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
        <Button type='submit' w='100%' colorScheme='yellow' mt={5}>submit</Button>
      </form>
    </Container>
  )
}

export default BookingSection;
 
