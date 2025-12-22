export interface SnackBarVariantProps {
  variant?: 'default' | 'dark' | 'light' | 'super_large' | 'compact';
}

export interface SnackBarProps extends SnackBarVariantProps {
  id?: string;
  message?: string;
  announcements?: Announcement[];
  closable?: boolean;
  classNames: SnackBarClasses;
}

export interface Announcement {
  overline?: string;
  message: string;
}

export interface SnackBarClasses {
  root: string;
  container: string;
  content: string;
  overline: string;
  message: string;
  close: string;
}
