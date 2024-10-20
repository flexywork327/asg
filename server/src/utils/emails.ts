import nodemailer, { TransportOptions } from 'nodemailer';
import fs from 'fs';
import path from 'path';
import AppConfig from '../config';

export const sendHtmlEmail = async (
  email: string,
  subject: string,
  htmlContent: string
) => {
  try {
    console.log(email, subject, htmlContent);

    const transporter = nodemailer.createTransport({
      host: 'smtp.titan.email',
      port: 465,
      secure: true,
      logger: true,
      tls: {
        rejectUnauthorized: false,
        minVersion: 'TLSv1.2',
      },
      auth: {
        user: AppConfig.email.user,
        pass: AppConfig.email.password,
      },
    } as TransportOptions);

    // custom mail options
    await transporter.sendMail({
      from: AppConfig.email.user,
      to: email,
      subject: subject,
      html: htmlContent,
    });

    console.log('Email sent successfully');
  } catch (error) {
    console.log('email error', error);
  }
};

export const getHtmlContent = (code: any, template_name: string) => {
  // Read the HTML file
  const htmlPath = path.join(__dirname, template_name);
  let htmlContent = fs.readFileSync(htmlPath, 'utf8');

  // Replace the placeholder with the actual code
  htmlContent = htmlContent.replace('$(code)', code);

  return htmlContent;
};

export const getRegisterHtmlContent = (name: any, level: any, link: any) => {
  // Read the HTML file
  const htmlPath = path.join(
    __dirname,
    '../views/templates/register-template.html'
  );
  let htmlContent = fs.readFileSync(htmlPath, 'utf8');

  // Replace the placeholder with the actual code
  htmlContent = htmlContent
    .replace('$(name)', name)
    .replace('$(level)', level)
    .replace('$(url)', link);

  return htmlContent;
};

// send reservation email
export const sendReservationEmail = async (
  email: string,
  name: string,
  date: string,
  car_type: string,
  time: string
) => {
  // Read the HTML file
  const htmlPath = path.join(
    __dirname,
    '../views/templates/reservation-template.html'
  );
  let htmlContent = fs.readFileSync(htmlPath, 'utf8');

  // Replace the placeholder with the actual code
  htmlContent = htmlContent
    .replace('$(customer_name)', name)
    .replace('$(car_type)', car_type)
    .replace('$(date)', date)
    .replace('$(time)', time);

  await sendHtmlEmail(email, AppConfig.email.reservation, htmlContent);
};

// send reservation reminder email
export const sendReservationReminderEmail = async (
  email: string,
  name: string,
  date: string,
  car_type: string,
  time: string
) => {
  // Read the HTML file
  const htmlPath = path.join(
    __dirname,
    '../views/templates/reservation-reminder-template.html'
  );
  let htmlContent = fs.readFileSync(htmlPath, 'utf8');

  // Replace the placeholder with the actual code
  htmlContent = htmlContent
    .replace('$(customer_name)', name)
    .replace('$(car_type)', car_type)
    .replace('$(date)', date)
    .replace('$(time)', time);

  await sendHtmlEmail(email, AppConfig.email.reminder, htmlContent);
};
module.exports = {
  sendReservationReminderEmail,
  getRegisterHtmlContent,
  sendReservationEmail,
  getHtmlContent,
  sendHtmlEmail,
};
