import type { NextApiRequest, NextApiResponse } from 'next'
import type { GetServerSideProps } from 'next'
import { ContactFormSchema } from '@/lib/types';
import { Resend } from 'resend';
import { CreateEmailResponse } from 'resend/build/src/emails/interfaces';
import { ContactFormTemplate } from '@/components/ContactFormTemplate/ContactFormTemplate';


type ResponseData = {
  message: string
}

const PostHandler = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  const resend = new Resend(process.env.RESEND_EMAIL_API);
  const result = ContactFormSchema.safeParse(req.body);
  if(result.success) {
    const {name, email, message} = result.data;

    const response : CreateEmailResponse= await resend.emails.send({
      from: `Website <onboarding@resend.dev>`,
      to: 'nelsondong158@gmail.com',
      subject: `${name} sent an email - ${email}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      react: ContactFormTemplate({name, email, message})
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


export const getServerSideProps = ( async () => {
  const ResendAPIKey = process.env.RESEND_EMAIL_API;
  return { props: { ResendAPIKey } }
}) satisfies GetServerSideProps