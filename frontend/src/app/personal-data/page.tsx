import { LegalSnapshotNotice } from '@/components/LegalSnapshotNotice';

export default function PersonalDataPage() {
  return (
    <LegalSnapshotNotice title="Personal-data terms">
      <p>
        Production operator details and consent language are intentionally
        excluded from this sanitized review repository.
      </p>
      <p>
        This placeholder is not legal advice and is not sufficient for a
        deployed service. A deployment must provide its own reviewed terms.
      </p>
    </LegalSnapshotNotice>
  );
}
