export const createNotificationEmail = (name: string, email: string, message: string, publisher: string) => {
  return `
    <h1>New Contact Notification</h1>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
    <p><strong>Game Studio/Publisher:</strong> ${publisher}</p>
  `
}