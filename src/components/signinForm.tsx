'use client';
import { FC, useState } from 'react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import { cn } from '@/lib/utils';
import { signIn } from 'next-auth/react';
import { Github, Mail } from 'lucide-react';
import UserAuthForm from './UserAuthForm';

interface SigninFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const SigninForm: FC<SigninFormProps> = ({ className, ...props }) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginWithGitHub = async () => {
    setIsLoading(true);
    try {
      await signIn('github');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'There was an error logging in with Google',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn('google');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'There was an error logging in with google',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex flex-col gap-y-32">
      {/* <UserAuthForm /> */}
      <div className="flex flex-col gap-y-2 text-center">
        <h1 className="text-heading">Hi there!👋</h1>
        <h3 className="text-body">
          Elevate your online experience. Sign in effortlessly and explore a universe of
          possibilities.
        </h3>
      </div>
      <div className={cn('flex flex-col justify-center gap-y-4', className)} {...props}>
        <Button
          isLoading={isLoading}
          type="button"
          className="w-full bg-slate-800 ring-offset-slate-800 hover:bg-slate-700"
          onClick={loginWithGitHub}
          disabled={isLoading}
        >
          <Github className="mr-2" />
          Signin With GitHub
        </Button>
        <Button
          isLoading={isLoading}
          type="button"
          className="w-full"
          onClick={loginWithGoogle}
          disabled={isLoading}
          variant={'destructive'}
        >
          <Mail className="mr-2" /> Sign In With Google
        </Button>
      </div>
    </div>
  );
};

export default SigninForm;
