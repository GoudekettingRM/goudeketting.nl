import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text
} from '@react-email/components';

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
      <Head />
      <Preview>Your contact request has been received.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={section}>
            <Text style={text}>
              Hey <strong>{name}</strong>!
            </Text>
            <Text style={text}>
              I just wanted to let you know that I&apos;ve received your contact request. Here are
              the details I received:
            </Text>
            <Text style={text}>
              <strong>Phone number:</strong> {phone}
              <br />
              <strong>Email:</strong> {email}
              <br />
              <strong>Message:</strong>
              <br />
              {message}
              <br />
            </Text>

            <Text style={text}>
              If any of this information is not correct, just fill out the contact form again with
              the correct details.
            </Text>

            <br />
            <br />

            <Text style={text}>
              I will get back to you as soon as possible. In the meantime, feel free to check out my
              work.
            </Text>

            <Button href='https://www.goudeketting.nl/#portfolio' style={button}>
              Have another look at my work
            </Button>
          </Section>

          <Text style={footer}>Robin Goudeketting・Vienna, AT</Text>
        </Container>
      </Body>
    </Html>
  );
};
export default EmailTemplate;

const main = {
  backgroundColor: '#ffffff',
  color: '#24292e',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"'
};

const container = {
  maxWidth: '480px',
  margin: '0 auto',
  padding: '20px 0 48px'
};

const section = {
  padding: '24px',
  border: 'solid 1px #dedede',
  borderRadius: '5px',
  textAlign: 'center' as const
};

const text = {
  margin: '0 0 10px 0',
  textAlign: 'left' as const
};

const button = {
  fontSize: '14px',
  backgroundColor: '#28a745',
  color: '#fff',
  lineHeight: 1.5,
  borderRadius: '0.5em',
  padding: '12px 24px'
};

const footer = {
  color: '#6a737d',
  fontSize: '12px',
  textAlign: 'center' as const,
  marginTop: '60px'
};
