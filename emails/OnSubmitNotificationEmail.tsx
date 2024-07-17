import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

type OnSubmitNotificationEmailProps = {
  firstName: string;
  lastName?: string;
  email: string;
  number?: string;
  message: string;
};

export default function OnSubmitNotificationEmail({
  firstName,
  lastName,
  email,
  number,
  message,
}: OnSubmitNotificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New enquiry from: {firstName}</Preview>
      <Body style={main}>
        <Container>
          <Section style={content}>
            <Row>
              <Img
                style={logo}
                src={`https://www.webdesignbydoe.co.uk/images/dbd_logo.svg`}
                width={50}
              />
            </Row>
            <Row
              style={{ ...boxInfos, paddingBottom: "0", paddingTop: "50px" }}
            >
              <Column style={{ padding: "0 20px 10px 20px" }}>
                <Heading
                  as="h1"
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                  }}
                >
                  Hi Jamie,
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 20,
                    fontWeight: "normal",
                    lineHeight: "32px",
                  }}
                >
                  You have received a new enquiry from {firstName}
                  {lastName && ` ${lastName}`}.
                </Heading>
                <Text
                  style={{
                    ...paragraph,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span style={{ fontWeight: "700" }}>Their message:</span>{" "}
                  {message}
                </Text>
                <Text
                  style={{
                    ...paragraph,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span style={{ fontWeight: "700" }}>
                    Their contact details:{" "}
                  </span>
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <li>
                      <span style={{ fontWeight: "700" }}>First Name:</span>{" "}
                      {firstName}
                    </li>
                    {lastName && (
                      <li>
                        <span style={{ fontWeight: "700" }}>Last Name:</span>{" "}
                        {lastName}
                      </li>
                    )}
                    <li>
                      <span style={{ fontWeight: "700" }}>Email:</span> {email}
                    </li>
                    {number && (
                      <li>
                        <span style={{ fontWeight: "700" }}>Phone number:</span>{" "}
                        {number}
                      </li>
                    )}
                  </ul>
                </Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

OnSubmitNotificationEmail.PreviewProps = {
  firstName: "Jamie",
  lastName: "Doe",
  email: "dummyemail@email.com",
  message:
    "I need a new website built. The website is a cool website that shows off cars and products.",
  number: "1234567890",
};

const main = {
  backgroundColor: "#FBFBFE",
  padding: "20px 0",
  display: "block",
  margin: "0 auto",

  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 14,
  padding: "20px 0 0 0",
};

const logo = {
  display: "block",
  padding: "20px 0 0",
  marginLeft: "auto",
  marginRight: "auto",
};

const content = {
  overflow: "hidden",
  borderRadius: "10px",
};

const boxInfos = {
  padding: "20px",
};
