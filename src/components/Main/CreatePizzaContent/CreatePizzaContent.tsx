import CreatePizzaContentFrstStep from './CreatePizzaContentFrstStep/CreatePizzaContentFrstStep'
import CreatePizzaContentSecondStep from './CreatePizzaContentScdStep/CreatePizzaContentScdStep'
interface CreatePizzaContentProps {
	step: number
	setStep: (step: number) => void
}
const CreatePizzaContent: React.FC<CreatePizzaContentProps> = ({
	step,
	setStep,
}) => {
	return (
		<>
			{step === 1 && <CreatePizzaContentFrstStep setStep={setStep} />}
			{step === 2 && <CreatePizzaContentSecondStep />}
		</>
	)
}
export default CreatePizzaContent
