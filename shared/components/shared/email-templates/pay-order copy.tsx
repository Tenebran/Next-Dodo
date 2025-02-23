import * as React from 'react';

interface EmailTemplateProps {
  orderId: number;
  totalAmount: number;
  paymentUrl: string;
}

export const PayOrderTamplate: React.FC<EmailTemplateProps> = ({
  orderId,
  totalAmount,
  paymentUrl,
}) => (
  <div>
    <h1>Bestellung Nr. ${orderId}</h1>
    <p>
      Bitte bezahlen Sie die Bestellung in Höhe von <b>${totalAmount} €</b>. Gehen Sie
      <a href={paymentUrl}>über diesen Link</a>, um die Bestellung zu bezahlen.
    </p>
  </div>
);
