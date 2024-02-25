import React from "react";
import type { ContactFormEmailProps } from "@/lib/types";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/components";

export default function ContactFormEmail({ message, senderEmail }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-lg">
              <Heading className="leading-tight">You received the following message from your contact form</Heading>
              <Text className="text-center">{message}</Text>
              <Hr />
              <Text className="font-semibold">The sender's email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
