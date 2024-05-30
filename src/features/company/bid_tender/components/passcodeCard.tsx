import React, { useState } from "react";

const PasscodeCard: React.FC = () => {
  const [passcode, setPasscode] = useState<string[]>(Array(6).fill(""));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newPasscode = [...passcode];
    newPasscode[index] = e.target.value.slice(-1);
    setPasscode(newPasscode);

    
    if (e.target.value && index < 5) {
      (document.getElementById(`passcode-${index + 1}`) as HTMLInputElement).focus();
    }
  };

  return (

      <div className="flex justify-center mb-4 space-x-2">
        {passcode.map((digit, index) => (
          <input
            key={index}
            id={`passcode-${index}`}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleInputChange(e, index)}
            className="w-12 h-12 text-center text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>
  
  );
};

export default PasscodeCard;
