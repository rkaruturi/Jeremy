/*
  # Create Content Management Tables

  1. New Tables
    - `about_us`
      - `id` (uuid, primary key)
      - `section` (text) - either 'bio' or 'philosophy'
      - `title` (text)
      - `content` (text)
      - `order_index` (integer) - for ordering multiple items
      - `updated_at` (timestamptz)
    
    - `services`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `category` (text)
      - `order_index` (integer)
      - `updated_at` (timestamptz)
    
    - `projects`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `order_index` (integer)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
    - Add policies for authenticated admin write access
    
  3. Initial Data
    - Populate tables with current website content
*/

-- Create about_us table
CREATE TABLE IF NOT EXISTS about_us (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  section text NOT NULL,
  title text NOT NULL DEFAULT '',
  content text NOT NULL,
  order_index integer NOT NULL DEFAULT 0,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE about_us ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view about us content"
  ON about_us FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert about us content"
  ON about_us FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update about us content"
  ON about_us FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete about us content"
  ON about_us FOR DELETE
  TO authenticated
  USING (true);

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL DEFAULT '',
  order_index integer NOT NULL DEFAULT 0,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view services"
  ON services FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert services"
  ON services FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update services"
  ON services FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete services"
  ON services FOR DELETE
  TO authenticated
  USING (true);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  order_index integer NOT NULL DEFAULT 0,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view projects"
  ON projects FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update projects"
  ON projects FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete projects"
  ON projects FOR DELETE
  TO authenticated
  USING (true);

-- Insert initial About Us content
INSERT INTO about_us (section, title, content, order_index) VALUES
('bio', '', 'Jeremy Schissler is a visionary architect and designer with over 15 years of experience in creating transformative spaces that blend functionality with artistic expression. Based in the Pacific Northwest, Jeremy has become known for his innovative approach to sustainable design and his commitment to creating buildings that harmonize with their natural surroundings.', 1),
('bio', '', 'His work has been featured in leading architectural publications and has earned numerous awards for excellence in design. Jeremy believes that architecture should not only serve its practical purpose but should also inspire and elevate the human experience.', 2),
('philosophy', 'Sustainable Innovation', 'Every project incorporates cutting-edge sustainable technologies and materials, minimizing environmental impact while maximizing efficiency.', 1),
('philosophy', 'Human-Centered Design', 'Spaces are crafted with the end user in mind, ensuring comfort, functionality, and an emotional connection to the environment.', 2),
('philosophy', 'Artistic Integration', 'Architecture is treated as an art form, where every element contributes to a cohesive and aesthetically striking whole.', 3);

-- Insert initial Services content
INSERT INTO services (title, description, category, order_index) VALUES
('Residential Architecture', 'Custom home design that reflects your lifestyle and values, from modern minimalist retreats to classic family estates.', 'Architecture', 1),
('Commercial Design', 'Innovative workplace environments that enhance productivity and embody your corporate identity.', 'Design', 2),
('Sustainable Solutions', 'Green building consulting and LEED certification support for environmentally conscious projects.', 'Consulting', 3),
('Interior Spaces', 'Complete interior design services that create cohesive, beautiful environments from concept to completion.', 'Design', 4);

-- Insert initial Projects content
INSERT INTO projects (name, description, order_index) VALUES
('Cascade Mountain Retreat', 'A stunning 5,000 sq ft residence that seamlessly integrates with its mountain surroundings, featuring floor-to-ceiling windows and sustainable materials throughout.', 1),
('Urban Innovation Center', 'A 50,000 sq ft mixed-use development in downtown Portland, combining retail, office, and residential spaces with a focus on community engagement.', 2),
('Zen Meditation Garden', 'A peaceful sanctuary designed for mindfulness and reflection, incorporating traditional Japanese garden principles with Pacific Northwest flora.', 3);
