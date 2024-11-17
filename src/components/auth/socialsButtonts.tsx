import React from 'react';
import { Button } from "@/components/ui/button";
import { signinGithub, signinGoogle } from '@/lib/social/client';
import { GitHubIcon, GoogleIcon, MicrosoftIcon, TwitterXIcon } from '../../../public/icons/icons';


export default function SocialButtons() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button onClick={signinGoogle} className="flex-1" variant="outline" aria-label="Login with Google" size="icon">
        <GoogleIcon />
      </Button>
      <Button className="flex-1" variant="outline" aria-label="Login with Microsoft" size="icon">
        <MicrosoftIcon />
      </Button>
      <Button className="flex-1" variant="outline" aria-label="Login with X" size="icon">
        <TwitterXIcon />
      </Button>
      <Button onClick={signinGithub} className="flex-1" variant="outline" aria-label="Login with GitHub" size="icon">
        <GitHubIcon />
      </Button>
    </div>
  );
}