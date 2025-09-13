import mongoose, { Document, ObjectId, Schema } from 'mongoose';
import { IInvitation } from '../../../../domain/entities/invitation.entity';

export interface IInvitationModel extends Omit<IInvitation, 'id'>, Document {
  _id: ObjectId;
}

const invitationSchema = new Schema<IInvitationModel>(
  {
    event_id: { type: String, required: true, ref: 'Event' },
    email: { type: String, required: true },
    role: { type: String, enum: ['guest', 'judge'], required: true },
    status: {
      type: String,
      enum: ['pending', 'accepted', 'rejected'],
      default: 'pending',
      required: true
    },
    token: { type: String, required: true, unique: true },
    invited_at: { type: Date, required: true, default: Date.now },
    responded_at: { type: Date }
  },
  {
    timestamps: { createdAt: 'invited_at', updatedAt: 'responded_at' }
  }
);

export const InvitationModel = mongoose.model<IInvitationModel>(
  'Invitation',
  invitationSchema
);
