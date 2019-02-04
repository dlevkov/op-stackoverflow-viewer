// Generated by https://quicktype.io

export interface DataModel {
  items: DataModelItem[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}

export interface DataModelItem {
  tags: string[];
  owner: Owner;
  is_answered: boolean;
  view_count: number;
  protected_date?: number;
  accepted_answer_id?: number;
  answer_count: number;
  score: number;
  last_activity_date: number;
  creation_date: number;
  last_edit_date?: number;
  question_id: number;
  link: string;
  title: string;
  closed_date?: number;
  closed_reason?: string;
}

export interface Owner {
  reputation?: number;
  user_id?: number;
  user_type: UserType;
  accept_rate?: number;
  profile_image?: string;
  display_name: string;
  link?: string;
}

export enum UserType {
  DoesNotExist = 'does_not_exist',
  Registered = 'registered',
  Unregistered = 'unregistered',
}