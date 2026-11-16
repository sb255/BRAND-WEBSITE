1. User clicks **Send OTP**.
2. React calls the backend endpoint `/api/otp/send`.
3. AWS SNS sends the OTP to the user's mobile number.
4. The OTP input field becomes visible.
5. User enters the OTP and clicks **Verify OTP and Submit Form**.
6. React calls the backend endpoint `/api/otp/verify`.
7. Backend verifies the OTP and returns a verification token.
8. React submits the form along with the verification token.
9. Backend validates the token and saves the form data in the database.