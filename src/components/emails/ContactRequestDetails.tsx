import { Heading, Html, Text } from '@react-email/components';

const EmailTemplate = ({
  name,
  email,
  phone,
  message
}: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  return (
    <Html lang='en'>
      <Heading as='h1'>Contact request from {name}</Heading>
      <Text>Someone just contacted me / you. Below are the details of they contact request.</Text>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Phone number: {phone}</Text>
      <Text>Message: {message}</Text>
    </Html>
  );
};
export default EmailTemplate;
