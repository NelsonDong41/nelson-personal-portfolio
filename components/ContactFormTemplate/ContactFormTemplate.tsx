import * as React from 'react';

interface ContactFormTemplateProps {
  firstName: string;
  lastName: string,
  email: string,
  message: string
}

export const ContactFormTemplate: React.FC<Readonly<ContactFormTemplateProps>> = ({
  firstName, lastName, email, message,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);