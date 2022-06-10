import { useState } from 'react'
import { Switch } from '@headlessui/react'

export function MyToggle() {
  const [enabled, setEnabled] = useState(false)
  const mudar = document.getElementById("html");

  if(enabled){
    mudar?.classList.toggle("dark")
  }


  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-blue-600' : 'bg-gray-200'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Switch Color Mode</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white`}
      />
    </Switch>
  )
}