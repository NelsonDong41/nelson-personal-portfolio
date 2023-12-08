import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
// import { Email } from '../components/EmailTemplate/EmailTemplate';

// const transporter = nodemailer.createTransport({
//   host: 'smtp.forwardemail.net',
//   port: 465,
//   secure: true,
//   auth: {
//     user: 'my_user',
//     pass: 'my_password',
//   },
// });

// const emailHtml = render(<Email url="https://example.com" />);

// const options = {
//   from: 'you@example.com',
//   to: 'user@gmail.com',
//   subject: 'hello world',
//   html: emailHtml,
// };

export default async function sendMail() { 
    // await transporter.sendMail(options)
}