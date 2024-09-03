'use client';

import { googleOAuthReq } from '@/apis/authAPIs';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { useEffect } from 'react';

declare global {
  interface Window {
    handleToken?: any;
  }
}

export default function GSIButton() {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (payload: Response) => {
      return googleOAuthReq(payload);
    },
    onSuccess: () => {
      router.push('/dashboard');
    },
    onError: () => {
      router.push(`/signup`);
    },
  });

  useEffect(() => {
    window.handleToken = (payload: Response) => {
      mutation.mutate(payload);
    };
  }, []);

  return (
    <div>
      <div
        id="g_id_onload"
        data-client_id={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
        data-context="signin"
        data-ux_mode="popup"
        data-callback="handleToken"
        data-itp_support="true"
      />
      <button className="flex items-center justify-center">
        <div
          className="g_id_signin"
          data-type="standard"
          data-shape="pill"
          data-theme="outline"
          data-text="signin_with"
          data-size="large"
          data-logo_alignment="left"
        />
      </button>
    </div>
  );
}
