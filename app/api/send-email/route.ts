import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
    try {
        const data = await request.json()

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false,
            requireTLS: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        })

        const emailContent = Object.entries(data)
            .filter(([key]) => key !== 'formType')
            .map(([key, value]) => `<p><strong>${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong> ${value || 'N/A'}</p>`)
            .join('')

        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: process.env.RECIPIENT_EMAIL,
            subject: `New Submission: ${data.formType || 'General Form'}`,
            html: `
                <h2>New Form Submission</h2>
                <p><strong>Form Type:</strong> ${data.formType || 'N/A'}</p>
                ${emailContent}
            `,
        })

        return NextResponse.json({ success: true }, { status: 200 })
    } catch (error) {
        console.error('Email error:', error)
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }
}
