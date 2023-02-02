import { info } from 'console'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = any
const nodemailer = require('nodemailer')

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, email, subject, message } = req.body

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
  console.log('catch')

  const server = await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error: any, success: any) {
      if (success) {
        resolve(success)
      }
      reject(error)
    })
  })
  console.log('server: ', server)
  if (!server) {
    res.status(500).json({ error: 'Error failed' })
  }

  const success = await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData).then((info: any, err: any) => {
      if (info.response.includes('250')) {
        resolve(true)
      }
      reject(err)
    })
  })

  if (!success) {
    res.status(500).json({ error: 'Error sending email' })
  }
  res.status(200).json({ success: success })
}
