# Shinezone Backend Contract

This is the recommended Phase 2 backend shape for the shared API at `\\wsl.localhost\Ubuntu\home\nqobile\cosmo_apps\orbitmirai.api`.

## Public API Endpoints

- `GET /api/services`
- `GET /api/services/{slug}`
- `GET /api/sectors`
- `GET /api/case-studies`
- `GET /api/policies`
- `GET /api/policies/{slug}`
- `GET /api/service-areas/lookup?postcode=LU1`
- `GET /api/availability/slots?service=...&postcode=...&date=2026-07-17`
- `POST /api/bookings`
- `POST /api/bookings/{booking}/attachments/signed-upload`
- `GET /api/bookings/reference/{reference}`
- `POST /api/contact-enquiries`
- `POST /api/emergency-requests`
- `POST /api/assurance/document-requests`

## Protected Admin Endpoints

- `POST /api/admin/auth/login`
- `POST /api/admin/auth/logout`
- `GET /api/admin/me`
- `GET /api/admin/bookings`
- `GET /api/admin/bookings/{booking}`
- `PATCH /api/admin/bookings/{booking}`
- `POST /api/admin/bookings/{booking}/status`
- `POST /api/admin/bookings/{booking}/notes`
- `POST /api/admin/bookings/{booking}/assignments`
- `POST /api/admin/bookings/{booking}/timestamps`
- `POST /api/admin/bookings/{booking}/rectifications`
- `GET /api/admin/calendar`
- `GET /api/admin/availability-rules`
- `POST /api/admin/availability-rules`
- `PATCH /api/admin/availability-rules/{rule}`
- `GET /api/admin/blocked-dates`
- `POST /api/admin/blocked-dates`
- `DELETE /api/admin/blocked-dates/{blockedDate}`
- `GET /api/admin/service-areas`
- `POST /api/admin/service-areas`
- `PATCH /api/admin/service-areas/{area}`
- `GET /api/admin/services`
- `POST /api/admin/services`
- `PATCH /api/admin/services/{service}`
- `GET /api/admin/case-studies`
- `POST /api/admin/case-studies`
- `PATCH /api/admin/case-studies/{caseStudy}`
- `GET /api/admin/policies`
- `POST /api/admin/policies`
- `PATCH /api/admin/policies/{policy}`
- `GET /api/admin/assurance/document-requests`
- `PATCH /api/admin/assurance/document-requests/{request}`
- `POST /api/admin/assurance/document-requests/{request}/status`
- `POST /api/admin/assurance/document-requests/{request}/secure-links`
- `GET /api/admin/settings`
- `PATCH /api/admin/settings`
- `GET /api/admin/audit-logs`

## Minimum Tables

- `services`
- `sectors`
- `service_areas`
- `availability_rules`
- `blocked_dates`
- `bookings`
- `booking_hazards`
- `booking_waste_items`
- `booking_attachments`
- `booking_status_history`
- `booking_assignments`
- `booking_timestamps`
- `booking_notes`
- `booking_audit_logs`
- `booking_rectifications`
- `case_studies`
- `contact_enquiries`
- `policies`
- `policy_sections`
- `assurance_document_requests`
- `assurance_request_status_history`
- `secure_document_links`
- `admin_users`
- `admin_roles`
- `admin_settings`

## Booking Enums

Statuses:

- `new`
- `triage_required`
- `awaiting_information`
- `site_survey_required`
- `quote_preparing`
- `quote_issued`
- `awaiting_approval`
- `confirmed`
- `crew_assigned`
- `en_route`
- `arrived`
- `in_progress`
- `completed`
- `awaiting_signoff`
- `recall_rectification`
- `cancelled`
- `declined`

Priorities:

- `emergency`
- `urgent`
- `standard`
- `planned`

## Required Booking Timestamps

- `submitted_at`
- `request_received_at`
- `triaged_at`
- `assigned_at`
- `dispatched_at`
- `arrived_at`
- `work_started_at`
- `completed_at`
- `signed_off_at`
- `cancelled_at`

## Environment Variables

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SHINEZONE_API_URL`
- `SHINEZONE_API_TOKEN`
- `BOOKING_REFERENCE_PREFIX=SZ`
- `UPLOAD_MAX_FILES=5`
- `UPLOAD_MAX_FILE_MB=10`
- `RESEND_API_KEY`
- `BOOKING_NOTIFICATIONS_FROM`
- `BOOKING_NOTIFICATIONS_TO`
- `TWILIO_ACCOUNT_SID`
- `TWILIO_AUTH_TOKEN`
- `TWILIO_FROM_NUMBER`
- `SMS_NOTIFICATIONS_ENABLED=false`
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
- `TURNSTILE_SECRET_KEY`

All public form endpoints must verify the captcha token server-side before accepting the submission.

## Claim-Control Settings

Create admin settings for these claims and keep them disabled until evidence exists:

- `claim_24_7_service_enabled`
- `claim_two_hour_response_enabled`
- `claim_nationwide_coverage_enabled`
- `claim_all_staff_dbs_enabled`
- `claim_biohazard_trained_staff_enabled`
- `claim_sharps_trained_staff_enabled`
- `claim_waste_carrier_registration_enabled`
- `claim_insurance_details_enabled`
