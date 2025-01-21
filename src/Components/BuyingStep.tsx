// BuyingStep.js
import { Check } from 'phosphor-react'
import { Steps, StepsContent, StepsDescription, StepsItem, StepsPoint, StepsTitle } from 'keep-react'

export const BuyingStep = ({paymentVals,emailVals,AddressVals}) => {
  const paymentVal=paymentVals;
  const emailVal=emailVals;
  const AddressVal=AddressVals;
  
  const data = [
    {
      id: 1,
      title: 'Order Address',
      description: 'Enter your order address to proceed with the order.',
      isComplete: AddressVal,
    },
    {
      id: 2,
      title: 'Verify Email',
      description: 'Check email for a verification link to confirm your account.',
      isComplete: emailVal,
    },
    {
      id: 3,
      title: 'Payment',
      description: 'Complete your payment  to complete your order.',
      isComplete: paymentVal
    }
    
  ]
  return (
  <div className='my-7'>
      <Steps>
      {data.map((step) => (
        <StepsItem key={step.id}>
          <StepsPoint
            className="data-[completed=true]:bg-primary-500 data-[completed=true]:text-white"
            isComplete={step.isComplete}>
            <Check />
          </StepsPoint>
          <StepsContent>
            <StepsTitle>{step.title}</StepsTitle>
            <StepsDescription>{step.description}</StepsDescription>
          </StepsContent>
        </StepsItem>
      ))}
    </Steps>
  </div>
  )
}
