export type TicketStatus = 'valid' | 'used';
export type FoodStatus = 'available' | 'claimed' | 'not_applicable';
export type UserEventRole = 'participant' | 'guest' | 'judge';

export interface IRegistration {
  id: string;
  user_id: string;
  event_id: string;
  role: UserEventRole;
  qr_code: string;
  entry_ticket_status: TicketStatus;
  food_coupons: {
    morning?: FoodStatus;
    noon?: FoodStatus;
    evening?: FoodStatus;
  };
  created_at: Date;
  updated_at: Date;
}
