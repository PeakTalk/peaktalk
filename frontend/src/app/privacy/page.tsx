import { LegalSnapshotNotice } from '@/components/LegalSnapshotNotice';

export default function PrivacyPage() {
  return (
    <LegalSnapshotNotice title="Privacy notice">
      <p>
        The production privacy notice contains deployment-specific operator and
        processing details. It is not part of this public engineering snapshot.
      </p>
      <p>
        This page is a repository-safety placeholder and must be replaced with
        an approved jurisdiction-specific notice before any independent
        deployment.
      </p>
    </LegalSnapshotNotice>
  );
}
