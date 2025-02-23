'use server';

export const sendEmail = async (
  to: string,
  subject: string,
  template: React.ReactNode | Promise<React.ReactNode>
) => {
  if (typeof window !== 'undefined') {
    throw new Error('sendEmail can only be executed on the server');
  }

  const { default: sgMail } = await import('@sendgrid/mail');

  sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

  const { renderToStaticMarkup } = await import('react-dom/server');

  const resolvedTemplate = await template;
  const htmlContent = renderToStaticMarkup(resolvedTemplate);

  const msg = {
    to,
    from: process.env.SENDGRID_SENDER_EMAIL!,
    subject,
    html: htmlContent,
    headers: {
      'X-Mailer': 'Next Dodo App',
    },
  };

  await sgMail.send(msg);
};
