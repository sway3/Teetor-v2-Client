import Progress from '@/components/UserForm/Progress';
import UserForm from '@/components/UserForm/UserForm';

export default function SignUpPage() {
  return (
    <div className="h-full px-7 py-16">
      <h1 className="text-4xl font-semibold">Sign Up</h1>
      <p className="mt-3 text-sm/4 text-gray-500">
        Please fill out additional information to start matching with your
        mentee / mentor.
      </p>
      <Progress />
    </div>
  );
}
