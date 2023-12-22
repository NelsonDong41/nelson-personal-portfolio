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
    <h1>Name - {name}!</h1>
    <h2>Email - {email}!</h2>
    <p>message - {message}!</p>
  </div>
);