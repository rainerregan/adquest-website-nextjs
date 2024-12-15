export const createNotificationEmail = (name: string, email: string, message: string) => {
  return `
    <h1>New Contact Notification</h1>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  `
}