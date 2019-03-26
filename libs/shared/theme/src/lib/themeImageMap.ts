export interface ThemeImageConfig {
  existingHomepageNewBranding: ThemeImage;
  newHomepage: ThemeImage;
}

export const validFeatureFlags = ['existingHomepageNewBranding', 'newHomepage'];
export interface ThemeImage {
  image: ThemeImageKeyOld | ThemeImageKeyNew;
  hover: ThemeImageKeyOld | ThemeImageKeyNew;
  selected: ThemeImageKeyOld | ThemeImageKeyNew;
}

export enum ThemeImageKeyOld {
  FEMALE = '/assets/images/female.png',
  FEMALE_SELECTED = '/assets/images/female-hover.png',
  FEMALE_SINGLE = '/assets/images/female-single.png',
  FEMALE_SINGLE_SELECTED = '/assets/images/female-single-hover.png',
  MALE = '/assets/images/male.png',
  MALE_SELECTED = '/assets/images/male-hover.png',
  MALE_SINGLE = '/assets/images/male-single.png',
  MALE_SINGLE_SELECTED = '/assets/images/male-single-hover.png',
  MARRIED = '/assets/images/married.png',
  MARRIED_SELECTED = '/assets/images/married-hover.png',
  COMMITTED_RELATIONSHIP = '/assets/images/committed-relationship.png',
  COMMITTED_RELATIONSHIP_SELECTED = '/assets/images/committed-relationship-hover.png',
  JOINT_FINANCES = '/assets/images/finances-joint-white.png',
  JOINT_FINANCES_SELECTED = '/assets/images/finances-joint-hover.png',
  CAR = '/assets/images/Car-Mobile.png',
  CAR_SELECTED = '/assets/images/Car-Mobile-Click.png',
  CREDIT_CARD = '/assets/images/Credit-Card-Mobile.png',
  CREDIT_CARD_SELECTED = '/assets/images/Credit-Card-Mobile-Click.png',
  EDUCATION = '/assets/images/Education-Mobile.png',
  EDUCATION_SELECTED = '/assets/images/Education-Mobile-Click.png',
  MEDICAL = '/assets/images/Medical-Mobile.png',
  MEDICAL_SELECTED = '/assets/images/Medical-Mobile-Click.png',
  OTHER = '/assets/images/Other-Mobile.png',
  OTHER_SELECTED = '/assets/images/Other-Mobile-Click.png',
  NON_GENDER = '/assets/images/non-gender.png',
  NON_GENDER_SELECTED = '/assets/images/non-gender-selected.png'
}

export enum ThemeImageKeyNew {
  FEMALE = '/assets/images/theme/thriveTogether/female.png',
  FEMALE_SELECTED = '/assets/images/theme/thriveTogether/female-hover.png',
  FEMALE_SINGLE = '/assets/images/theme/thriveTogether/female-single.png',
  FEMALE_SINGLE_SELECTED = '/assets/images/theme/thriveTogether/female-single-hover.png',
  MALE = '/assets/images/theme/thriveTogether/male.png',
  MALE_SELECTED = '/assets/images/theme/thriveTogether/male-hover.png',
  MALE_SINGLE = '/assets/images/theme/thriveTogether/male-single.png',
  MALE_SINGLE_SELECTED = '/assets/images/theme/thriveTogether/male-single-hover.png',
  MARRIED = '/assets/images/theme/thriveTogether/married.png',
  MARRIED_SELECTED = '/assets/images/theme/thriveTogether/married-hover.png',
  COMMITTED_RELATIONSHIP = '/assets/images/theme/thriveTogether/committed-relationship.png',
  COMMITTED_RELATIONSHIP_SELECTED = '/assets/images/theme/thriveTogether/committed-relationship-hover.png',
  JOINT_FINANCES = '/assets/images/theme/thriveTogether/finances-joint.png',
  JOINT_FINANCES_SELECTED = '/assets/images/theme/thriveTogether/finances-joint-hover.png',
  CAR = '/assets/images/theme/thriveTogether/car.png',
  CAR_SELECTED = '/assets/images/theme/thriveTogether/car-selected.png',
  CREDIT_CARD = '/assets/images/theme/thriveTogether/credit-card.png',
  CREDIT_CARD_SELECTED = '/assets/images/theme/thriveTogether/credit-card-selected.png',
  EDUCATION = '/assets/images/theme/thriveTogether/education.png',
  EDUCATION_SELECTED = '/assets/images/theme/thriveTogether/education-selected.png',
  MEDICAL = '/assets/images/theme/thriveTogether/medical.png',
  MEDICAL_SELECTED = '/assets/images/theme/thriveTogether/medical-selected.png',
  OTHER = '/assets/images/theme/thriveTogether/other.png',
  OTHER_SELECTED = '/assets/images/theme/thriveTogether/other-selected.png',
  NON_GENDER = '/assets/images/theme/thriveTogether/non-gender.png',
  NON_GENDER_SELECTED = '/assets/images/theme/thriveTogether/non-gender-selected.png'
}

export const Female: ThemeImageConfig = {
  existingHomepageNewBranding: {
    image: ThemeImageKeyNew.FEMALE,
    hover: ThemeImageKeyNew.FEMALE_SELECTED,
    selected: ThemeImageKeyNew.FEMALE_SELECTED
  },
  newHomepage: {
    image: ThemeImageKeyNew.FEMALE,
    hover: ThemeImageKeyNew.FEMALE_SELECTED,
    selected: ThemeImageKeyNew.FEMALE_SELECTED
  }
};

export const FemaleSingle: ThemeImageConfig = {
  existingHomepageNewBranding: {
    image: ThemeImageKeyNew.FEMALE_SINGLE,
    hover: ThemeImageKeyNew.FEMALE_SINGLE_SELECTED,
    selected: ThemeImageKeyNew.FEMALE_SINGLE_SELECTED
  },
  newHomepage: {
    image: ThemeImageKeyNew.FEMALE_SINGLE,
    hover: ThemeImageKeyNew.FEMALE_SINGLE_SELECTED,
    selected: ThemeImageKeyNew.FEMALE_SINGLE_SELECTED
  }
};

export const Male: ThemeImageConfig = {
  existingHomepageNewBranding: {
    image: ThemeImageKeyNew.MALE,
    hover: ThemeImageKeyNew.MALE_SELECTED,
    selected: ThemeImageKeyNew.MALE_SELECTED
  },
  newHomepage: {
    image: ThemeImageKeyNew.MALE,
    hover: ThemeImageKeyNew.MALE_SELECTED,
    selected: ThemeImageKeyNew.MALE_SELECTED
  }
};

export const MaleSingle: ThemeImageConfig = {
  existingHomepageNewBranding: {
    image: ThemeImageKeyNew.MALE_SINGLE,
    hover: ThemeImageKeyNew.MALE_SINGLE_SELECTED,
    selected: ThemeImageKeyNew.MALE_SINGLE_SELECTED
  },
  newHomepage: {
    image: ThemeImageKeyNew.MALE_SINGLE,
    hover: ThemeImageKeyNew.MALE_SINGLE_SELECTED,
    selected: ThemeImageKeyNew.MALE_SINGLE_SELECTED
  }
};

export const Married: ThemeImageConfig = {
  existingHomepageNewBranding: {
    image: ThemeImageKeyNew.MARRIED,
    hover: ThemeImageKeyNew.MARRIED_SELECTED,
    selected: ThemeImageKeyNew.MARRIED_SELECTED
  },
  newHomepage: {
    image: ThemeImageKeyNew.MARRIED,
    hover: ThemeImageKeyNew.MARRIED_SELECTED,
    selected: ThemeImageKeyNew.MARRIED_SELECTED
  }
};

export const CommittedRelationship: ThemeImageConfig = {
  existingHomepageNewBranding: {
    image: ThemeImageKeyNew.COMMITTED_RELATIONSHIP,
    hover: ThemeImageKeyNew.COMMITTED_RELATIONSHIP_SELECTED,
    selected: ThemeImageKeyNew.COMMITTED_RELATIONSHIP_SELECTED
  },
  newHomepage: {
    image: ThemeImageKeyNew.COMMITTED_RELATIONSHIP,
    hover: ThemeImageKeyNew.COMMITTED_RELATIONSHIP_SELECTED,
    selected: ThemeImageKeyNew.COMMITTED_RELATIONSHIP_SELECTED
  }
};

export const JointFinances: ThemeImageConfig = {
  existingHomepageNewBranding: {
    image: ThemeImageKeyNew.JOINT_FINANCES,
    hover: ThemeImageKeyNew.JOINT_FINANCES_SELECTED,
    selected: ThemeImageKeyNew.JOINT_FINANCES_SELECTED
  },
  newHomepage: {
    image: ThemeImageKeyNew.JOINT_FINANCES,
    hover: ThemeImageKeyNew.JOINT_FINANCES_SELECTED,
    selected: ThemeImageKeyNew.JOINT_FINANCES_SELECTED
  }
};

export const Car: ThemeImageConfig = {
  existingHomepageNewBranding: {
    image: ThemeImageKeyNew.CAR,
    hover: ThemeImageKeyNew.CAR_SELECTED,
    selected: ThemeImageKeyNew.CAR_SELECTED
  },
  newHomepage: {
    image: ThemeImageKeyNew.CAR,
    hover: ThemeImageKeyNew.CAR_SELECTED,
    selected: ThemeImageKeyNew.CAR_SELECTED
  }
};

export const CreditCard: ThemeImageConfig = {
  existingHomepageNewBranding: {
    image: ThemeImageKeyNew.CREDIT_CARD,
    hover: ThemeImageKeyNew.CREDIT_CARD_SELECTED,
    selected: ThemeImageKeyNew.CREDIT_CARD_SELECTED
  },
  newHomepage: {
    image: ThemeImageKeyNew.CREDIT_CARD,
    hover: ThemeImageKeyNew.CREDIT_CARD_SELECTED,
    selected: ThemeImageKeyNew.CREDIT_CARD_SELECTED
  }
};

export const Education: ThemeImageConfig = {
  existingHomepageNewBranding: {
    image: ThemeImageKeyNew.EDUCATION,
    hover: ThemeImageKeyNew.EDUCATION_SELECTED,
    selected: ThemeImageKeyNew.EDUCATION_SELECTED
  },
  newHomepage: {
    image: ThemeImageKeyNew.EDUCATION,
    hover: ThemeImageKeyNew.EDUCATION_SELECTED,
    selected: ThemeImageKeyNew.EDUCATION_SELECTED
  }
};

export const Medical: ThemeImageConfig = {
  existingHomepageNewBranding: {
    image: ThemeImageKeyNew.MEDICAL,
    hover: ThemeImageKeyNew.MEDICAL_SELECTED,
    selected: ThemeImageKeyNew.MEDICAL_SELECTED
  },
  newHomepage: {
    image: ThemeImageKeyNew.MEDICAL,
    hover: ThemeImageKeyNew.MEDICAL_SELECTED,
    selected: ThemeImageKeyNew.MEDICAL_SELECTED
  }
};

export const Other: ThemeImageConfig = {
  existingHomepageNewBranding: {
    image: ThemeImageKeyNew.OTHER,
    hover: ThemeImageKeyNew.OTHER_SELECTED,
    selected: ThemeImageKeyNew.OTHER_SELECTED
  },
  newHomepage: {
    image: ThemeImageKeyNew.OTHER,
    hover: ThemeImageKeyNew.OTHER_SELECTED,
    selected: ThemeImageKeyNew.OTHER_SELECTED
  }
};

export const NonGender: ThemeImageConfig = {
  existingHomepageNewBranding: {
    image: ThemeImageKeyNew.NON_GENDER,
    hover: ThemeImageKeyNew.NON_GENDER_SELECTED,
    selected: ThemeImageKeyNew.NON_GENDER_SELECTED
  },
  newHomepage: {
    image: ThemeImageKeyNew.NON_GENDER,
    hover: ThemeImageKeyNew.NON_GENDER_SELECTED,
    selected: ThemeImageKeyNew.NON_GENDER_SELECTED
  }
};

export const themeImageMap: { [id: string]: ThemeImageConfig } = {
  [ThemeImageKeyOld.FEMALE]: Female,
  [ThemeImageKeyOld.FEMALE_SELECTED]: Female,
  [ThemeImageKeyOld.MALE]: Male,
  [ThemeImageKeyOld.MALE_SELECTED]: Male,
  [ThemeImageKeyOld.MARRIED]: Married,
  [ThemeImageKeyOld.MARRIED_SELECTED]: Married,
  [ThemeImageKeyOld.FEMALE_SINGLE]: FemaleSingle,
  [ThemeImageKeyOld.FEMALE_SINGLE_SELECTED]: FemaleSingle,
  [ThemeImageKeyOld.MALE_SINGLE]: MaleSingle,
  [ThemeImageKeyOld.MALE_SINGLE_SELECTED]: MaleSingle,
  [ThemeImageKeyOld.COMMITTED_RELATIONSHIP]: CommittedRelationship,
  [ThemeImageKeyOld.COMMITTED_RELATIONSHIP_SELECTED]: CommittedRelationship,
  [ThemeImageKeyOld.JOINT_FINANCES]: JointFinances,
  [ThemeImageKeyOld.JOINT_FINANCES_SELECTED]: JointFinances,
  [ThemeImageKeyOld.CAR]: Car,
  [ThemeImageKeyOld.CAR_SELECTED]: Car,
  [ThemeImageKeyOld.CREDIT_CARD]: CreditCard,
  [ThemeImageKeyOld.CREDIT_CARD_SELECTED]: CreditCard,
  [ThemeImageKeyOld.EDUCATION]: Education,
  [ThemeImageKeyOld.EDUCATION_SELECTED]: Education,
  [ThemeImageKeyOld.MEDICAL]: Medical,
  [ThemeImageKeyOld.MEDICAL_SELECTED]: Medical,
  [ThemeImageKeyOld.OTHER]: Other,
  [ThemeImageKeyOld.OTHER_SELECTED]: Other,
  [ThemeImageKeyOld.NON_GENDER]: NonGender,
  [ThemeImageKeyOld.NON_GENDER_SELECTED]: NonGender
};
