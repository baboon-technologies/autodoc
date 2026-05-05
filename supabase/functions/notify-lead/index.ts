import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { name, company, monthly_volume, phone, email } = body;

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { error: dbError } = await supabase.from("contact_leads").insert([
      { name, company, monthly_volume, phone, email },
    ]);

    if (dbError) {
      return new Response(JSON.stringify({ error: dbError.message }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (RESEND_API_KEY) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "AutoDoc <noreply@baboontechnologies.com>",
          to: ["schristensen@baboontechnologies.com"],
          subject: `New lead: ${name} from ${company}`,
          html: `
            <h2>New contact lead submitted</h2>
            <table cellpadding="8" style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
              <tr><td><strong>Name</strong></td><td>${name}</td></tr>
              <tr><td><strong>Company</strong></td><td>${company}</td></tr>
              <tr><td><strong>Monthly volume</strong></td><td>${monthly_volume}</td></tr>
              <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
              <tr><td><strong>Email</strong></td><td>${email}</td></tr>
            </table>
          `,
        }),
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
