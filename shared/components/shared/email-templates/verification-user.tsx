import React from 'react';

interface Props {
  code: string;
}

export const VerificationUserTemplate: React.FC<Props> = ({ code }) => (
  <div>
    <p>
      Bestätigungscode: <h2>{code}</h2>
    </p>

    <p>
      <a href={`${process.env.NEXT_PUBLIC_APP_URL}/api/auth/verify?code=${code}`}>
        Registrierung bestätigen
      </a>
    </p>
  </div>
);
