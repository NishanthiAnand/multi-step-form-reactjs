export const formSchema = [
  {
    element: 'Step1',
    stepCount: '1',
    stepName: 'Name',
    fields: [
      {
        id: "firstName",
        type: "text",
        props: {
          label: 'First Name',
          name: 'firstName'
        }
      },
      {
        id: "lastName",
        type: "text",
        props: {
          label: 'Last Name',
          name: 'lastName'
        }
      }
    ]
  },
  {
    element: 'Step2',
    stepCount: '2',
    stepName: 'Contact',
    fields: [
      {
        id: "email",
        type: "text",
        props: {
          label: 'Email',
          name: 'email'
        }
      },
      {
        id: "phoneNumber",
        type: "text",
        props: {
          label: 'Phone Number',
          name: 'phoneNumber'
        }
      }
    ]
  },
  {
    element: 'Step3',
    stepCount: '3',
    stepName: 'Additional Information',
    fields: [
      {
        id: "isAustralian",
        type: "select",
        props: {
          label: 'Are you a permanent resident of Australia?',
          name: 'isAustralian'
        }
      }
    ]
  },
  {
    element: 'Step4',
    stepCount: '4',
    stepName: 'Summary',
    fields: []
  }
]
