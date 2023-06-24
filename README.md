# Healthyminds.gr

Healthyminds is an office that provides pshyciatric assistance , to anyone that seeks help , either in Greece or everywhere in the world through online sessions.

### Tech Stack

- Next.js 13 App Router
- TailwindCSS
- Shadcn UI library
- Nodemailer
- Sanity Headless CMS for content management
- React Icons

### More info

This was decided to be open source and you ca freely use it as a reference or learn from it. The codebase will be subject to continuous improvement and restyle.

### Future additions

- Internationalization
- Edit services section through Sanity CMS
- Restyle it based on a designer's design.

### Setup

To setup the project you need to fill in the variables in the env.
Those are neccessary to setup nodemail and sanity cms.

\*Check nodemailer documentation for possible setups

email=your email
password=application specific password through gmail
SANITY_TOKEN=sanity api token (read-write access)
SANITY_PROJECT_ID=sanity project id
SANITY_DATASET=most likely production
SANITY_API_VERSION=date of creating the project like "2023-06-17"
