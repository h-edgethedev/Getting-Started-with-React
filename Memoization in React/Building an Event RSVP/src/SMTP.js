import nodemailer from "nodemailer"

function VerifyOTP(message) {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "oluwanifemibarber@gmail.com",
            pass: "something"
        }
    })
    async function sendMail() {
        const info = await transporter.sendMail({
            from: `"Heritage's RSVP form" <oluwanifemibarber@gmail.com>`,
            to: "tageb109@gmail.com",
            subject: `OTP Verification from RSVP`,
            text: `${message}`
        })
        console.log(`Message sent: ${info.messageId}`)
    }
sendMail()
}

export default VerifyOTP;