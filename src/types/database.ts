export interface UserProfile {
  id?: string;
  name: string;
  email: string;
  institution: string;
  role: 'student' | 'faculty' | 'industry';
  created_at?: string;
}

export interface PaperSubmission {
  id?: string;
  user_email: string;
  title: string;
  abstract: string;
  file_url?: string; // Link to uploaded PDF
  status: 'submitted' | 'on_review' | 'accepted' | 'rejected';
  created_at?: string;
}

export interface RegistrationDetails {
  id?: string;
  user_email: string;
  amount_paid: number;
  transaction_id?: string;
  payment_status: 'pending' | 'verified' | 'failed';
  created_at?: string;
}
