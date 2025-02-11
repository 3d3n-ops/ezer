"use client"

import { Button } from "@/components/ui/button"

export default function WaitlistForm() {
  return (
    <div className="w-full max-w-md flex justify-center">
      <Button asChild className="bg-white text-purple-900 hover:bg-gray-200">
        <a href="https://tally.so/r/nPboze" target="_blank" rel="noopener noreferrer">
          Join Waitlist
        </a>
      </Button>
    </div>
  )
}

