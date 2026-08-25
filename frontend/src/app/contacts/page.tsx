import { LegalSnapshotNotice } from '@/components/LegalSnapshotNotice';

export default function ContactsPage() {
  return (
    <LegalSnapshotNotice title="Contact information">
      <p>
        Operator and personal contact details are intentionally excluded from
        this sanitized review repository.
      </p>
      <p>
        Security concerns should be reported through GitHub Private
        Vulnerability Reporting. General project context is available from the
        repository owner profile.
      </p>
    </LegalSnapshotNotice>
  );
}
