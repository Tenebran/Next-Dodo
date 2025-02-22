import { InfoBlock } from '@/shared/components/shared';

export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-40">
      <InfoBlock
        title="Zugriff verweigert"
        text="Diese Seite ist nur für angemeldete Benutzer zugänglich"
        imageUrl="/assets/images/lock.png"
      />
    </div>
  );
}
