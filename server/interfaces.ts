interface ProfileData {
  profileImage: string;
  fullName: string;
  personalBio: string;
  brandDeal: string;
}

interface Contact {
  email: string;
  phone: number;
}

interface Offer {
  sender: string;
  contactInfo: Contact;
  received: Date;
  details: string;
  type: string;
  deadline: Date;
}

interface Transaction {
  title: string;
  amount: Number;
  currency: string;
  date: Date;
}

interface Sponsor {
  name: string;
  contactInfo: Contact;
  startDate: Date;
  transactionHistory: Transaction[];
  dealType: string;
}

interface Settings {
  colorTheme: string;
  mode: string;
}

interface User {
  profile: ProfileData;
  offers: Offer[];
  sponsors: Sponsor[];
  settings: Settings;
}
