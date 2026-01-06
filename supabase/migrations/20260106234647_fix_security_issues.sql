/*
  # Fix Security Issues

  ## Summary
  This migration addresses critical security vulnerabilities and removes unused database objects.

  ## Changes Made

  ### 1. Remove Unused Indexes
  - Drop `idx_products_category` - not being used in queries
  - Drop `idx_orders_email` - not being used in queries
  - Drop `idx_orders_status` - not being used in queries
  - Drop `idx_order_items_order_id` - not being used (FK already provides lookup)
  - Drop `idx_order_items_product_id` - not being used (FK already provides lookup)

  ### 2. Fix Overly Permissive RLS Policies

  #### Content Management Tables (about_us, services, projects)
  - Remove policies with `USING (true)` that allow any authenticated user to modify content
  - Content modifications should only be done via Edge Functions with service role key
  - Keep public read access only

  #### Orders and Order Items
  - Fix order viewing policy to prevent users from seeing all orders
  - Keep guest checkout functionality but add basic validation
  - Restrict order item creation to valid order contexts

  ## Security Improvements
  - Content tables now properly restricted to admin access via Edge Functions
  - Order privacy protected - users can't view all orders
  - Reduced attack surface by removing unused indexes
  - All RLS policies now follow principle of least privilege
*/

-- Drop unused indexes
DROP INDEX IF EXISTS idx_products_category;
DROP INDEX IF EXISTS idx_orders_email;
DROP INDEX IF EXISTS idx_orders_status;
DROP INDEX IF EXISTS idx_order_items_order_id;
DROP INDEX IF EXISTS idx_order_items_product_id;

-- Fix about_us table policies
DROP POLICY IF EXISTS "Authenticated users can insert about us content" ON about_us;
DROP POLICY IF EXISTS "Authenticated users can update about us content" ON about_us;
DROP POLICY IF EXISTS "Authenticated users can delete about us content" ON about_us;

-- Fix services table policies
DROP POLICY IF EXISTS "Authenticated users can insert services" ON services;
DROP POLICY IF EXISTS "Authenticated users can update services" ON services;
DROP POLICY IF EXISTS "Authenticated users can delete services" ON services;

-- Fix projects table policies
DROP POLICY IF EXISTS "Authenticated users can insert projects" ON projects;
DROP POLICY IF EXISTS "Authenticated users can update projects" ON projects;
DROP POLICY IF EXISTS "Authenticated users can delete projects" ON projects;

-- Fix orders table policies
DROP POLICY IF EXISTS "Anyone can view own orders by email" ON orders;

-- Create more restrictive order viewing policy
CREATE POLICY "Users can view orders by providing correct email"
  ON orders FOR SELECT
  USING (
    customer_email = current_setting('request.headers', true)::json->>'x-customer-email'
    OR current_setting('app.current_order_id', true) = id::text
  );

-- Fix order_items policy to validate order exists
DROP POLICY IF EXISTS "Anyone can create order items" ON order_items;

CREATE POLICY "Can create order items for valid orders"
  ON order_items FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM orders 
      WHERE orders.id = order_items.order_id
      AND orders.created_at > now() - interval '1 hour'
    )
  );

-- Fix orders policy to add basic validation
DROP POLICY IF EXISTS "Anyone can create orders" ON orders;

CREATE POLICY "Can create orders with valid data"
  ON orders FOR INSERT
  WITH CHECK (
    customer_email IS NOT NULL 
    AND customer_email != ''
    AND customer_name IS NOT NULL 
    AND customer_name != ''
    AND total_amount >= 0
    AND status = 'pending'
  );
