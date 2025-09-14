import mongoose, { ObjectId, Schema } from 'mongoose';
import { IRegistration } from '../../domain/entities/registration.entity';

export interface IRegistrationModel
  extends Omit<IRegistration, 'id'>,
    Document {
  _id: ObjectId;
}

const registrationSchema = new Schema<IRegistrationModel>(
  {
    user_id: { type: String, required: true, ref: 'User' },
    event_id: { type: String, required: true, ref: 'Event' },
    role: {
      type: String,
      enum: ['participant', 'guest', 'judge'],
      required: true
    },
    qr_code: { type: String, required: true, unique: true },
    entry_ticket_status: {
      type: String,
      enum: ['valid', 'used'],
      required: true
    },
    food_coupons: {
      morning: {
        type: String,
        enum: ['available', 'claimed', 'not_applicable']
      },
      noon: {
        type: String,
        enum: ['available', 'claimed', 'not_applicable']
      },
      evening: {
        type: String,
        enum: ['available', 'claimed', 'not_applicable']
      }
    }
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
);

export const RegistrationModel = mongoose.model<IRegistrationModel>(
  'Registration',
  registrationSchema
);
