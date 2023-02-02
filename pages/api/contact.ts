import type { NextApiRequest, NextApiResponse } from 'next'

type Data = any
const nodemailer = require('nodemailer')

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, email, subject, message } = JSON.parse(req.body)

  const mailData = {
    to: process.env.EMAIL_TO,
    from: process.env.WEB_MAILER,
    name: name,
    subject: subject,
    text: `Email: ${email}.\n\nMessage: ${message}`,
    html: `<div>Email: ${email}.\n\nMessage: ${message}</div>`,
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.titan.email',
    secure: true,
    port: 465,
    auth: {
      user: process.env.WEB_MAILER,
      pass: process.env.WEB_MAILER_PASSWORD,
    },
  })

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (info: any, err: any) => {
      if (err) {
        console.log('err: ', err)
        reject(err)
        // res.status(500).json({ error: 'Error sending email' })
      }
      if (info.response.includes('250')) {
        resolve(info)
        // res.status(200).json({ success: true })
      }
    })
  })
  res.status(200).json({ success: true })
}
