const AppConfig = {
  port: 5000,
  frontend_url: 'http://localhost:5173',
  backend_url: 'http://localhost:5000',
  db: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: process.env.DB_PASS || 'password',
    database: process.env.DB_NAME || 'postgres',
  },
  email: {
    user: process.env.GOOGLE_USER,
    password: process.env.GOOGLE_PASSWORD,
    registerStaff_Title: ' New Staff Registration',
    loginStaff_Title: ' OTP Code',
    resetStaffPassword_Title: ' Reset Password',
    resendOTP_Title: ' Resend OTP',
    reservation: 'Reservation Confirmation',
    reminder: 'Reservation Reminder',
  },
  jwtSecret: process.env.JWT_SECRET || 'secret',
};

export default AppConfig;
