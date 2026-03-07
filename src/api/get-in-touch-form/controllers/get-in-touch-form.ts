/**
 * get-in-touch-form controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController(
  'api::get-in-touch-form.get-in-touch-form',
  ({ strapi }) => ({
    async create(ctx) {
      const response = await super.create(ctx);

      const { fullName, emailAddress, companyName, subject, message } =
        response.data ?? {};

      try {
        const notificationEmail =
          process.env.NOTIFICATION_EMAIL || process.env.SMTP_USERNAME;

        await strapi.service('plugin::email.email').send({
          to: notificationEmail,
          subject: `New Get In Touch Form Submission: ${subject || 'No Subject'}`,
          html: `
            <h2>New Get In Touch Form Submission</h2>
            <p><strong>Full Name:</strong> ${fullName || 'N/A'}</p>
            <p><strong>Email Address:</strong> ${emailAddress || 'N/A'}</p>
            <p><strong>Phone Number:</strong> ${companyName || 'N/A'}</p>
            <p><strong>How did you hear about us?:</strong> ${subject || 'N/A'}</p>
            <p><strong>Message:</strong> ${message || 'N/A'}</p>
          `,
        });
      } catch (error) {
        strapi.log.error('Failed to send get-in-touch-form email notification:', error);
      }

      return response;
    },
  })
);
