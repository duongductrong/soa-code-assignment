export interface Page {
  id: string;
  language: string;
  head_menu: string[];
  banner_title: string[];
  banner_menu: string[];
  bloc_1: {
    title: string;
    subtitle: string;
    cases: {
      category: string;
      tagline: string;
      description: string;
      cta: string;
    }[];
  };
  bloc_2: {
    title: string;
    cases: string[];
  };
  bloc_2_2: {
    title: string;
    btn_1: string[];
    btn_2: string[];
    btn_3: string;
    btn_4: string[];
    btn_5: string;
    btn_6: string;
  };
  bloc_3: {
    title: string;
    more_info: string;
    cases: {
      category: string;
      tagline: string;
      description: string;
    }[];
  };
  carte_point: {
    name: string;
    website: string;
    address: string;
    coordinates?: {
      latitude: string;
      longitude: string;
    };
    phone: string | string[];
    free_call?: string;
    fax?: string;
    email?: string;
    activities: string[];
    marker_information: string[];
  }[];
  bloc_4: {
    title: string;
    subtitle: string;
    text_title: string;
    text: string;
    pictos: {
      title: string;
      description: string;
    }[];
  };
  bloc_5: {
    title: string;
    text: string;
    reviews: {
      author: string;
      review: string;
      date: string;
    }[];
    footer: string;
  };
  bloc_6: {
    title: string;
    subtitle: string;
    text: string;
    button: string;
  };
  footer: {
    address: {
      name: string;
      phone: string;
      location: string;
    };
    links: {
      name: string;
      url: string;
    }[];
  };
}
