export type InvitationRole = 'guest' | 'judge';
export type InvitationStatus = 'pending' | 'accepted' | 'rejected';

export interface IInvitation {
  id: string;
  event_id: string;
  email: string;
  role: InvitationRole;
  status: InvitationStatus;
  token: string;
  invited_at: Date;
  responded_at?: Date;
}
