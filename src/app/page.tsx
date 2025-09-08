import ThemeToggleButton from '@/components/ui/theme-toggle-button';
import React from 'react';
import Link from 'next/link';

function page() {
  return (
    <div className="px-2 min-h-screen w-full h-auto max-w-96">
      <p className="text-3xl font-extrabold"></p>
      <Link href="https://traff.co/ZD6KzX1E" className="text-blue-600 underline">
        favourite cartoon (nya shinChanMovie dekhne pkka theatre jane wala hu)
      </Link>
      <br />
      <Link href="https://traff.co/nzcENdAJ" className="text-blue-600 underline">
        aj tk koi b movie dekhk ni roya pr ye akh m asu ladiya
      </Link>
      <br />
      <Link href="https://traff.co/tT3iMT2F" className="text-blue-600 underline">
        fav movies
      </Link>
      <Link href="/" className="">
        fav khana?? shayad koi nahi hai, vhir bhi nonveg m chicken chilli hi hai shayad aur veg mein shayad dosa
      </Link>
      <Link href="/" className="">
        meri gf???? aap g log sacch m ekdm cbi, cid jaisa inquiry krte ho 💀 
      </Link>
    </div>
  );
}

export default page;

