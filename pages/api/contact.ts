import type { NextApiRequest, NextApiResponse } from 'next'

type Data = any
const nodemailer = require('nodemailer')

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const mailData = {
    to: process.env.EMAIL_TO,
    from: process.env.WEB_MAILER,
    name: req.body.name,
    subject: req.body.subject,
    text: `Email: ${req.body.email}.\n\nMessage: ${req.body.message}`,
    html: `<div>Email: ${req.body.email}.\n\nMessage: ${req.body.message}</div>`,
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

  transporter.sendMail(mailData).then((info: any, err: any) => {
    if (err) {
      console.log('err: ', err)
      res.status(500).json({ error: 'Error sending email' })
    }
    if (info.response.includes('250')) {
      res.status(200).json({ success: true })
    }
  })
}
