import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

type OnSubmitCustomerEmailProps = {
  first_name: string;
};

export default function OnSubmitCustomerEmail({
  first_name,
}: OnSubmitCustomerEmailProps) {
  const year = new Date().getFullYear();
  return (
    <Html>
      <Head />
      <Preview>Thank you {first_name} for your enquiry!</Preview>
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
                  Hi {first_name},
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 20,
                    fontWeight: "normal",
                    lineHeight: "32px",
                  }}
                >
                  Thank you for your enquiry. We will review your request and
                  get back in touch as soon as possible.
                </Heading>
                <Text>Kind regards,</Text>
                <Text>Jamie Doe</Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  If this wasn&apos;t you or if you have additional questions,
                  please contact us at{" "}
                  <a href="mailto:info@webdesignbydoe.co.uk">
                    info@webdesignbydoe.co.uk
                  </a>
                  .
                </Text>
              </Column>
            </Row>
          </Section>

          <Hr style={{ margin: "20px 0" }} />
          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
              padding: "0 10px",
            }}
          >
            © {year} | Web Design by Doe. 16 Clover Close, SO31 6SQ, Hampshire |{" "}
            <a href="https://www.webdesignbydoe.co.uk">
              www.webdesignbydoe.co.uk
            </a>
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

OnSubmitCustomerEmail.PreviewProps = {
  first_name: "Alan",
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
};

const boxInfos = {
  padding: "20px",
};
