import Button from '../../components/Button/Button';
import FormHeader from '../../components/FormHeader/FormHeader';
import NumberField from '../../components/NumberField/NumberField';
import AuthPageLayout from '../../layouts/AuthPageLayout/AuthPageLayout';

export default function SetupTransaction() {
  const arr = Array.from(Array(6).keys());

  return (
    <AuthPageLayout>
      <FormHeader className="mb-5">Set Up Transaction PIN</FormHeader>
      <p className="mb-12">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error hic
        eligendi fuga, asperiores saepe maiores eius. Hic, a adipisci? Neque.
      </p>
      <div className="flex gap-8 mb-12">
        {arr.map((_, i) => {
          return <NumberField key={i} />;
        })}
      </div>
      <Button className="py-6">Save & Continue</Button>
    </AuthPageLayout>
  );
}
