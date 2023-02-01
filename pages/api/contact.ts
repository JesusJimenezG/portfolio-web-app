// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = any
// const nodemailer = require('nodemailer')
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SG_API_KEY)

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('called contact api')

  const msg = {
    to: process.env.EMAIL_TO,
    from: process.env.SG_VERIFIED,
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }

  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
      res.status(200).json({ message: 'Email sent' })
    })
    .catch((error: any) => {
      console.error(error)
    })
  // const transporter = nodemailer.createTransport({
  //   host: 'smtp.sendgrid.net',
  //   port: 587,
  //   auth: {
  //     user: 'apikey',
  //     pass: process.env.SENDGRID_API_KEY,
  //   },
  // })
  // const mailData = {
  //   from: req.body.email,
  //   to: process.env.EMAIL_TO,
  //   subject: `Message From ${req.body.name}`,
  //   text: req.body.message,
  //   html: '<div>{req.body.message}</div>',
  // }

  // transporter.sendMail(mailData, function (err: any, info: any) {
  //   if (info.response === '250 OK') {
  //     res.status(200).json({ message: 'success' })
  //   } else {
  //     res.status(500).json({ message: err })
  //   }
  // })

  // res.status(200)
}
