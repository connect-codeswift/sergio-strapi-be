/**
 * contact-us-form controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController(
  'api::contact-us-form.contact-us-form',
  ({ strapi }) => ({
    async create(ctx) {
      const response = await super.create(ctx);

      const { fullName, emailAddress, companyName, phoneNumber, Description } =
        response.data ?? {};

      try {
        const notificationEmail =
          process.env.NOTIFICATION_EMAIL || process.env.SMTP_USERNAME;

        await strapi.service('plugin::email.email').send({
          to: notificationEmail,
          subject: 'New Contact Us Form Submission',
          html: `
            <h2>New Contact Us Form Submission</h2>
            <p><strong>Full Name:</strong> ${fullName || 'N/A'}</p>
            <p><strong>Email Address:</strong> ${emailAddress || 'N/A'}</p>
            <p><strong>Company Name:</strong> ${companyName || 'N/A'}</p>
            <p><strong>Phone Number:</strong> ${phoneNumber || 'N/A'}</p>
            <p><strong>Description:</strong> ${Description || 'N/A'}</p>
          `,
        });
      } catch (error) {
        strapi.log.error('Failed to send contact-us-form email notification:', error);
      }

      return response;
    },
  })
);
