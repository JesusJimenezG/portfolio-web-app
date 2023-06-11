require('dotenv').config({ path: '.env.test' })
const nodemailer = require('nodemailer')
const host = process.env.EMAIL_PROTOCOL_HOST
const port = process.env.EMAIL_PROTOCOL_PORT
const account = {
  user: process.env.WEB_MAILER,
  pass: process.env.WEB_MAILER_PASSWORD,
}

describe('nodemailer sendMail()', () => {
  let testAccount
  let transporter

  beforeAll(async () => {
    // create test SMTP account
    // testAccount = await nodemailer.createTestAccount()

    // create reusable transporter object using the default SMTP transport
    transporter = nodemailer.createTransport({
      host: host,
      port: port,
      secure: true, // true for 465, false for other ports
      auth: {
        user: account.user,
        pass: account.pass,
      },
    })
  })

  test('sendMail() should send an email', async () => {
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Fred Foo" <foo@example.com>', // sender address
      to: 'bar@example.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: '<b>Hello world?</b>', // html body
    })

    // assert that the message was sent successfully
    expect(info.messageId).toBeDefined()
    expect(info.envelope).toBeDefined()
    expect(info.accepted).toContain('bar@example.com')
    expect(info.response).toContain('250 Accepted')
  })

  afterAll(() => {
    // close the transport after all tests
    transporter.close()
  })
})
