

interface ErrorMessage {
  [key: string]: string
}

const errorMessage: ErrorMessage = {
  required: 'The field is required',
  pattern: 'Email must be Valid',
  minlength: 'This field must be at leats 5 characters long.'
}


export function validatorErrorMessage( validatorName: string ): string{
  return errorMessage[validatorName] ?? ''
}


