import type { NextApiRequest, NextApiResponse } from 'next'
import { render } from "@react-email/render";
import sendMail from "../../lib/emails";
import { ContactFormSchema } from '@/lib/types';
import { Resend } from 'resend';
import { CreateEmailResponse } from 'resend/build/src/emails/interfaces';
import { ContactFormTemplate } from '@/components/ContactFormTemplate/ContactFormTemplate';

const resend = new Resend(process.env.RESEND_EMAIL_API);

type ResponseData = {
  message: string
}

const PostHandler = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  const result = ContactFormSchema.safeParse(req.body);
  if(result.success) {
    const {firstName, lastName, email, message} = result.data;

    const response : CreateEmailResponse= await resend.emails.send({
      from: `onboarding@resend.dev`,
      to: 'nelsondong158@gmail.com',
      subject: `${firstName} ${lastName} sent an email - ${email}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
      react: ContactFormTemplate({firstName, lastName, email, message})
    });

    if(response.error) {
      return res.status(400).json({message: `Unable to send email: Error: ${response.error.name} - ${response.error.message}`});
    } else {
      return res.status(200).json({message: `Email sent from ${email}!`});
    }
  }

  if(result.error) {
    return res.status(400).json({message: `Contact Form is not safe! Validation for email failed`});
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  const requestMethod = req.method

  if (requestMethod === 'POST') {
    return await PostHandler(req, res)
  }

  return res.status(405).json({message: "Unexpected HTTP Request"})
}