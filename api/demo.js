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
    product_interest,
    company,
    company_size,
    preferred_demo_time
    } = req.body;

    // BASIC VALIDATION

    if (!name || !email || !message) {

      return res.status(400).json({
        error: "Required fields missing"
      });

    }

    // SAVE TO SUPABASE

    const { error } = await supabase
      .from("demo_bookings")
      .insert([
        {
        name,
        email,
        phone,
        product_interest,
        company,
        company_size,
        preferred_demo_time
        }
      ]);

    // CHECK DATABASE ERROR

    if (error) {
      throw error;
    }

    // SEND EMAIL USING RESEND

    await resend.emails.send({

      from: "Acme <onboarding@resend.dev>",

      to: "dizynic@gmail.com",

      subject: "New Demo Booking",

     html: `
    <h2>New Demo Booking</h2>

    <p><strong>Name:</strong> ${name}</p>

    <p><strong>Email:</strong> ${email}</p>

    <p><strong>Phone:</strong> ${phone}</p>

    <p><strong>Product Interested In:</strong> ${product_interest}</p>

    <p><strong>Company:</strong> ${company}</p>

    <p><strong>Company Size:</strong> ${company_size}</p>

    <p><strong>Preferred Demo Time:</strong> ${preferred_demo_time}</p>
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