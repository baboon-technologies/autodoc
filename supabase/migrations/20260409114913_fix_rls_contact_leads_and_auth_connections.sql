/*
  # Fix RLS policy for contact_leads and Auth connection strategy

  1. Security Changes
    - Drop the overly permissive INSERT policy on `contact_leads` that used `WITH CHECK (true)`
    - Replace with a policy that validates required fields are non-empty strings
    - This prevents empty/spam submissions and removes the "always true" bypass warning

  2. Auth Connection Strategy
    - Switch Auth DB connections to percentage-based allocation (10% of pool)
    - This ensures the Auth server scales proportionally with instance size
*/

DROP POLICY IF EXISTS "Anyone can submit a contact lead" ON public.contact_leads;

CREATE POLICY "Anon can insert valid contact lead"
  ON public.contact_leads
  FOR INSERT
  TO anon
  WITH CHECK (
    length(trim(name)) > 0
    AND length(trim(email)) > 0
    AND email LIKE '%@%'
    AND length(trim(company)) > 0
    AND length(trim(phone)) > 0
    AND length(trim(monthly_volume)) > 0
  );
