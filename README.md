
title: Spec Ticketing System
created at: Sat Jul 12 2025 05:07:35 GMT+0000 (Coordinated Universal Time)
updated at: Sat Jul 12 2025 05:08:00 GMT+0000 (Coordinated Universal Time)
---

# Spec Ticketing System

# SPEC-1-Ticketing System

## Background

Organizations often need an internal platform for employees to report issues, request services or track ad-hoc tasks. A centralized ticketing system ensures visibility, accountability and timely resolution by routing tickets to the right department and providing managers with oversight.

*Assumptions:* We are designing for an enterprise with multiple departments, each having managers who resolve tickets. Employees may optionally authenticate via Azure AD. Departments require custom ticket categories, fields and SLA rules.

## Requirements

Below is a draft of requirements prioritized using MoSCoW. Please review and adjust or provide missing items.

**Must have**

* Internal user authentication (Auth0 acting as the identity broker to Azure AD )
* Ability for employees to create and view tickets
* Department-specific ticket categories and custom fields
* SLA tracking and escalation rules per department
* Manager role with ticket assignment, reporting dashboard, and exportable reports/charts
* Notification via email and in-portal

**Should have**

* Search and filter tickets by status, priority, department, and date
* Bulk ticket import via CSV
* Attachments on tickets (documents, screenshots)

**Could have**

* Knowledge base integration for self-help
* Chat integration (e.g., Teams bot) for ticket creation

**Won’t have (for MVP)** (for MVP)\*\*

* Mobile app (will use responsive web)
* AI-powered ticket categorization

## Method

### Assumptions from Clarifications

* **Regulatory Compliance:** Must adhere to HIPAA requirements for health care data.
* **Tech Stack:** Node.js (Express) for backend, React.js for frontend, MySQL for data storage. Email notifications only, in-portal messaging.
* **Authentication Provider:** Auth0 configured to connect with Azure AD for SSO.

### System Architecture Overview

We will implement a multi-tiered, modular architecture:

@startuml\
!define RECTANGLE component\
RECTANGLE Frontend as "React.js SPA"\
RECTANGLE API as "Express.js REST API"\
RECTANGLE Auth as "Auth Service (Azure AD & JWT)"\
RECTANGLE DB as "MySQL Database"\
RECTANGLE SLA as "SLA Scheduler"\
RECTANGLE Notif as "Email Notification Service"\
RECTANGLE Storage as "Attachment Storage (Blob)"

Frontend --> API : HTTPS (JWT)\
API --> Auth : Token Validation\
API --> DB : SQL\
SLA --> API : SLA Checks\
SLA --> Notif : Trigger Escalations\
Notif --> Email System : SMTP\
API --> Storage : Upload/Download

@enduml

### Database Schema Sketch

@startuml\
table Users {\
id PK\
name\
email\
role\_id FK\
}\
table Departments {\
id PK\
name\
}\
table Tickets {\
id PK\
title\
description\
category\
priority\
status\
created\_by FK->Users\
department\_id FK->Departments\
created\_at\
updated\_at\
}\
table SLA\_Rules {\
id PK\
department\_id FK->Departments\
priority\_level\
threshold\_minutes\
resolution\_hours\
escalation\_steps\
}\
table Attachments {\
id PK\
ticket\_id FK->Tickets\
file\_url\
uploaded\_at\
}\
table Report\_Logs {\
id PK\
department\_id FK->Departments\
generated\_at\
report\_type\
file\_url\
}\
@enduml

## Implementation

1. **Provision Azure Resources:**

   * Create an Azure App Service plan and Web Apps for front-end (React SPA) and back-end (Express API).
   * Deploy a MySQL Flexible Server instance with private networking and enable geo-redundant backups.
   * Configure an Azure Blob Storage account for ticket attachments with private containers.
   * Set up Azure AD tenant and app registrations for SSO; grant API permissions and configure reply URLs.
   * Configure SendGrid (or similar) under Azure Marketplace for SMTP relay.

2. **CI/CD Pipeline:**

   * Use Azure DevOps or GitHub Actions to build, test, and deploy code.
   * Define separate pipelines for front-end and back-end:
     * Linting, unit tests, and build steps.
     * Deployment to staging slots, followed by approval gates and production swap.

3. **Database & Schema Migration:**

   * Manage schema via migration tool (e.g., Knex or TypeORM migrations).
   * Seed initial departments, roles, and SLA rule templates.

4. **Infrastructure-as-Code:**

   * Define Azure resources using Terraform or Azure Bicep.
   * Parameterize environment-specific values (e.g., connection strings, storage keys).

5. **Implement Core Features:**

   * **Auth Module:** Integrate Auth0 in front-end, configure Express middleware for JWT and Azure AD validation.

   * **Ticket CRUD:** Build REST endpoints, connect to MySQL, implement RBAC checks.

   1. **SLA Scheduler:** Implement cron jobs in the back-end.

   * **Notifications:** Develop email and in-portal notification logic.
   * **Attachment Service:** Add blob upload/download endpoints using Azure SDK.

6. **Testing & QA:**

   * Unit and integration tests covering API and UI.
   * End-to-end tests (e.g., Playwright) for critical flows.
   * Security review for HIPAA compliance (logging, encryption at rest/in transit).

7. **Monitoring & Logging:**

   * Configure Azure Application Insights for API and front-end telemetry.
   * Set up log analytics workspace and alerts for SLA breaches, errors, and performance metrics.

## Milestones & Sprint Breakdown

**Total Project Duration:** Approximately 9 weeks (5 sprints), including UAT and deployment.

We’ll follow Scrum with two-week sprints (except final UAT sprint). Below is a suggested breakdown with example Jira story titles.

### Sprint 1 (Weeks 1–2): Project Initialization & Infrastructure

* **Story TS-1:** Configure Git repositories, branching strategy, and repo permissions.
* **Story TS-2:** Define Terraform/Bicep modules for Azure App Service, MySQL Flexible Server, and Blob Storage.
* **Story TS-3:** Set up Auth0 tenant and configure Azure AD connection.
* **Story TS-4:** Implement CI/CD pipelines in GitHub Actions or Azure DevOps for frontend and backend.
* **Story TS-5:** Deployment smoke test to staging slot.

### Sprint 2 (Weeks 3–4): Authentication & Core Data Model

* **Story TS-6:** Integrate Auth0 into React SPA via Auth0 SDK.
* **Story TS-7:** Implement Express middleware for JWT validation and RBAC.
* **Story TS-8:** Design and migrate MySQL schema: Users, Departments, Tickets.
* **Story TS-9:** Seed initial data for roles, departments, and SLA templates.
* **Story TS-10:** Create Jira dashboards and filters for sprint tracking.

### Sprint 3 (Weeks 5–6): Ticketing & SLA Services

* **Story TS-11:** Build Ticket CRUD REST endpoints with validation.
* **Story TS-12:** Develop SLA Scheduler as Azure Function Timer or cron job.
* **Story TS-13:** Implement escalation logic and linking to SLA rules.
* **Story TS-14:** Build in-portal notification endpoints and email notification service.
* **Story TS-15:** Unit tests for ticket flows and scheduler.

### Sprint 4 (Weeks 7–8): Frontend Portal & Attachments

* **Story TS-16:** Create ticket creation and listing UI components in React.
* **Story TS-17:** Integrate Azure Blob Storage upload/download in portal.
* **Story TS-18:** Implement search, filter, and custom field UI for tickets (and export csv).
* **Story TS-19:** Dashboard for managers: charts, SLA status widgets.
* **Story TS-20:** End-to-end tests (Playwright) for core user journeys.

### Sprint 5 (Week 9): QA, UAT & Production Rollout

* **Story TS-21:** Conduct security & HIPAA compliance audit.
* **Story TS-22:** Performance tuning: API latency optimization and indexing.
* **Story TS-23:** User Acceptance Testing with stakeholder feedback.
* **Story TS-24:** Production deployment and post-deployment monitoring setup.
* **Story TS-25:** Retrospective and backlog grooming for next phase.

## Gathering Results

* **Requirement Validation:** Confirm all MoSCoW “Must have” features via stakeholder demos and acceptance criteria.
* **Performance Metrics:** Track request latency (API <200ms), SLA scheduler accuracy, and storage throughput.
* **Compliance Audit:** Ensure audit logs, encryption, and access controls meet HIPAA guidelines.
* **User Satisfaction:** Collect feedback through surveys and analyze ticket resolution time improvements.

## SLA Definition

Service Level Agreement (SLA) defines the expected response and resolution timelines for tickets based on priority and department requirements. Each SLA rule includes:

* **Threshold Minutes:** Maximum time allowed from ticket creation to first response.
* **Escalation Level:** The sequence of actions when a threshold is breached (e.g., notify manager, auto-escalate to higher tier).
* **Priority Mapping:** Tickets categorized (e.g., Critical, High, Medium, Low) with distinct thresholds.

**Example SLA Rule:**

| Priority | First Response (mins) | Resolution (hrs) | Escalation Steps                                                |
| -------- | --------------------- | ---------------- | --------------------------------------------------------------- |
| Critical | 15                    | 2                | 1) Notify Dept Manager at 15m; 2) Notify Admin at 30m           |
| High     | 60                    | 8                | 1) Notify Dept Manager at 60m; 2) Auto-assign to backup at 120m |
| Medium   | 240                   | 24               | 1) Notify Dept Manager at 4h                                    |
| Low      | 1440                  | 72               | 1) Notify Dept Manager at 24h                                   |

SLA rules are configurable per department through the SLA\_Rules table and can be updated in the admin portal.

##

          
