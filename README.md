# Rabi Social Media App

Rabi is a social media application built with Next.js, TypeScript, Tailwind CSS, Shadcn UI, Prisma ORM, and MySQL. It provides a platform for users to connect, share posts, and engage in discussions.

## Features

- **Single Sign On (SSO) using Gmail:** Users can log in to Rabi using their Gmail accounts, simplifying the authentication process.

- **User Personalization:** Users can personalize their experience by selecting topics of interest and creating a unique username.

- **Creating Post:** Users can create and publish posts to share their thoughts, ideas, and experiences with the community.

- **Commenting on Posts:** Users can engage with posts by leaving comments, fostering discussions and interactions.

- **Replying to Comments:** Users can reply to comments, enabling deeper conversations and interactions within the community.

## Tech Stack

- **Next.js:** Next.js is a React framework for building server-side rendered and statically generated applications.

- **TypeScript:** TypeScript is a superset of JavaScript that adds static types to the language, providing improved developer experience and code reliability.

- **Tailwind CSS:** Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.

- **Shadcn UI:** Shadcn UI is a UI component library that provides pre-designed components for building modern web applications.

- **Prisma ORM:** Prisma is a modern database toolkit that simplifies database access and management through its ORM capabilities.

- **MySQL:** MySQL is a popular open-source relational database management system used for storing application data.

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/fierzahaikkal/rabi-sosmed-app
```

2. Install dependencies:

```bash
cd rabi-sosmed-app
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory and add the following environment variables:

```bash
DATABASE_URL=mysql://username:password@localhost:3306/database_name
NEXTAUTH_SECRET= your_next_auth_secret
GOOGLE_ID=your_google_id
GOOGLE_SECRET=your_google_token_secret
```

Replace `username`, `password`, and `database_name` with your MySQL database credentials.

4. Run database migrations:

```bash
npx prisma migrate dev
```

5. Start the development server:

```bash
npm run dev
```

6. Open your browser and navigate to `http://localhost:3000` to access the Rabi social media app.
