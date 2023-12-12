import * as React from 'react';

interface ContactFormTemplateProps {
  name: string;
  email: string,
  message: string
}

export const ContactFormTemplate: React.FC<Readonly<ContactFormTemplateProps>> = ({
  name, email, message,
}) => (
  <div>
    <h1>Welcome, {name}!</h1>
  </div>
);