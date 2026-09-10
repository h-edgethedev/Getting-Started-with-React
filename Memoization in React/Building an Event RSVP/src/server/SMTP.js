import emailjs from "@emailjs/browser"

async function sendOtp(email, otp) {
    const expiry = new Date(Date.now() + (15 * 60 * 1000))
    const time = expiry.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    let passcode = otp
    const templateParams = {
        passcode: passcode,
        time: time,
        email: email
    }
    try {
        const response = await emailjs.send(
            "service_t9wlnth",
            "template_gt5740u",
            templateParams,
            { publicKey: "fvuqmCMGNVQrU2OOt" }
        );
        console.log(`Email sent: ${response.status}`)
        return true
    }
    catch (error) {
        console.error("EmailJS error:", error)
        console.error("Status:", error.status)
        console.error("Text:", error.text)
    }
}


export default sendOtp;