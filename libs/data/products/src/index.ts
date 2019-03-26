export interface Product {
  ID: string;
  TITLE: string;
  DESCRIPTION: string;
  LINK: string;
}

export const PRODUCTS: Product[] = [
  {
    ID: 'life_insurance',
    TITLE: 'Life Insurance',
    DESCRIPTION:
      'No matter what happens, you want your family to be protected and taken care of. The benefits of life insurance can be a critical part of that peace of mind.',
    LINK: 'https://www.thrivent.com/products/insurance/life-insurance/'
  },
  {
    ID: 'disability_insurance',
    TITLE: 'Disability Insurance',
    DESCRIPTION:
      'Imagine the stress and chaos that a serious illness or injury could bring to your day-to-day life. If you are not able to work for an extended period, disability insurance can help pay a portion of your income. Learn more about how to protect your paycheck.',
    LINK: 'https://www.thrivent.com/products/insurance/disability-income-insurance/'
  },
  {
    ID: 'long_term_care_insurance',
    TITLE: 'Long Term Care Insurance',
    DESCRIPTION:
      'If you should develop a chronic medical condition, disability or disorder such as Alzheimer’s, long term care insurance protects your family and helps cover the costs of care.',
    LINK: 'https://www.thrivent.com/products/insurance/long-term-care-insurance/'
  },
  {
    ID: 'medicare_supplement',
    TITLE: 'Medicare Supplement',
    DESCRIPTION:
      'Help cover the out-of-pocket expenses that Medicare doesn’t with a Medicare supplement plan. Learn more about how this insurance works and why open enrollment dates are so important.',
    LINK: 'https://www.thrivent.com/products/insurance/medicare-supplement-insurance/'
  },
  {
    ID: 'annuities',
    TITLE: 'Annuities',
    DESCRIPTION:
      'Turn your retirement assets into a steady stream of income when you need it with an annuity. Make preparing for retirement more flexible and learn more about annuity plans.',
    LINK: 'https://www.thrivent.com/products/annuities/'
  },
  {
    ID: 'iras',
    TITLE: 'IRAs',
    DESCRIPTION:
      'An Individual Retirement Account (IRA) is a tax-advantaged way to save for retirement. Learn more about the two different types – traditional and Roth – and which one is right for you.',
    LINK: 'https://www.thrivent.com/products/individual-retirement-accounts/'
  },
  {
    ID: 'investments',
    TITLE: 'Investments',
    DESCRIPTION:
      'No matter where you are on your investment journey, we have a wide variety of resources and offerings to help you along the way. Learn more about all the investment options Thrivent offers.',
    LINK: 'https://www.thrivent.com/products/investments/'
  },
  {
    ID: 'mutual_funds',
    TITLE: 'Mutual Funds',
    DESCRIPTION:
      'If you have specific needs when it comes to mutual funds, we’ve got plenty of options. Find out more about how Thrivent mutual funds can meet your unique needs and grow with you far into the future.',
    LINK: 'https://www.thriventfunds.com/mutual-funds.html'
  },
  {
    ID: 'thrivent_federal_credit_union',
    TITLE: 'Thrivent Federal Credit Union',
    DESCRIPTION:
      'More than a credit union, TFCU offers a wide variety of tools to help improve your finances - not just manage them. TFCU also offers exclusive benefits such as part-ownership, access to Thrivent Financial Action Team opportunities, and more.',
    LINK: 'https://www.thriventcu.com/'
  },
  {
    ID: 'student_loan_refi',
    TITLE: 'Student Loan Refi',
    DESCRIPTION:
      'One loan, one monthly payment. Wouldn’t that make your life easier? Combine your undergrad and grad school loans – both federal and private – into one payment with the Thrivent Education Refi Loan.',
    LINK: 'https://www.thriventcu.com/explore/pay-for-college/refinance-a-student-loan/'
  },
  {
    ID: 'trust_and_wealth_management',
    TITLE: 'Trust and Wealth Management',
    DESCRIPTION:
      'Whether you are worried about your own finances or managing an elderly parent’s assets, Thrivent Trust Company offers innovative solutions to help you protect what you love.',
    LINK: 'https://www.thrivent.com/thrivent-trust/'
  }
];
