export interface FoodOptions {
  morning?: boolean;
  noon?: boolean;
  evening?: boolean;
}

export interface IEvent {
  id: string;
  organizer_id: string;
  title: string;
  description: string;
  location: string;
  floor_details?: string;
  date: Date;
  is_paid: boolean;
  price?: number;
  food_available: boolean;
  food_options?: FoodOptions;
  max_tickets: number;
  created_at: Date;
  updated_at: Date;
}
