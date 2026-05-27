import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export default async function handler(req, res) {

  // ALLOW ONLY POST REQUESTS

  if (req.method !== "POST") {

    return res.status(405).json({
      error: "Method not allowed"
    });

  }

  try {

    // GET FORM DATA

    const {
    name,
    email,
    phone,
    service,
    urgency,
    message
    } = req.body;

    // BASIC VALIDATION

    if (!name || !email || !message) {

      return res.status(400).json({
        error: "Required fields missing"
      });

    }

    // SAVE TO SUPABASE

    const { error } = await supabase
      .from("contact_submissions")
      .insert([
        {
        name,
        email,
        phone,
        service,
        urgency,
        message
        }
      ]);

    // CHECK DATABASE ERROR

    if (error) {
      throw error;
    }

    // SEND EMAIL USING RESEND

    await resend.emails.send({

      from: "onboarding@resend.dev",

      to: "bssuraj2@gmail.com",

      subject: "New Contact Form Submission",

      html: `
        <h2>New Contact Submission</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>Service:</strong> ${service}</p>

        <p><strong>Urgency:</strong> ${urgency}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `
    });

    // SUCCESS RESPONSE

    return res.status(200).json({
      success: true
    });

  } catch (error) {

    // SERVER ERROR

    return res.status(500).json({
      error: error.message
    });

  }

}