/*
  # Create contact leads table

  1. New Tables
    - `contact_leads`
      - `id` (uuid, primary key)
      - `name` (text) - full name of the contact
      - `company` (text) - company name
      - `monthly_volume` (text) - approximate monthly document volume
      - `phone` (text) - phone number
      - `email` (text) - email address
      - `created_at` (timestamptz) - submission timestamp

  2. Security
    - Enable RLS on `contact_leads` table
    - Allow anonymous inserts (public form submission)
    - No read access for anonymous users (data is private)
*/

CREATE TABLE IF NOT EXISTS contact_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL DEFAULT '',
  company text NOT NULL DEFAULT '',
  monthly_volume text NOT NULL DEFAULT '',
  phone text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact lead"
  ON contact_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);
