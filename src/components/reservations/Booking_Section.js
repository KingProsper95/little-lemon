import {Container, FormControl, Input, Text, Button, FormErrorMessage, HStack, Icon} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function BookingSection() {
  const inputStyle = {
    bg:'secondary_grey',
    height:'3rem',
    borderRadius: 0,
    _placeholder : {
      color: 'primary_green',
    }

  }
  const formik = useFormik({
    initialValues : {
      name:'',
      email:'',
      date:'',
      time:'',
      occassion:''
    },
    validationSchema : Yup.object({
      name : Yup.string().min(5, 'must be above 5 characters').required('Required'),
      email : Yup.string().email().required('Required'),
      date: Yup.date().required('Required'),
      time: Yup.string().required('Required'),
      occassion: Yup.string().required('Required'),
      }),
    onSubmit : values => {
      alert(JSON.stringify(values,null,2))
    },
  })
  return (
    <Container minW='max-content'>
      <Text textAlign='center'>Book a table for your occassion</Text>
      <Text mb='20px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis, ipsum nec laoreet tempor, mi quam maximus purus, id tincidunt</Text>
      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <HStack spacing={6} mb={5}>
          <FormControl
            isInvalid={formik.errors.name}
          >
            <Input
              id='name'
              type='text'
              {...formik.getFieldProps('name')}
              placeholder='Name'
              sx={inputStyle}
            />
            <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={formik.errors.time}
          >
            <Input
              id='time'
              type='time'
              {...formik.getFieldProps('time')}
              placeholder='Time'
              sx={inputStyle}
            />
            <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
          </FormControl>
        </HStack>
        <HStack spacing={6}>
          <FormControl
              isInvalid={formik.errors.email}
            >
              <Input
                id='email'
                type='email'
                {...formik.getFieldProps('email')}
                placeholder='Email'
                sx={inputStyle}
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={formik.errors.date}
            >
              <Input
                id='date'
                type='date'
                {...formik.getFieldProps('date')}
                placeholder='Date'
                sx={inputStyle}
              />
              <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
            </FormControl>
        </HStack>
        
        <Button type='submit' w='100%'>submit</Button>
      </form>
    </Container>
  )
}

export default BookingSection;
 
