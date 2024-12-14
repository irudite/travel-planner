import React from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
    <header>
      <div className="p-5 shadow-sm flex justify-between items-center px-5">
        <img src="/logo.svg" alt="Reisen Planner Logo" className="h-8" />
        <div className="space-x-3">
          <Button>Log In</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </header>
  );
}

export default Header